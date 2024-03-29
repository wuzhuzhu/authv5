"use client";

import CardWrapper from "@/components/auth/card-wrapper";
import { loginActon } from "@/lib/actions/auth-action";
import { UserCreateInputSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormError from "@/components/shared/form-error";
import FormSuccess from "@/components/shared/form-success";
import LoadingButton from "@/components/shared/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof UserCreateInputSchema>>({
    resolver: zodResolver(UserCreateInputSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (
    values: z.infer<typeof UserCreateInputSchema>
  ) => {
    startTransition(() => {
      setError("");
      setSuccess("");

      loginActon(values)
        .then((res) => {
          if (res?.success === false) {
            setError(res?.message || "Something went wrong");
          } else {
            if (res?.success === true && res?.message) {
              setSuccess(res?.message);
            }
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="SiliconFlow"
      terms="By signing up, I agree to Siliconflow Terms of Service and Privacy Policy."
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="example@test.com"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="******"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {(error || urlError) && (
            <FormError message={error || urlError} />
          )}
          {success && <FormSuccess message={success} />}
          <LoadingButton
            type="submit"
            className="w-full"
            isLoading={isPending}
          >
            {isPending ? "Loading" : "Login / Register"}
          </LoadingButton>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default LoginForm;
