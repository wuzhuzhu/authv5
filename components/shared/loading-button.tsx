import { RxReload } from "react-icons/rx";
import { Button } from "../ui/button";

interface LoadingButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
