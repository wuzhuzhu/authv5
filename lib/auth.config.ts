import { UserSchema } from "@/lib/schema";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import db from "@/lib/db";
import type { NextAuthConfig, User } from "next-auth";
import { z } from "zod";

export default {
	providers: [
		Credentials({
			async authorize(credentials): Promise<User | null> {
				const validated = UserSchema.pick({
					email: true,
					password: true,
				})
					.extend({
						password: z.string().min(6, {
							message: "Password must be at least 6 characters",
						}),
					})
					.safeParse(credentials);
				if (validated.success) {
					const { email, password } = validated.data;
					const user = await db.user.findUnique({
						where: { email },
					});
					if (!user || !user.password) {
						return null;
					}

					// TODO: check emailVerified
					const passwordMatch = bcrypt.compareSync(password, user.password);
					if (passwordMatch) return user;
				} else {
					return null;
				}
			},
		}),
		GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
} satisfies NextAuthConfig;
