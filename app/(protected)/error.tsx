"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function LoginError({
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
		<div className="flex justify-center p-8 flex-col gap-4 items-center">
			<p>页面内容错误</p>
			<div>
				<Button
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					Try again
				</Button>
			</div>
		</div>
	);
}
