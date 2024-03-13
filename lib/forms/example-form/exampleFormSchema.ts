import type { JSONSchema7 } from "json-schema";

export const exampleFormSchema: JSONSchema7 = {
	// title: "Stable Diffusion XL",
	// description: "Stable Diffusion XL(看不见)",
	type: "object",
	required: [
		"imageSize",
		"batchSize",
		"seed",
		"numInferenceSteps",
		"guidanceScale",
		// "nagativePrompt",
		"denoise",
	],
	// definitions: {
	// 	// 单独为所有enum of object做定义, 在下面使用$ref引用,注意默认值是对象
	// 	locations: {
	// 		enumNames: ["New York", "Amsterdam", "Hong Kong"],
	// 		enum: [
	// 			{
	// 				name: "New York",
	// 				lat: 40,
	// 				lon: 74,
	// 			},
	// 			{
	// 				name: "Amsterdam",
	// 				lat: 52,
	// 				lon: 5,
	// 			},
	// 			{
	// 				name: "Hong Kong",
	// 				lat: 22,
	// 				lon: 114,
	// 			},
	// 		],
	// 	},
	// },
	properties: {
		// locations: {
		// 	// https://rjsf-team.github.io/react-jsonschema-form/ , 点击Enumerated objects
		// 	title: "Location示例",
		// 	$ref: "#/definitions/locations",
		// 	default: {
		// 		name: "New York",
		// 		lat: 40,
		// 		lon: 74,
		// 	},
		// },
		digit: {
			title: "看最大值",
			type: "integer",
			maximum: 5,
			minimum: 0,
			default: 2,
		},
		agreed: {
			title: "同意用户协议",
			type: "boolean",
			default: true,
		},
		select: {
			title: "下拉",
			type: "string",
			enum: ["selection1", "selection2"],
			default: "selection1",
		},
		imageSize: {
			title: "Image Size",
			type: "string",
			enum: ["1:1", "1:2", "3:2", "3:4", "16:9", "9:16"],
			default: "1:1",
		},
		batchSize: {
			title: "Number Images",
			type: "integer",
			minimum: 1,
			maximum: 4,
			default: 1,
		},
		seed: {
			title: "Seed",
			type: "integer",
			minimum: 0,
			maximum: Number.MAX_SAFE_INTEGER,
			// maximum: ,
		},
		numInferenceSteps: {
			title: "Number Inference Steps",
			type: "integer",
			minimum: 1,
			maximum: 50,
			default: 25,
		},
		guidanceScale: {
			title: "Guidance Scale",
			type: "number",
			minimum: 0,
			maximum: 20,
			default: 7.5,
		},
		nagativePrompt: {
			title: "Nagative Prompt",
			type: "string",
		},
		image: {
			title: "Upload Image",
			type: "string",
			format: "data-url",
		},
		denoice: {
			title: "Denoice",
			type: "number",
			default: 0.6,
		},
	},
};
