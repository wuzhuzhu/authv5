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
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			// has password means login with email and password, and no email verified user will be blocked
			// if (credentials?.password && !user.emailVerified) return false;
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
