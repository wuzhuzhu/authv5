import { getClouds } from "@/lib/data/example";
import { fetchFromServer } from "@/lib/fetch-from-server";
import { headers } from "next/headers";

const APIKeysPage = async () => {
	const data = await fetchFromServer("http://localhost:3001/api/dinasour");
	return (
		<div className="grid gap-4">
			<h3>APIKeysPage</h3>
			<div>{JSON.stringify(data)}</div>
		</div>
	);
};

export default APIKeysPage;
