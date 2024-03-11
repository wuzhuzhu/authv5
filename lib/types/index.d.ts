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

export interface ApiKey {
	id: string;
	secretKey: string;
	createdAt: {
		seconds: number;
	};
}
