"use client";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/constants/path";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

const Social = () => {
	const handleLogin = async (provider: string) => {
		await signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
	};
	return (
		<div className="flex items-center w-full gap-2">
			<Button
				onClickCapture={() => handleLogin("github")}
				size="lg"
				className="w-full"
				variant="outline"
				onClick={() => {}}
			>
				<FaGithub size={18} />
			</Button>
			<Button
				onClickCapture={() => handleLogin("google")}
				size="lg"
				className="w-full"
				variant="outline"
				onClick={() => {}}
			>
				<FaGoogle size={18} />
			</Button>
		</div>
	);
};

export default Social;
