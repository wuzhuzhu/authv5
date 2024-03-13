import Clouds from "@/components/example/clouds";
import { fetchFromServer } from "@/lib/fetch-from-server";

const Page = async () => {
	const json = await fetchFromServer("/api/v1/apikey/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return (
		<div>
			{JSON.stringify(json?.data)}
			{/* <Clouds clouds={data?.data} /> */}
		</div>
	);
};

export default Page;

export const revalidate = 30; // revalidate at most every hour
