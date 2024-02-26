"use server";

import { UserCreateInputSchema } from "@/lib/schema";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { signIn } from "@/lib/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/constants/path";
import db from "@/lib/db";
import { sleep } from "@/lib/utils";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "../tokens";

export const loginActon = async (
	values: z.infer<typeof UserCreateInputSchema>,
) => {
	// if (process.env.NODE_ENV !== "production") await sleep(1000);
	// const validated = loginSchema1.parse(values)
	const validated = UserCreateInputSchema.safeParse(values);

	// 验证成功
	if (validated.success) {
		const { email, password } = validated.data;
		// console.log("validated", validated.data);

		// 检查数据库是否有这个用户
		const existingUser = await db.user.findUnique({
			where: {
				email,
			},
			include: {
				accounts: true,
			},
		});

		if (existingUser) {
			// 用户登录流程
			try {
				if (!existingUser.password && existingUser.accounts.length > 0) {
					// if no password and has oauth account, tell user login with oauth and set password
					return {
						success: false,
						message: "Please login with your OAuth account and set a password",
					};
				}
				await signIn("credentials", {
					email,
					password,
					redirectTo: DEFAULT_LOGIN_REDIRECT,
				});
			} catch (error) {
				if (error instanceof AuthError) {
					switch (error.type) {
						case "CredentialsSignin":
							return {
								success: false,
								message: "Invalid Credentials",
								// error,
							};
						default:
							return {
								success: false,
								message: "Something went wrong",
								// error,
							};
					}
				}
				throw error;
			}
		}
		if (password) {
			// 没有现存用户,且有密码: 新用户注册流程
			// 密码注册
			const verificationToken = await generateVerificationToken(email);
			// create User
			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser = await db.user.create({
				data: {
					email,
					password: hashedPassword,
				},
			});

			console.log("action: ", verificationToken);

			return {
				success: true,
				message: "Verification email sent",
				// data: newUser,
				// verificationToken,
			};
			// await signIn("credentials", {
			// 	email,
			// 	password,
			// 	redirectTo: DEFAULT_LOGIN_REDIRECT,
			// });
		}
	} else {
		// 验证失败
		return {
			success: false,
			message: "服务器验证输入失败",
			// error: validated.error.errors,
		};
	}
};

export const verifyEmailByToken = async (token: string, email: string) => {
	const existingUser = await db.user.findUnique({
		where: {
			email,
		},
	});

	if (existingUser?.emailVerified) {
		return {
			success: true,
			message: "User already verified",
		};
	}

	const existingToken = await db.verificationToken.findUnique({
		where: {
			token,
		},
	});

	if (existingToken && existingUser) {
		const hasExpired = existingToken?.expiresAt < new Date();
		if (hasExpired) {
			return {
				success: false,
				message: "Token has expired",
			};
		}

		const user = await db.user.update({
			where: {
				email: email,
			},
			data: {
				emailVerified: new Date(),
				email: existingToken.email, // reused by changing email process
			},
		});

		console.log("user updated", user);

		await db.verificationToken.delete({
			where: {
				id: existingToken.id,
			},
		});

		console.log("token deleted");

		return {
			success: true,
			message: "Email verified",
			data: user,
		};
	}
	return {
		success: false,
		message: "Invalid token",
	};
};
