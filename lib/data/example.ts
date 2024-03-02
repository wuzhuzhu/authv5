import { sleep } from "@/lib/utils";

export async function getClouds() {
	await sleep(1000);
	const res = await fetch(
		"https://cloud.siliconflow.com/api/v1/playground/cloud",
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
	throw new Error("A error should be throwed.");
}