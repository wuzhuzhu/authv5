import { getClouds } from "@/lib/data/example";

const ChatModelPage = async () => {
	const data = await getClouds(); // fake fetch
	return (
		<>
			<form action="generate">
				<div className="flex-1 bg-accent p-4">
					<h3>Conversation Here</h3>
					<p>{JSON.stringify(data?.data)}</p>
				</div>
				<div className="basis-[320px] bg-white p-6 rounded-md">
					Form
				</div>
			</form>
		</>
	);
};

export default ChatModelPage;
