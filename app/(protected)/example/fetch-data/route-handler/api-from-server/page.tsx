import { LOGIN_ROUTE } from "@/lib/constants/path";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

async function getData() {
	// 服务端组件发出请求,默认不带cookie,会导致中间件返回401; 需要手动添加header以附带cookie
	const res = await fetch("http://localhost:3000/api/todo", {
		headers: headers(),
	});
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// const value = cookies().get("authjs.session-token")?.value;
	// console.log(
	// 	"on route handler ",
	// 	{ res, value },
	// 	res.headers.get("authjs.session-token"),
	// );

	if (!res.ok) {
		if (res.status === 401) {
			// This will activate the `not-found.js` Error Boundary
			redirect(LOGIN_ROUTE);
		}
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const Page = async () => {
	const data = await getData();
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
