import DynamicForm from "@/app/(protected)/example/form/components/form";
import SuggestionsSkeloton from "@/components/shared/loading/skelotons/component-loading";
import PromptSuggestions from "@/components/shared/models/prompt-suggestions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROMPT_SUGGESTION_LIMIT_IMG } from "@/lib/constants/config";
import { getClouds } from "@/lib/data/example";
import { fetchFromServer } from "@/lib/fetch-from-server";
import sdXlLightingCombinedSchema from "@/lib/forms/example-form/i2i/sd-xl-lightning";
import type { ModelCombinedSchema, ModelSubType } from "@/lib/types";
import type { Model } from "@/lib/types";
import { Suspense } from "react";
import { useRef } from "react";
import ImagePageContent from "./components/content";

const ImageModelPage = async ({
	params,
}: {
	params: {
		modelSubType: ModelSubType;
		modelId?: string[];
	};
	modelSubType: ModelSubType;
	modelId: string[];
}) => {
	const {
		models,
		default_schema,
	}: { models: Model[]; default_schema: ModelCombinedSchema } =
		await fetchFromServer(
			`/api/v1/playground?type=image&sub_type=${params.modelSubType}`,
		);
	return (
		<div className="flex gap-2 h-full">
			{/* preview part as a children */}
			<ImagePageContent
				models={models}
				combinedFormSchema={default_schema}
				modelSubType={params.modelSubType}
			>
				<PromptSuggestions
					modelType="image"
					modelSubType={params.modelSubType}
				/>
			</ImagePageContent>
		</div>
	);
};

export default ImageModelPage;
