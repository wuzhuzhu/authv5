"use client";

import CardWrapper from "@/components/auth/card-wrapper";
import { loginActon } from "@/lib/actions/auth";
import { loginSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormError from "@/components/shared/form-error";
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
	const [error, setError] = useState("");
	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		startTransition(() => {
			setError("");

			loginActon(values).then((res) => {
				if (!res?.success) {
					setError(res?.message || "Something went wrong");
				}
			});
		});
	};

	return (
		<CardWrapper
			headerLabel="SiliconFlow"
			backButtonLabel="Don't have an account?"
			backButtonHref="/auth/register"
			showSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
					{error && <FormError message={error} />}
					<LoadingButton type="submit" className="w-full" isLoading={isPending}>
						{isPending ? "Loading" : "Login"}
					</LoadingButton>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default LoginForm;
