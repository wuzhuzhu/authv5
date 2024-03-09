"use client";

import Clouds, { type CloudsType } from "@/components/example/clouds";
import PageLoading from "@/components/shared/loading/page-loading";
import { fetchFromClient } from "@/lib/fetch-from-client";
import { Suspense, useEffect, useState } from "react";

const ApiFromClientPage = () => {
	const [clouds, setClouds] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchFromClient("/api/example/cloud")
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

export default ApiFromClientPage;
