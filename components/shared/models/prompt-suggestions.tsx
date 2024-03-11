import { fetchFromServer } from "@/lib/fetch-from-server";
import type { ModelSubType, ModelType, PromptSuggestion } from "@/lib/types";

interface PromptSuggestionsProps {
	modelType: ModelType;
	modelSubType: ModelSubType;
}

const PromptSuggestions = async ({
	modelType,
	modelSubType,
}: PromptSuggestionsProps) => {
	const suggestionJson = await fetchFromServer(
		"http://192.168.1.102:8003/api/v1/playground/prompt_suggestion?type=LLM&sub_type=chat",
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
