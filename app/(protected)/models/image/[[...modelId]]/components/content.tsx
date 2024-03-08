"use client";

import DynamicForm from "@/app/(protected)/example/form/components/form";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const ImagePageContent = ({ children }: { children: React.ReactNode }) => {
	const formRef = useRef<HTMLFormElement>(null);
	return (
		<>
			<div className="flex gap-2 h-full">
				{/* preview part as a children */}
				<div className="flex flex-col justify-between flex-1 bg-white rounded-md p-6">
					{children}
					<div>
						<p>prompt suggestions</p>
						<Button onClick={() => formRef.current?.submit()}>
							Click me
						</Button>
					</div>
				</div>
				<div className="basis-[320px] bg-white p-6 rounded-md">
					<DynamicForm formRef={formRef} />
				</div>
			</div>
		</>
	);
};

export default ImagePageContent;
