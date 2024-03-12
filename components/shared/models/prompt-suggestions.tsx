import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { PROMPT_SUGGESTION_LIMIT_IMG } from "@/lib/constants/config";
import { fetchFromServer } from "@/lib/fetch-from-server";
import type { ModelSubType, ModelType, PromptSuggestion } from "@/lib/types";
import { cn, getSomeRandomPromptSuggestions, sleep } from "@/lib/utils";

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
	const randomSuggestions = getSomeRandomPromptSuggestions(
		suggestions,
		PROMPT_SUGGESTION_LIMIT_IMG,
	);
	return (
		<>
			{randomSuggestions.length > 0 && (
				<div
					className={cn("grid grid-cols-1 gap-2", {
						"md:grid-cols-2": randomSuggestions.length > 1,
					})}
				>
					{randomSuggestions.map(
						(suggestion: PromptSuggestion, i: number) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={`suggestion-${i}`} className="w-full">
								<Card>
									<p className="p-4 text-sm text-muted-foreground truncate">
										{suggestion.prompt}
									</p>
								</Card>
							</div>
						),
					)}
				</div>
			)}
		</>
	);
};

export default PromptSuggestions;
