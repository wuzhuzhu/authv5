"use client";

import { Button } from "@/components/ui/button";
import { exampleFormSchema } from "@/lib/forms/example-form/exampleFormSchema";
import { exampleFormUiSchema } from "@/lib/forms/example-form/exampleFormUiSchema";
import Form from "@/lib/forms/rjsf-shadcn-theme/rjsf-shadcn-theme";
import validator from "@rjsf/validator-ajv8";
import { JSONSchema7 } from "json-schema";

const testSchema: JSONSchema7 = {
	title: "表单标题内容",
	description: "简介内容,一些简单的介绍.",
	type: "object",
	required: ["name"],
	properties: {
		name: {
			type: "string",
			title: "姓名",
			default: "Ch",
			minLength: 3,
			// description: "请输入你的姓名",
		},
		age: {
			type: "number",
			title: "年龄",
			default: 35,
			minimum: 18,
			// description: "请输入你的年龄",
		},
	},
};

const testUiSchema = {
	"ui:submitButtonOptions": {
		submitText: "提交",
	},
};

const DynamicForm = () => {
	const formRef = useRef(null);
	return (
		<div className="schema-form px-8 py-4 bg-muted">
			<Form
				ref={formRef}
				schema={exampleFormSchema}
				uiSchema={exampleFormUiSchema}
				noHtml5Validate
				validator={validator}
				onChange={(e) => console.log("change", e)}
				onSubmit={(e) =>
					console.log("submit", {
						...e,
						formData: {
							...e.formData,
							prompt: "123123",
						},
					})
				}
				onError={(e) => console.log("error", e)}
			/>
		</div>
	);
};

export default DynamicForm;
