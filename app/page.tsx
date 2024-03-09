import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import db from "@/lib/db";
import { pacifico } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default async function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-center gradient-bg">
			<div className="space-y-6 text-center">
				<h1 className={cn("font-semibold text-white drop-shadow-md")}>
					⚔️ Auth
				</h1>
				<p className="text-white text-lg">
					A simple authentication service
				</p>
				<LoginButton>
					<Button variant="secondary" size="lg">
						Sign In
					</Button>
				</LoginButton>
			</div>
		</main>
	);
}
