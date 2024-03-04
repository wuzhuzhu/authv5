import { sleep } from "@/lib/utils";
import { format } from "date-fns";

export async function getClouds() {
	await sleep(1000);
	const res = await fetch(
		"https://cloud.siliconflow.com/api/v1/playground/cloud",
		{
			next: {
				revalidate: 600, // revalidate at most every 10 minutes
			},
		},
	);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export async function getError() {
	await sleep(1000);
	const fiftyPercent = Math.random() > 0.5;
	if (fiftyPercent) throw new Error("a error happend");
	const res = await fetch(
		"https://cloud.siliconflow.com/api/v1/playground/cloud",
		{
			next: {
				revalidate: 600, // revalidate at most every 10 minutes
			},
		},
	);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
