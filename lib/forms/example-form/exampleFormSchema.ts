import { JSONSchema7 } from "json-schema";

export const exampleFormSchema: JSONSchema7 = {
	title: "Widgets",
	type: "object",
	properties: {
		notExist: {
			title: "示例字符串输入",
			type: "string",
			default: "Not Exist",
			minLength: 10,
		},
		model: {
			title: "Model",
			type: "string",
			enum: ["llama2-70b", "gpt-3.5"],
			default: "llama2-70b",
		},
		maxTokens: {
			title: "Max Tokens",
			type: "integer",
			minimum: 1,
			maximum: 2048,
			default: 512,
		},
		temperature: {
			title: "Temperature",
			type: "number",
			minimum: 0,
			maximum: 5,
			default: 0.75,
		},
		topP: {
			title: "Top P",
			type: "number",
			minimum: 0,
			maximum: 1,
			default: 0.8,
		},
		prompt: {
			title: "Prompt",
			type: "string",
			default: "Help me write a love poem",
			description: "Prompt for completion",
		},
	},
};