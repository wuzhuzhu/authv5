import CardWrapper from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { generateVerificationToken } from "@/lib/tokens";

const NoVerificationPage = ({
  params,
}: {
  params: { email: string };
}) => {
  const email = decodeURIComponent(params.email);
  const resend = async () => {
    "use server";
    await generateVerificationToken(email);
  };
  return (
    <CardWrapper
      headerLabel="Verify Email Sent!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex justify-center items-center flex-col space-y-4">
        <p className=" text-center">
          Please check your Email: {email}
        </p>
        {/* TODO */}
        <form action={resend}>
          <Button variant="ghost">resent email</Button>
        </form>
      </div>
    </CardWrapper>
  );
};

export default NoVerificationPage;
