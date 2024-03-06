import { UserNav } from "@/components/auth/user-nav";
import { Button } from "@/components/ui/button";
import { HEADER_LINKS, HeaderLink } from "@/lib/constants/path";
import Link from "next/link";
import NavLinks from "./nav-link";

const Header = () => {
	return (
		<div className="flex w-full bg-[var--background] items-center justify-between px-6">
			<div className="flex-1">
				<Link href="/">
					<p>SiliconFlow(LOGO)</p>
				</Link>
			</div>
			<div className="flex gap-6 items-center">
				<NavLinks />
				<UserNav />
			</div>
		</div>
	);
};

export default Header;
