import { fetchFromServer } from "@/lib/fetch-from-server";

export async function GET() {
	const data = await fetchFromServer(
		"https://jsonplaceholder.typicode.com/todos/1",
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
	console.log("on route handler ", { data });

	return Response.json({ data });
}
