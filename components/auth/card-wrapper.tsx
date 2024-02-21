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
	terms?: string;
	backButtonLabel?: string;
	backButtonHref?: string;
	showSocial?: boolean;
}

const CardWrapper = ({
	children,
	headerLabel,
	cardDescription,
	backButtonLabel,
	backButtonHref,
	showSocial,
	terms,
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
				{backButtonLabel && (
					<BackButton label={backButtonLabel} href={backButtonHref} />
				)}
				{terms && <p className="muted">{terms}</p>}
			</CardFooter>
		</Card>
	);
};

export default CardWrapper;
