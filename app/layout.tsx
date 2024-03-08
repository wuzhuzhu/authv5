import { TailwindIndicator } from "@/components/shared/tailwind-indicator";
import { gloriaHallelujah, pacifico, robotoFlex } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: process.env.SITE_NAME,
	description: `${process.env.SITE_NAME} ${process.env.SITE_DESCRIPTION}`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(robotoFlex.className, "bg-secondary")}>
				{children}
				<Analytics />
			</body>
			{/* responsive design dev tools */}
			{/* <TailwindIndicator /> */}
		</html>
	);
}
