import db from "@/lib/db";

export const getVerificationByEmail = async (email: string) => {
	return db.verificationToken.findFirst({
		where: {
			email,
		},
	});
};

export const getVerificationByToken = async (token: string) => {
	return db.verificationToken.findUnique({
		where: {
			token,
		},
	});
};
