import { getClouds } from "@/lib/data/example";

const APIKeysPage = async () => {
	const data = await getClouds(); // fake fetch
	return (
		<div className="grid gap-4">
			<h3>APIKeysPage</h3>
			<div>{JSON.stringify(data)}</div>
		</div>
	);
};

export default APIKeysPage;
