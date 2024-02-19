"use server";

import { log } from "console";
import { z } from "zod";
import { loginSchema } from "../schema";
import { sleep } from "../utils";

// for testing error
const loginSchema1 = loginSchema.extend({
	bad: z.string().min(10),
});

export const loginActon = async (values: z.infer<typeof loginSchema>) => {
	if (process.env.NODE_ENV !== "production") await sleep(1000);
	// const validated = loginSchema1.parse(values)
	const validated = loginSchema.safeParse(values);

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
