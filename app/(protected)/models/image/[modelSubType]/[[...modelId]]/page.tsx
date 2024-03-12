import SuggestionsSkeloton from "@/components/shared/loading/skelotons/component-loading";
import PromptSuggestions from "@/components/shared/models/prompt-suggestions";
import { getClouds } from "@/lib/data/example";
import type { ModelSubType } from "@/lib/types";
import { Suspense } from "react";
import ImagePageContent from "./components/content";

const ImageModelPage = async ({
	params,
}: {
	modelSubType: ModelSubType;
	modelId: string[];
}) => {
	const data = await getClouds(); // fake fetch
	return (
		<ImagePageContent>
			{/* preview part */}
			<div>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123aaab
				</h3>
				<p>{JSON.stringify(data?.data)}</p>
			</div>

			<Suspense fallback={<SuggestionsSkeloton />}>
				<PromptSuggestions
					modelType="image" // 当前路由锁死为image
					modelSubType={params.modelSubType}
				/>
			</Suspense>
		</ImagePageContent>
	);
};

export default ImageModelPage;
