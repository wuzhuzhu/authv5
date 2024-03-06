import { getClouds } from "@/lib/data/example";

const ImageModelPage = async () => {
	const data = await getClouds(); // fake fetch
	return (
		<>
			<div className="flex-1 bg-accent p-4">
				<h3>Conversation Here</h3>
				<p>{JSON.stringify(data?.data)}</p>
			</div>
			<div className="basis-40 bg-accent p-4 pr-8">Form</div>
		</>
	);
};

export default ImageModelPage;
