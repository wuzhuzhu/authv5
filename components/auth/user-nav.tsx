
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/lib/auth";
import { DEFAULT_AVATAR_URL } from "@/lib/constants/config";

import NavList from '@/components/auth/nav-list';

export async function UserNav() {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={session?.user?.image || DEFAULT_AVATAR_URL}
              alt="@shadcn"
            />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name || "Username not set"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <NavList />
        <DropdownMenuSeparator />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button variant="ghost" type="submit" className="w-full">
            Log out
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
