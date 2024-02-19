"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";
import Social from "./social";

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	cardDescription?: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}

const CardWrapper = ({
	children,
	headerLabel,
	cardDescription,
	backButtonLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProps) => {
	return (
		<Card className="w-[400px] shadow-md">
			<CardHeader>
				<Header label={headerLabel} />
				{cardDescription && (
					<CardDescription className="text-center">
						{cardDescription}
					</CardDescription>
				)}
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				{/* <BackButton label={backButtonLabel} href={backButtonHref} /> */}
				<p className="muted">
					By signing up, I agree to Siliconflow Terms of Service and Privacy
					Policy.
				</p>
			</CardFooter>
		</Card>
	);
};

export default CardWrapper;
