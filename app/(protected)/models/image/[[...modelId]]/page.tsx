import { getClouds } from "@/lib/data/example";

const ImageModelPage = async () => {
	const data = await getClouds(); // fake fetch
	return (
		<>
			<form className="flex gap-2 h-full" action="generate">
				<div className="flex-1 bg-white rounded-md p-6">
					<h3>
						Preview Image Here12312312123123123
						12312312312123123123123123123 123123 123123123
					</h3>
					<p>{JSON.stringify(data?.data)}</p>
				</div>
				<div className="basis-[320px] bg-white p-6 rounded-md">
					Form
				</div>
			</form>
		</>
	);
};

export default ImageModelPage;
