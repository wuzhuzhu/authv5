import { fetchFromServer } from "@/lib/fetch-from-server";
import { sleep } from "@/lib/utils";
import { headers } from "next/headers";
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// https://github.com/nextauthjs/next-auth/issues/7423

// export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
	await sleep(1000);
	// No login required example, don't use headers
	const data = await fetchFromServer(
		"https://cloud.siliconflow.com/api/v1/playground/cloud",
	);
	return Response.json(data);
}
