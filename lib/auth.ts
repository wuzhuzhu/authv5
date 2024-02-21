import authConfig from "@/lib/auth.config";
import db from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserRole } from "@prisma/client";
import NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		/** The user's postal address. */
		role: UserRole;
	}

	interface Session {
		/** The user's postal address. */
		id: string;
		role: UserRole;
	}
}

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
	},
	events: {
		async linkAccount({ user, isNewUser }) {
			console.log("!!!!!from events", { user, isNewUser });
			await db.user.update({
				where: { id: user?.id },
				data: { emailVerified: new Date() },
			});
		},
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			// has password means login with email and password, and no email verified user will be blocked
			// if (["google", "github"].includes(account.provider)) {
			// 	return profile.email_verified
			// }
			// if (!user.emailVerified) return false;
			// TODO: tell user to verify email
			// return a URL to redirect to: https://next-auth.js.org/configuration/callbacks
			// return '/tell-user-to-verify'
			return true;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			if (user) token.role = user.role;
			return token;
		},
		async session({ session, user, token }) {
			// console.log("sessionToken: ", token);
			session.user.role = token.role as UserRole;
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
