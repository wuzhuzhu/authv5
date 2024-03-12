import { fetchFromServer } from "@/lib/fetch-from-server";
import type { ModelSubType, ModelType, PromptSuggestion } from "@/lib/types";
import { sleep } from "@/lib/utils";

interface PromptSuggestionsProps {
	modelType: ModelType;
	modelSubType: ModelSubType;
}

const PromptSuggestions = async ({
	modelType,
	modelSubType,
}: PromptSuggestionsProps) => {
	// TODO: remove this sleep
	await sleep(1000);
	const suggestionJson = await fetchFromServer(
		`/api/v1/playground/prompt_suggestion?type=${modelType}&sub_type=${modelSubType}`,
		{},
		false, // 非登录接口,无需带cookie,有缓存
	);
	const suggestions = suggestionJson?.data?.suggestions || [];
	return (
		<>
			{suggestions.length > 0 && (
				<div>
					<h2 className="text-xl font-bold mb-2">Suggestions</h2>
					<ul>
						{suggestions.map(
							(suggestion: PromptSuggestion, i: number) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={`suggestion-${i}`}>
									{suggestion.prompt}
								</li>
							),
						)}
					</ul>
				</div>
			)}
		</>
	);
};

export default PromptSuggestions;
