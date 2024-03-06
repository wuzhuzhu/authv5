"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface SidebarNavProps {
	items: SidebarNavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
	const pathname = usePathname();

	return items.length ? (
		<div className="w-full h-full bg-accent pl-8 py-4">
			{items.map((item, index) => (
				<div key={index} className={cn("pb-8")}>
					<h4 className="mb-1 rounded-md pr-2 py-1 text-sm font-bold">
						{item.title}
					</h4>
					{item.items ? (
						<SidebarNavItems
							items={item.items}
							pathname={pathname}
						/>
					) : null}
				</div>
			))}
		</div>
	) : null;
}

interface SidebarNavItemsProps {
	items: SidebarNavItem[];
	pathname: string | null;
}

export function SidebarNavItems({ items, pathname }: SidebarNavItemsProps) {
	return items?.length ? (
		<div className="grid grid-flow-row auto-rows-max text-sm">
			{items.map((item, index) =>
				!item.disabled && item.href ? (
					<Link
						key={item.title}
						href={item.href}
						className={cn(
							"flex w-full items-center rounded-md p-2 hover:underline",
							{
								"bg-muted": pathname?.includes(item.href),
							},
						)}
						target={item.external ? "_blank" : ""}
						rel={item.external ? "noreferrer" : ""}
					>
						{item.title}
					</Link>
				) : (
					<span
						key={index}
						className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
					>
						{item.title}
					</span>
				),
			)}
		</div>
	) : null;
}
