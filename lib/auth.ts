import authConfig from "@/lib/auth.config";
import db from "@/lib/db";
import { UserRoleType } from "@/lib/schema";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		/** The user's postal address. */

		role: UserRoleType;
	}

	interface Session {
		/** The user's postal address. */
		id: string;
		role: UserRoleType;
	}
}

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	callbacks: {
		async jwt({ token, user, account, profile, isNewUser }) {
			if (user) token.role = user.role;
			return token;
		},
		async session({ session, user, token }) {
			// console.log("sessionToken: ", token);
			session.user.role = token.role as UserRoleType;
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
