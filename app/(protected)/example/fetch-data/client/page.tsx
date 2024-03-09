"use client";

import Clouds from "@/components/example/clouds";
import { PageLoading } from "@/components/shared/loading";
import { fetchFromClient } from "@/lib/fetch-from-client";
import { useEffect, useState } from "react";

const Page = () => {
	const [clouds, setClouds] = useState();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchFromClient("/api/v1/playground/cloud")
			.then((res) => {
				console.log(res);
				setClouds(res?.data);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);
	return (
		<div className="grid">
			<h1>ApiFromClientPage</h1>
			{isLoading ? <PageLoading /> : <Clouds clouds={clouds} />}
		</div>
	);
};

export default Page;
