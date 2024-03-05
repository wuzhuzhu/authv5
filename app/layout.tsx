import { TailwindIndicator } from "@/components/shared/tailwind-indicator";
import { gloriaHallelujah, pacifico, robotoFlex } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={robotoFlex.className}>{children}</body>
			{/* responsive design dev tools */}
			{/* <TailwindIndicator /> */}
		</html>
	);
}
