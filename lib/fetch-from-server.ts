import { PaginationSectionProps } from "@/components/shared/types/pagination";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LOGIN_ROUTE } from "./constants/path";

type FetchDataProps = {
	input: RequestInfo;
	init?: RequestInit;
};

export async function fetchFromServer(
	input: RequestInfo,
	init?: RequestInit,
	forwardHeaders = true, // 确定无需附带cooke的情况,可以关闭以启用缓存
) {
	try {
		let url = input;
		if (typeof input === "string" && input.startsWith("/api/v1")) {
			//省略本地网站域名,一般是/api/v1
			url = `${process.env.NEXT_PUBLIC_API_DOMAIN}${input}`;
		} else if (typeof input === "string" && input.startsWith("/api/")) {
			//省略本地网站域名
			url = `${process.env.NEXT_PUBLIC_DOMAIN}${input}`;
		}
		console.log("fetching data from URL: ", url, init);
		const options = forwardHeaders ? { ...init, headers: headers() } : init;
		// 服务端发起请求,需要手动带上header
		const response = await fetch(url, options);

		switch (response.status) {
			case 401:
				redirect(LOGIN_ROUTE);
				break;
			case 200:
				return await response.json();
			default:
				throw new Error("Failed to fetch data");
		}
	} catch (error) {
		// TODO: handle request error
		// notice both server and client side
		console.error("Failed to fetch data", error);
		throw error;
	}
}
