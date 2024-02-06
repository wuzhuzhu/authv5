import React, { Children } from "react";
import { Button } from "../ui/button";
import { RxReload } from "react-icons/rx";

interface LoadingButtonProps {
	// className?: React.ComponentProps<"div">["className"];
	isLoading: boolean;
	children: React.ReactNode;
}

const LoadingButton = ({
	isLoading,
	children,
	...rest
}: LoadingButtonProps) => {
	return (
		<Button {...rest} disabled={isLoading}>
			{isLoading && <RxReload className="mr-2 h-4 w-4 animate-spin" />}
			{children}
		</Button>
	);
};

export default LoadingButton;
