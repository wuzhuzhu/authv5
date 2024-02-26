import authConfig from "@/lib/auth.config";
import db from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserRole } from "@prisma/client";
import NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		/** The user's postal address. */
		role: UserRole;
		emailVerified?: Date | null;
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
		async linkAccount({ user, profile }) {
			// console.log("!!!!!from events!!!", { user, profile });
			await db.user.update({
				where: { id: user?.id },
				data: { emailVerified: new Date() },
			});
			if (profile.image && !user.image) {
				await db.user.update({
					where: { id: user?.id },
					data: { image: profile.image },
				});
			}
		},
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {

			if (account?.provider !== "credentials") {
				return true;
			}
			if (account?.provider === "credentials" && !user?.emailVerified) {
				return `/auth/no-verify/${encodeURIComponent(user?.email || "")}`;
			}
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
