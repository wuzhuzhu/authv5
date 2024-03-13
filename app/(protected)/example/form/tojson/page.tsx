"use client";

import sdXlLightingCombinedSchema from "@/lib/forms/example-form/i2i/sd-xl-lightning";
import { tsObjectToJsonObject } from "@/lib/utils";
import { useEffect } from "react";

const Page = () => {
	useEffect(() => {
		console.log(tsObjectToJsonObject(sdXlLightingCombinedSchema));
	}, []);
	return <div>Page</div>;
};

export default Page;
