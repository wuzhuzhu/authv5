import { Button } from "@/components/ui/button";
import { PAGE_SIZE } from "@/lib/constants/config";
import { getApiKeys } from "@/lib/data/keys";
import { fetchFromServer } from "@/lib/fetch-from-server";
import type { Pagination } from "@/lib/types";
import { sleep } from "@/lib/utils";
import { get } from "lodash";
import { revalidatePath } from "next/cache";

const APIKeysPage = async ({
	params: { pageNumber = "1" },
}: { params: { pageNumber: string } }) => {
	const pageParams: Pagination = {
		current: pageNumber,
		pageSize: PAGE_SIZE,
		// total: 0
	};
	const searchParams = new URLSearchParams(pageParams);
	// console.log("fetching data from URL: ", `/api/v1/keys/?${searchParams}`);
	// const data = await fetchFromServer(`/api/v1/keys/?${searchParams}`);

	const keys = await getApiKeys(pageParams);

	async function createNewKey() {
		"use server";
		await sleep(1000);
		const data = await fetchFromServer("/api/v1/keys", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		// 清除缓存
		revalidatePath("/keys");
		return data;
		// return {
		// 	success: true,
		// 	key: {
		// 		id: "3",
		// 		secret: "lkadsjflkasjl;fkdjaslkdfjlksjdflkj",
		// 		createdAt: {
		// 			seconds: 1630454400,
		// 		},
		// 	},
		// };
	}

	return (
		<div className="grid gap-4">
			<h3>APIKeysPage</h3>
			<form action="createNewKey">
				<Button type="submit">Create A New Key</Button>
			</form>
			{/* <div>{JSON.stringify(data)}</div> */}
			<div>{searchParams.toString()}</div>
			<div>{JSON.stringify(keys)}</div>
		</div>
	);
};

export default APIKeysPage;
