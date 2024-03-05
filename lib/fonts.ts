import {
	Gloria_Hallelujah,
	Inter,
	Pacifico,
	Roboto_Flex,
} from "next/font/google";

export const pacifico = Pacifico({
	subsets: ["latin"],
	variable: "--font-pacifico",
	weight: ["400"],
	display: "swap",
});

export const gloriaHallelujah = Gloria_Hallelujah({
	subsets: ["latin"],
	variable: "--font-gloria-hallelujah",
	weight: ["400"],
	display: "swap",
});

export const robotoFlex = Roboto_Flex({
	subsets: ["latin"],
	// variable: "--font-roboto-flex",
	weight: ["100", "200", "400", "500", "600"],
	// display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["400"],
	display: "swap",
});
