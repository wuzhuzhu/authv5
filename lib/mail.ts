import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST as string,
	port: Number(process.env.SMTP_PORT),
	secure: false,
	requireTLS: true,
	auth: {
		user: process.env.SMTP_USER as string,
		pass: process.env.SMTP_PASSWORD as string,
	},
});

// await transporter.sendMail(options);

export const sendVerificationEmail = async (
  to: string,
  token: string
) => {
  const confirmationLink = `${process.env.DOMAIN}/auth/verify-email?token=${token}`;
  const options = {
    from: process.env.EMAIL_FROM,
    to,
    subject: `${process.env.SITE_NAME}: Verify your email address`,
    html: `<p>Click <a href="${confirmationLink}">Here</a> to confirm email</p>`,
  };
  await transporter.sendMail(options);
};
