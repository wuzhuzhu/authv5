"use server";

import { UserCreateInputSchema } from "@/lib/schema";
import bcrypt from "bcryptjs";
import { z } from "zod";

import db from "@/lib/db";
import { sleep } from "@/lib/utils";

export const loginActon = async (
	values: z.infer<typeof UserCreateInputSchema>,
) => {
	if (process.env.NODE_ENV !== "production") await sleep(1000);
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
		});

		if (existingUser) {
			// 用户登录流程
			console.log("用户存在", existingUser);
			return {
				success: true,
				actionType: "login",
			};
		}
		// 新用户注册流程
		if (password) {
			// 密码注册
			const hashedPassword = await bcrypt.hash(password, 10);
			// create User
			const newUser = await db.user.create({
				data: {
					email,
					password: hashedPassword,
				},
			});
			return {
				success: true,
				actionType: "register",
			};
		}
	} else {
		// 验证失败
		return {
			success: false,
			message: "服务器验证输入失败",
			errors: validated.error.errors,
		};
	}
};
