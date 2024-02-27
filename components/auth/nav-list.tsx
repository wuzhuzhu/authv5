'use client'
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavList() {
  const pathname = usePathname();
  return (
    <DropdownMenuGroup>
      <DropdownMenuItem className={cn(pathname.includes('/profile') ? `bg-accent text-accent-foreground` : ``)}>
        <Link href="/profile" >
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem className={cn(pathname.includes('/billing') ? `bg-accent text-accent-foreground` : ``)}>
        <Link href="/billing">
          Billing
        </Link>
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className={cn(pathname.includes('/settings') ? `bg-accent text-accent-foreground` : ``)}>
        <Link href="/settings">
          Settings
        </Link>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
}