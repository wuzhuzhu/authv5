import type { JSONSchema7 } from "json-schema";

export const sdXlLightingFormSchema: JSONSchema7 = {
	type: "object",
	required: [
		"imageSize",
		"batchSize",
		"seed",
		"numInferenceSteps",
		"guidanceScale",
		"denoise",
	],
	definitions: {
		size: {
			enumNames: ["1:1", "1:2", "3:2", "3:4", "16:9", "9:16"],
			enum: [
				// 这一系列图片和前端文件夹文件名有耦合,目前是固定键值对
				{
					iconUrl: "/img/image-size-1-1.svg",
					name: "1:1",
					value: "512x512",
				},
				{
					iconUrl: "/img/image-size-1-2.svg",
					name: "1:2",
					value: "512x512",
				},
				{
					iconUrl: "/img/image-size-3-2.svg",
					name: "3:2",
					value: "512x512",
				},
				{
					iconUrl: "/img/image-size-3-4.svg",
					name: "3:4",
					value: "512x512",
				},
				{
					iconUrl: "/img/image-size-16-9.svg",
					name: "16:9",
					value: "512x512",
				},
				{
					iconUrl: "/img/image-size-9-16.svg",
					name: "9:16",
					value: "512x512",
				},
			],
		},
	},
	properties: {
		size: {
			title: "image_size",
			$ref: "#/definitions/size",
			default: {
				iconUrl: "/img/image-size-1-1.svg",
				name: "1:1",
			},
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
			maximum: 9999999999,
		},
		numInferenceSteps: {
			title: "Number Inference Steps",
			type: "integer",
			minimum: 1,
			maximum: 4,
			default: 4,
		},
		guidanceScale: {
			title: "Guidance Scale",
			type: "number",
			minimum: 0,
			maximum: 2,
			default: 1,
		},
		negativePrompt: {
			title: "Negative Prompt",
			type: "string",
		},
		image: {
			title: "Upload Image",
			type: "string",
			format: "data-url",
		},
		// 假设有人脸参考图
		// portraitReference: {
		// 	title: "Upload Image",
		// 	type: "string",
		// 	format: "data-url",
		// },
	},
};

export const sdXlLightingUiSchema = {
	// 圈i出现的释义全部放在uiSchema里面,
	// 在这里查 https://m09tqret04o.feishu.cn/wiki/RMyWw0CEUiAW18kPrLzcbhMnnKh
	imageSize: {
		"ui:widget": "radioImage", // 定制的选比例组件
		"ui:description": "Length-width ratio of the generated image",
	},
	batchSize: {
		"ui:widget": "rangeInput", // 定制的滑块组件
		"ui:options": {
			step: 1, // 步长
			showPoint: true, // 每一步有小圆点节点
		},
	},
	seed: {
		"ui:widget": "seed", // 定制的随机数组件
		"ui:description":
			"The same seed and prompt can produce similar images.",
	},
	numInferenceSteps: {
		"ui:widget": "rangeInput", // 定制的滑块组件
		"ui:options": {
			step: 1, // 步长
			showPoint: false, // 每一步没有小圆点
		},
		"ui:description":
			"Number of inference/sampling steps . More steps produce higher quality but take longer.",
	},
	guidanceScale: {
		"ui:widget": "rangeInput", // 定制的滑块组件
		"ui:options": {
			step: 1, // 步长
			showPoint: false, // 每一步没有小圆点
		},
		"ui:description":
			"CFG, How close you want the model to stick to your prompt when looking for a related image to show you.",
	},
	negativePrompt: {
		"ui:widget": "textarea",
		"ui:description": "Describe what you don't want included in the image.",
	},
	image: {
		"ui:widget": "imageUpload",
		"ui:options": {
			// 这些key不稳定 有可能会改
			accept: "image/*", // 此处待测试
			filePreview: true,
		},
		"ui:description": "Upload reference image.",
	},
	// portraitReference: { // 假设faceid
	// 	"ui:widget": "imageUpload",
	// 	"ui:options": {
	// 		// 这些key不稳定 有可能会改
	// 		accept: "image/*", // 此处待测试
	// 		filePreview: true,
	// 	},
	// 	"ui:description": "Upload reference image.",
	// },
};

const sdXlLightingCombinedSchema = {
	formSchema: sdXlLightingFormSchema,
	uiSchema: sdXlLightingUiSchema,
};

const exampleFormData = {
	imageSize: "512x512", // 此处表单原生formdata是对象,需要前端处理,TODO
	batchSize: 1,
	seed: 0,
	numInferenceSteps: 25,
	guidanceScale: 7.5,
	image: "data:image/jpeg;name=3BBA2C93-D6DE-4CEE-A3F7-79915403B846_1_105_c.jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QC8RXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAU省略一大堆",
	denoise: 0.6,
};

export default sdXlLightingCombinedSchema;
