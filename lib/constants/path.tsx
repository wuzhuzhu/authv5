/**
 * @description define all public routes which not require authentication
 * @type {string[]}
 */

import { BsChatDots } from "react-icons/bs";
import { FaImage, FaImages, FaKey, FaMoneyBill } from "react-icons/fa";
import type { SidebarNavItem } from "../types";

export const publicRoutes = [
	// "/",
	"/speed-test",
	"/api/example/test",
	"/api/example/test-edge",
	"/api/example/test-cache",
];

/**
 * @description define all auth routes are used for authentication, will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
	"/auth/login",
	"/auth/register",
	"/auth/error",
	"/auth/no-verify",
	"/auth/verify-email",
];

/**
 * @description for api authentication routes, will always allow not logged in users to access
 */
export const apiAuthPrefix = "/api/auth";

/**
 * the default login redirect path
 */
export const DEFAULT_LOGIN_REDIRECT = "/models/chat";
export const LOGIN_ROUTE = "/auth/login";

export type HeaderLink = {
	title: string;
	href?: string;
	subLinks?: HeaderLink[];
	target?: string;
};

export const HEADER_LINKS: HeaderLink[] = [
	{
		title: "Products",
		subLinks: [
			{
				title: "Product 1",
				href: "/product/1",
			},
			{
				title: "Product 2",
				href: "/product/2",
			},
		],
	},
	{
		title: "Pricing",
		href: "//pricing.example.com",
	},
	{
		title: "Blog",
		href: "//blog.example.com",
	},
	{
		title: "Docs",
		href: "//docs.example.com",
	},
	{
		title: "About",
		href: "//about.example.com",
		target: "_blank",
	},
];

export const SIDEBAR_MENU: SidebarNavItem[] = [
	{
		title: "Playgound",
		description: "Temporary Free",
		items: [
			{
				title: "Chat",
				icon: <BsChatDots />,
				href: "/models/chat",
			},
			{
				title: "Text To Image",
				icon: <FaImage />,
				href: "/models/image/text-to-image",
			},
			{
				title: "Image To Image",
				icon: <FaImages />,
				href: "/models/image/image-to-image",
			},
		],
	},
	{
		title: "Account",
		items: [
			{
				title: "API keys",
				icon: <FaKey />,
				href: "/keys",
			},
			{
				title: "Billing",
				icon: <FaMoneyBill />,
				href: "/billing",
				disabled: true,
			},
		],
	},
];
