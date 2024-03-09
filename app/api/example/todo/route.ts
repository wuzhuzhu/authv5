export async function GET() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await res.json();
	console.log("on route handler ", { data });

	return Response.json({ data });
}
