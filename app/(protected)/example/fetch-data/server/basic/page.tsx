import Clouds from "@/components/example/clouds";
import { fetchFromServer } from "@/lib/fetch-from-server";

const Page = async () => {
	const data = await fetchFromServer("/api/v1/playground/cloud");
	return (
		<div>
			{/* {JSON.stringify(data?.data)} */}
			<Clouds clouds={data?.data} />
		</div>
	);
};

export default Page;

export const revalidate = 30; // revalidate at most every hour
