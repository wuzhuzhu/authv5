import { VERIFICATION_TOKEN_EXPIRES } from "@/lib/constants/config";
import { getVerificationByEmail } from "@/lib/data/verification-token";
import db from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

export const generateVerificationToken = async (email: string) => {
	const token = uuidv4();
	const expiresAt = new Date(new Date().getTime() + VERIFICATION_TOKEN_EXPIRES); // 1 hour later
	const existingToken = await getVerificationByEmail(email);

	console.log("existingToken", existingToken);

	if (existingToken) {
		await db.verificationToken.delete({
			where: {
				id: existingToken.id,
			},
		});
		console.log("deleted.");
	}

	const verificationToken = db.verificationToken.create({
		data: {
			token,
			expiresAt,
			email,
		},
	});

	return verificationToken;
};