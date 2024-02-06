import { BsCheckCircle } from "react-icons/bs";

interface FormSuccessProps {
	message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
	return (
		<div className="bg-emerald-500/15 rounded-md flex p-4 items-center justify-start gap-x-2 text-sm text-emerald-500">
			<BsCheckCircle size={18} />
			<span>{message}</span>
		</div>
	);
};

export default FormSuccess;
