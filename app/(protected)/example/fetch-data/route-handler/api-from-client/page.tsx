"use client";

import Clouds, { CloudsType } from "@/components/example/clouds";
import PageLoading from "@/components/shared/loading/page-loading";
import { Suspense, useEffect, useState } from "react";

const ApiFromClientPage = () => {
	const [clouds, setClouds] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("/api/example/cloud")
			.then((res) => res.json())
			.then((res) => {
				if (res?.code === 20000) {
					setClouds(res.data) as CloudsType;
				}
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
