import authConfig from "@/lib/auth.config";
import {
	DEFAULT_LOGIN_REDIRECT,
	LOGIN_ROUTE,
	apiAuthPrefix,
	authRoutes,
	publicRoutes,
} from "@/lib/constants/path";
import NextAuth, { Session } from "next-auth";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export interface NextAuthRequest extends NextRequest {
	auth: Session | null;
}

export const { auth } = NextAuth(authConfig);

export default auth(
	(req: NextRequest & { auth: Session | null }): Response | undefined => {
		const response = NextResponse.next();
		const { nextUrl } = req;
		// console.log("[FROM Middleware]Route:", nextUrl.pathname);
		const isLoggedIn = !!req.auth;

		const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
		const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
		const isAuthRoute = authRoutes.includes(nextUrl.pathname);

		if (isApiAuthRoute) return response;
		if (isAuthRoute) {
			if (isLoggedIn)
				return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
			return response;
		}
		if (!isLoggedIn && !isPublicRoute)
			return NextResponse.redirect(new URL(LOGIN_ROUTE, nextUrl));

		return response;

		// console.log("[FROM Middleware]Route:", req.nextUrl.pathname);
	},
);

// Optionally, don't invoke Middleware on some paths
export const config = {
	// from authjs docs:
	// matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
	// from clerk: https://clerk.com/docs/quickstarts/nextjs?utm_source=sponsorship&utm_medium=youtube&utm_campaign=code-with-antonio&utm_content=12-31-2023#add-authentication-to-your-app
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
