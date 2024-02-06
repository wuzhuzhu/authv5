"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
	children: React.ReactNode;
	mode?: "modal" | "redirect";
	asChild?: boolean;
}

const LoginButton = ({
	children,
	mode = "redirect",
	asChild,
}: LoginButtonProps) => {
	const router = useRouter();
	const onClick = () => {
		router.push("/auth/login");
	};
	if (mode === "modal") {
		return <div>TODO: Implement modal later</div>;
	}

	return (
		<div
			className="cursor-pointer"
			onClick={onClick}
			onKeyUp={onClick}
			onKeyDown={onClick}
		>
			{children}
		</div>
	);
};

export default LoginButton;
