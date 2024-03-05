"use client";
import {
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
	const pathname = usePathname();
	return (
		<DropdownMenuGroup>
			<DropdownMenuItem
				className={cn({
					"bg-accent text-accent-foreground":
						pathname.includes("/billing"),
				})}
			>
				<Link className="muted" href="/billing">
					Billing
				</Link>
				<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
			</DropdownMenuItem>
			<DropdownMenuItem
				className={cn({
					"bg-accent text-accent-foreground":
						pathname.includes("/settings"),
				})}
			>
				<Link href="/settings">Settings</Link>
				<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
			</DropdownMenuItem>
		</DropdownMenuGroup>
	);
}
