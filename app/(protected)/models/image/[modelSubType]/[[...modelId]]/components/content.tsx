"use client";

import DynamicForm from "@/app/(protected)/example/form/components/form";
import PromptSuggestions from "@/components/shared/models/prompt-suggestions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import sdXlLightingCombinedSchema from "@/lib/forms/example-form/i2i/sd-xl-lightning";
import type { Model, ModelCombinedSchema, ModelSubType } from "@/lib/types";
import type { UiSchema } from "@rjsf/utils";
import type { JSONSchema7 } from "json-schema";
import { useRef } from "react";

const ImagePageContent = ({
	children,
	models,
	combinedFormSchema,
	modelSubType,
}: {
	children: React.ReactNode;
	models: Model[];
	combinedFormSchema: ModelCombinedSchema;
	modelSubType: ModelSubType;
}) => {
	const formRef = useRef<HTMLFormElement>(null);
	return (
		<>
			{/* preview part as a children */}
			<div className="flex flex-col gap-4  flex-1 bg-white rounded-md px-6 py-4 overflow-hidden">
				<div className="flex flex-col justify-between flex-1 overflow-y-scroll">
					12312312312
				</div>
				<div className="relative grid gap-3">
					{children}
					<Textarea
						placeholder="Type your prompt here."
						id="message-2"
					/>
					<Button
						className="absolute right-2 bottom-2"
						size="sm"
						onClick={() => formRef.current.onChange()}
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
