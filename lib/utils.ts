import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { number } from "zod";
import type { PromptSuggestion } from "./types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, process.env.NODE_ENV === "development" ? ms : 0);
	});
}

export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "Unknown Error Occurred";
	}

	return message;
};

export function tsObjectToJsonObject(obj: object) {
	console.log(JSON.parse(JSON.stringify(obj)));
	return JSON.parse(JSON.stringify(obj));
}

export function getSomeRandomPromptSuggestions(
	suggestions: PromptSuggestion[],
	count: number,
) {
	if (count <= 0) {
		return [];
	}
	if (count >= suggestions.length) {
		return suggestions;
	}
	const randomSuggestions = suggestions.sort(() => 0.5 - Math.random());

	return randomSuggestions.slice(0, count);
}
