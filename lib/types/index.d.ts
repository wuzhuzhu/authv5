import type { UiSchema } from "@rjsf/utils";

// Layout Module
export type SidebarNavItem = {
	title: string;
	description?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: React.ReactNode;
} & (
	| {
			href: string;
			items?: never;
	  }
	| {
			href?: string;
			items: NavLink[];
	  }
);

export type SidebarNavItemGroup = {
	title: string;
	description: string;
	items: SidebarNavItem[];
};

export interface Pagination {
	current: string | number;
	pageSize: number;
	total?: number;
}

// Api Key module
export interface ApiKey {
	id: string;
	secretKey: string;
	createdAt: {
		seconds: number;
	};
}

// Model module
export enum ModelType {
	image = "image",
	text = "text",
}

export enum ModelSubType {
	"text-to-image" = "text-to-image",
	"image-to-image" = "image-to-image",
	chat = "chat",
	code = "code",
	language = "language",
}

export interface PromptSuggestion {
	prompt: string;
	image_url: string;
}

export interface Model {
	id: string;
	name: string;
	description: string;
	// coverUrl: string;
	// inputUrl: string;
	// codeUrl: string;
	// status: string;
	// sort: number;
	type: ModelType;
	// fast: boolean;
	display_name: string;
	// createdAt: {
	// 	seconds: number;
	// };
	// updatedAt: {
	// 	seconds: number;
	// };
}

export interface ModelCombinedSchema {
	formSchema: JSONSchema7;
	uiSchema: UiSchema;
}
