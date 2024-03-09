import { LOGIN_ROUTE } from "@/lib/constants/path";
import { fetchFromServer } from "@/lib/fetch-from-server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

// export const dynamic = "force-dynamic"; // for testing
const Page = async () => {
	const data = await fetchFromServer("/api/example/todo");
	return (
		<div>
			<h1 className="text-2xl">
				服务端发请求务必记得带header,否则中间件会拦截未登录api
			</h1>
			{JSON.stringify(data)}
			{/* <Clouds clouds={data?.data} /> */}
		</div>
	);
};

export default Page;
