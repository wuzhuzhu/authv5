// TODO: 优化项,强制新加坡?
// export const preferredRegion = "auto";
// export const runtime = 'edge'
// force dynamic
export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	const start = Date.now();
	const res = await fetch(
		"https://cloud.siliconflow.com/api/v1/playground/cloud",
	);
	const end = Date.now();
	const timeCost = end - start;
	const { data } = await res.json();

	return Response.json({
		...data,
		timeCost,
	});
}