"use client";

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
	suggestions: PromptSuggestion[];
	setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const PromptSuggestions = ({
	suggestions,
	setPrompt,
}: PromptSuggestionsProps) => {
	return (
		<>
			{suggestions.length > 0 && (
				<div
					className={cn("grid grid-cols-1 gap-2", {
						"md:grid-cols-2": suggestions.length > 1,
					})}
				>
					{suggestions.map(
						(suggestion: PromptSuggestion, i: number) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={`suggestion-${i}`}
								className="w-full select-none cursor-pointer"
								onMouseDown={() => setPrompt(suggestion.prompt)}
							>
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
