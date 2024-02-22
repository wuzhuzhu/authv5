"use client"; // Error components must be Client Components

import { FaExclamationTriangle } from "react-icons/fa";

import CardWrapper from "@/components/auth/card-wrapper";
import { useEffect } from "react";

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
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
}
