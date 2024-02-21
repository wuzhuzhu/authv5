/**
 * @description define all public routes which not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * @description define all auth routes are used for authentication, will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * @description for api authentication routes, will always allow not logged in users to access
 */
export const apiAuthPrefix = "/api/auth";

/**
 * the default login redirect path
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
export const LOGIN_ROUTE = "/auth/login";
