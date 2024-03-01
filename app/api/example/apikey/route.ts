import { headers } from "next/headers";
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// https://github.com/nextauthjs/next-auth/issues/7423

// export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
	// No login required example, don't use headers
	const res = await fetch(
		"https://cloud.siliconflow.com/api/v1/apikey/page?current=1&pageSize=10&total=0",
		{
			headers: headers(), // forward headers from client to backend. !!使用headers会强制退出缓存!!
		},
	);
	const data = await res.json();
	return Response.json({ data });
}