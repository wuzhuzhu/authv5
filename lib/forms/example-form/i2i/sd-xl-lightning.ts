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
				},
				{
					iconUrl: "/img/image-size-1-2.svg",
					name: "1:2",
				},
				{
					iconUrl: "/img/image-size-3-2.svg",
					name: "3:2",
				},
				{
					iconUrl: "/img/image-size-3-4.svg",
					name: "3:4",
				},
				{
					iconUrl: "/img/image-size-16-9.svg",
					name: "16:9",
				},
				{
					iconUrl: "/img/image-size-9-16.svg",
					name: "9:16",
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
		denoise: {
			title: "Denoice",
			type: "number",
			default: 0.6,
		},
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
	image: {
		"ui:widget": "imageUpload",
		"ui:options": {
			// 这些key不稳定 有可能会改
			accept: "image/*", // 此处待测试
			filePreview: true,
			personalbar: true,
		},
		"ui:description": "Upload reference image.",
	},
	// portraitReference: { // 假设faceid
	// 	"ui:widget": "imageUpload",
	// 	"ui:options": {
	// 		// 这些key不稳定 有可能会改
	// 		accept: "image/*", // 此处待测试
	// 		filePreview: true,
	// 		personalbar: true,
	// 	},
	// 	"ui:description": "Upload reference image.",
	// },
	denoise: {
		"ui:widget": "rangeInput", // 定制的滑块组件
		"ui:options": {
			step: 0.1, // 步长
			showPoint: false, // 每一步没有小圆点
		},
		"ui:description": "这里的释义待产品补充",
	},
};

const sdXlLightingCombinedSchema = {
	schema: sdXlLightingFormSchema,
	uiSchema: sdXlLightingUiSchema,
};

export default sdXlLightingCombinedSchema;
