import CardWrapper from "@/components/auth/card-wrapper";

const AuthErrPage = () => {
  return (
    <CardWrapper
      headerLabel="Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex justify-center items-center flex-col">
        <p className="text-xl text-center">
          Verify Email Sent.Please check your Email
        </p>
        {/* TODO */}
        <p>resent email</p>
      </div>
    </CardWrapper>
  );
};

export default AuthErrPage;
