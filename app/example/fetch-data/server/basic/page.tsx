import Clouds from "@/components/example/clouds";
import { getClouds, getCurrentTime } from "@/lib/data/example";

const Page = async () => {
	const data = await getClouds();
	return (
		<div>
			{/* {JSON.stringify(data?.data)} */}
			<Clouds clouds={data?.data} />
		</div>
	);
};

export default Page;

export const revalidate = 30; // revalidate at most every hour
