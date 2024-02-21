import { FaExclamationTriangle } from "react-icons/fa";

import CardWrapper from "@/components/auth/card-wrapper";

const AuthErrPage = () => {
	return (
		<CardWrapper
			headerLabel="Something went wrong!"
			backButtonHref="/auth/login"
			backButtonLabel="Back to Login"
		>
			<div className="w-full flex justify-center items-center">
				<FaExclamationTriangle className="text-5xl text-destructive" />
			</div>
		</CardWrapper>
	);
};

export default AuthErrPage;