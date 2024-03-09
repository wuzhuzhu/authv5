import Clouds from "@/components/example/clouds";
import { fetchFromServer } from "@/lib/fetch-from-server";

const Page = async () => {
	const data = await fetchFromServer("https://dummyjson.com/products/1");
	// const json = await data.json();
	return (
		<div>
			{/* {JSON.stringify(data?.data)} */}
			<h1>3rd party</h1>
			<p>{JSON.stringify(data)}</p>
		</div>
	);
};

export default Page;

export const revalidate = 30; // revalidate at most every hour
