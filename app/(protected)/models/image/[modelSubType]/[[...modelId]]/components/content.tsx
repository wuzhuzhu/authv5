"use client";

import DynamicForm from "@/app/(protected)/example/form/components/form";
import PromptSuggestions from "@/components/shared/models/prompt-suggestions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import sdXlLightingCombinedSchema from "@/lib/forms/example-form/i2i/sd-xl-lightning";
import type {
	Model,
	ModelCombinedSchema,
	ModelSubType,
	PromptSuggestion,
} from "@/lib/types";
import Image from "next/image";
import { useRef, useState } from "react";

const ImagePageContent = ({
	suggestions,
}: {
	models: Model[];
	combinedFormSchema: ModelCombinedSchema;
	modelSubType: ModelSubType;
	suggestions: PromptSuggestion[];
}) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [prompt, setPrompt] = useState<string>("");
	return (
		<>
			{/* preview part as a children */}
			<div className="flex flex-col gap-4  flex-1 bg-white rounded-md px-6 py-4 overflow-hidden">
				<div className="flex flex-col justify-between flex-1 overflow-y-scroll relative">
					<Image
						className="object-contain"
						src={suggestions[0].image_url}
						fill
						alt="Picture of the author"
					/>
				</div>
				<div className="relative grid gap-3">
					<PromptSuggestions
						suggestions={suggestions}
						setPrompt={setPrompt}
					/>
					<Textarea
						placeholder="Type your prompt here."
						id="message-2"
						onChange={(e) => setPrompt(e.target.value)}
						value={prompt}
					/>
					<Button
						className="absolute right-2 bottom-2"
						size="sm"
						onClick={() => formRef?.current?.onChange()}
					>
						Send message
					</Button>
				</div>
			</div>
			<div className="basis-[320px] bg-white p-6 rounded-md overflow-y-scroll">
				<DynamicForm
					formRef={formRef}
					{...sdXlLightingCombinedSchema}
				/>
			</div>
		</>
	);
};

export default ImagePageContent;
