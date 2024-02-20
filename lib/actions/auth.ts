"use server";

import {
	UserCreateInputSchema,
	UserUncheckedCreateInputSchema,
} from "@/prisma/generated/zod";
import bcrypt from "bcrypt";
import { z } from "zod";

import db from "@/lib/db";
import { sleep } from "../utils";

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
			// login in User
			console.log("用户存在", existingUser);
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
		}

		return {
			success: true,
		};
	}
	// 验证失败
	return {
		success: false,
		message: "服务器验证输入失败",
		errors: validated.error.errors,
	};
};
