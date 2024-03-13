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
