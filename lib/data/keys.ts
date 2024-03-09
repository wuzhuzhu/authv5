import { fetchFromServer } from "../fetch-from-server";
import type { ApiKey, Pagination } from "../types";
import { sleep } from "../utils";

export const getApiKeys = async (
	pagination: Pagination,
): Promise<{
	data: ApiKey[];
	pagination: Pagination;
}> => {
	const searchParams = new URLSearchParams(pagination);
	console.log("fetching data from URL: ", `/api/v1/keys/?${searchParams}`);
	if (process.env.NODE_ENV === "development") {
		await sleep(1000);
		return {
			data: [
				{
					id: "1",
					secretKey: "lkadsjflkasjl;fkdjaslkdfjlksjdflkj",
					createdAt: {
						seconds: 1630454400,
					},
				},
				{
					id: "2",
					secretKey: "dsafjkl;adsiofulkwejr;lkjjlksjdflkj",
					createdAt: {
						seconds: 1630454400,
					},
				},
			],
			pagination: {
				...pagination,
				total: 14,
			},
		};
	}
	const json = await fetchFromServer(`/api/v1/keys/?${searchParams}`);
	return json.data;
};
