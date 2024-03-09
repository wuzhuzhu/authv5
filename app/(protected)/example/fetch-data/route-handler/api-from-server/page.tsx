export const dynamic = "force-dynamic";

async function getData() {
	const res = await fetch("http://localhost:3000/api/todo");
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	console.log("on route handler ", { res });

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const Page = async () => {
	const data = await getData();
	return (
		<div>
			<h1 className="text-2xl">绝了啊</h1>
			{JSON.stringify(data)}
			{/* <Clouds clouds={data?.data} /> */}
		</div>
	);
};

export default Page;
