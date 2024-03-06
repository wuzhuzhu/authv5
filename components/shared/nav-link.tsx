"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HEADER_LINKS, type HeaderLink } from "@/lib/constants/path";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const components: {
	title: string;
	href: string;
	description: string;
}[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

const NavLinks = () => {
	const pathname = usePathname();
	return (
		<NavigationMenu>
			<NavigationMenuList className="my-3 ">
				{HEADER_LINKS.map((menu, index) => (
					<NavLink key={`nav-link-${index}`} menu={menu} />
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const NavLink = ({ menu }: { menu: HeaderLink }) => {
	return (
		<NavigationMenuItem>
			{menu.subLinks ? (
				<>
					<NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="flex flex-col p-4 w-[200px] ">
							{menu.subLinks.map((sub, index) => (
								<ListItem
									key={`component.title-${index}`}
									title={sub.title}
									href={sub.href}
								>
									{sub.title}
								</ListItem>
							))}
						</div>
					</NavigationMenuContent>
				</>
			) : (
				<Link href={menu.href as string} legacyBehavior passHref>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
					>
						{menu.title}
					</NavigationMenuLink>
				</Link>
			)}
		</NavigationMenuItem>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<NavigationMenuLink asChild>
			<a
				ref={ref}
				className={cn(
					"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
					className,
				)}
				{...props}
			>
				<div className="text-sm font-medium leading-none">{title}</div>
			</a>
		</NavigationMenuLink>
	);
});
ListItem.displayName = "ListItem";

export default NavLinks;
