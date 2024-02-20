"use server";

import {
	UserCreateInputSchema,
	UserUncheckedCreateInputSchema,
} from "@/prisma/generated/zod";
import bcrypt from "bcrypt";
import { z } from "zod";
import { loginSchema } from "../schema";
import { sleep } from "../utils";

export const loginActon = async (values: z.infer<typeof loginSchema>) => {
	if (process.env.NODE_ENV !== "production") await sleep(1000);
	// const validated = loginSchema1.parse(values)
	const validated = UserCreateInputSchema.safeParse(values);

	if (validated.success) {
		console.log("validated", validated.data);

		return {
			success: true,
		};
	}
	return {
		success: false,
		message: "服务器验证输入失败",
		errors: validated.error.errors,
	};
};
