"use client";
import FormError from "@/components/shared/form-error";
import { verifyEmailByToken } from "@/lib/actions/auth-action";
import { LOGIN_ROUTE } from "@/lib/constants/path";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import CardWrapper from "./card-wrapper";

const VerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("Confirming your verification");
  const router = useRouter();
  useEffect(() => {
    setError("");
    onSubmit();
  }, []);
  const onSubmit = useCallback(async () => {
    if (!token) {
      setError("No token found");
      return;
    }
    verifyEmailByToken(token, email as string)
      .then((res) => {
        console.log("form action client res: ", res);
        if (res.success) {
          setTitle("Email verified, redirecting to login...");
          setTimeout(() => {
            router.push(LOGIN_ROUTE);
          }, 1000);
        } else {
          setError(res.message);
        }
      })
      .catch((err) => {
        console.log("form action client err: ", err);
        setError(err.message);
      });

    console.log(token);
  }, [token, email]);

  return (
    <CardWrapper
      headerLabel={title}
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full justify-center my-8">
        <FaSpinner
          size="30"
          className="text-slate-400 animate-spin"
        />
      </div>
      {error && <FormError message={error} />}
    </CardWrapper>
  );
};

export default VerificationForm;
