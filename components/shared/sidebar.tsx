"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import DarkLightToggle from "./dark-light-toggle";

export interface SidebarNavProps {
	items: SidebarNavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
	const pathname = usePathname();

	return items.length ? (
		<div className="w-full h-full py-4 ml-2">
			<div className="w-full h-full pt-4 bg-white rounded-md flex-col justify-start items-start gap-4 inline-flex">
				{items.map((item, index) => (
					<div
						key={index}
						className={cn("pb-8 w-full flex flex-col gap-2")}
					>
						<h4 className="text-gray-950 text-lg font-semibold font-['Roboto'] leading-7 mx-4">
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
		</div>
	) : null;
}

interface SidebarNavItemsProps {
	items: SidebarNavItem[];
	pathname: string | null;
}

export function SidebarNavItems({ items, pathname }: SidebarNavItemsProps) {
	return items?.length ? (
		<div className="w-full px-3 py-2 grid grid-flow-row auto-rows-max text-sm">
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
