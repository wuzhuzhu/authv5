"use client";
import FormError from "@/components/shared/form-error";
import { verifyEmailByToken } from "@/lib/actions/auth-action";
import { LOGIN_ROUTE } from "@/lib/constants/path";
import { redirect, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import CardWrapper from "./card-wrapper";

const VerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState("");
  useEffect(() => {
    onSubmit();
  }, []);
  const onSubmit = useCallback(async () => {
    setError("");
    if (!token) {
      setError("No token found");
      return;
    }
    verifyEmailByToken(token)
      .then((res) => {
        if (res.success) {
          redirect(LOGIN_ROUTE);
        } else {
          setError(res.message);
        }
      })
      .catch((err) => {
        setError(err.message);
      });

    console.log(token);
  }, [token]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
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
