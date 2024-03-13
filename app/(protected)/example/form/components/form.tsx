"use client";

import { Button } from "@/components/ui/button";
import { exampleFormSchema } from "@/lib/forms/example-form/exampleFormSchema";
import { exampleFormUiSchema } from "@/lib/forms/example-form/exampleFormUiSchema";
import Form from "@/lib/forms/rjsf-shadcn-theme/rjsf-shadcn-theme";
import validator from "@rjsf/validator-ajv8";
import type { JSONSchema7 } from "json-schema";

const DynamicForm = ({
	formRef,
	formSchema,
	uiSchema,
}: {
	formRef: React.RefObject<HTMLFormElement>;
	formSchema: JSONSchema7;
	uiSchema: any; // TODO: UI Schema type
}) => {
	return (
		<div className="schema-form px-8 py-4 bg-muted">
			<Form
				ref={formRef}
				// schema={formSchema}
				schema={exampleFormSchema}
				// uiSchema={uiSchema}
				uiSchema={exampleFormUiSchema}
				noHtml5Validate
				validator={validator}
				onChange={(e) => console.log("change", e)}
				onSubmit={(e) => console.log("submit", e)}
				onError={(e) => console.log("error", e)}
			/>
		</div>
	);
};

export default DynamicForm;
