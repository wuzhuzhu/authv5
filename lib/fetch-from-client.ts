import { redirect } from "next/navigation";
import { LOGIN_ROUTE } from "./constants/path";
export async function fetchFromClient(input: RequestInfo, init?: RequestInit) {
	try {
		let url = input;
		if (typeof input === "string" && input.startsWith("/api/v1")) {
			//省略本地网站域名,一般是/api/v1
			url = `${process.env.NEXT_PUBLIC_API_DOMAIN}${input}`;
			debugger;
		} else if (typeof input === "string" && input.startsWith("/api/")) {
			//省略本地网站域名
			url = `${process.env.NEXT_PUBLIC_DOMAIN}${input}`;
		}
		console.log("fetching data from URL: ", url, init);
		// 客户端发起请求,同站cookie自动附加
		const response = await fetch(url, {
			...init,
		});

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
