import authConfig from "@/lib/auth.config";
import db from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";

const prisma = new PrismaClient();

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	callbacks: {
		async jwt({ token, user, account, profile, isNewUser }) {
			console.log({ token, user, profile });
			return token;
		},
		async session({ session, user, token }) {
			console.log("sessionToken: ", token);
			return {
				...session,
				id: token?.sub,
			};
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
