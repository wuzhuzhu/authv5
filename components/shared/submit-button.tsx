import { RxReload } from "react-icons/rx";
import { Button } from "../ui/button";

interface SubmitButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	// className?: React.ComponentProps<"div">["className"];
	isLoading: boolean;
	children: React.ReactNode;
	action: string;
}

const SubmitButton = ({ isLoading, children, ...rest }: SubmitButtonProps) => {
	return (
		<Button {...rest} disabled={isLoading}>
			{isLoading && <RxReload className="mr-2 h-4 w-4 animate-spin" />}
			{children}
		</Button>
	);
};

export default SubmitButton;
