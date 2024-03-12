"use client";

import DynamicForm from "@/app/(protected)/example/form/components/form";
import PromptSuggestions from "@/components/shared/models/prompt-suggestions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

const ImagePageContent = ({ children }: { children: React.ReactNode }) => {
	const formRef = useRef<HTMLFormElement>(null);
	return (
		<>
			<div className="flex gap-2 h-full">
				{/* preview part as a children */}
				<div className="flex flex-col gap-4  flex-1 bg-white rounded-md px-6 py-4 overflow-hidden">
					<div className="flex flex-col justify-between flex-1 overflow-y-scroll">
						{children}
					</div>
					<div className="relative">
						<Textarea
							placeholder="Type your prompt here."
							id="message-2"
						/>
						<Button className="absolute right-2 bottom-2" size="sm">
							Send message
						</Button>
					</div>
				</div>
				<div className="basis-[320px] bg-white p-6 rounded-md overflow-y-scroll">
					<DynamicForm formRef={formRef} />
				</div>
			</div>
		</>
	);
};

export default ImagePageContent;
