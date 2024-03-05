import Header from "@/components/shared/header";
import { SidebarNav } from "@/components/shared/sidebar";
import { SIDEBAR_MENU } from "@/lib/constants/path";

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full min-h-full bg-background">
			<Header />
			<div className="flex px-8">
				<SidebarNav items={SIDEBAR_MENU} />
				{children}
			</div>
		</div>
	);
}
