import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps {
	message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
	return (
		<div className="bg-destructive/15 rounded-md flex p-4 items-center justify-start gap-x-2 text-sm text-destructive">
			<BsExclamationTriangle size={18} />
			<span>{message}</span>
		</div>
	);
};

export default FormError;
