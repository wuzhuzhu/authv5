import Header from "@/components/shared/header";
import { SidebarNav } from "@/components/shared/sidebar";
import { SIDEBAR_MENU } from "@/lib/constants/path";

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full min-h-full bg-background flex flex-col">
			<Header />
			<div className="flex gap-8 flex-1">
				<SidebarNav items={SIDEBAR_MENU} />
				{children}
			</div>
		</div>
	);
}
