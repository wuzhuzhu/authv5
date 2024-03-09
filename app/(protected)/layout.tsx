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
			<div className="flex gap-4 flex-1 px-2 pb-2">
				<div className="basis-48">
					<SidebarNav items={SIDEBAR_MENU} />
				</div>

				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
}
