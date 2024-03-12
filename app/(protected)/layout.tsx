import Header from "@/components/shared/header";
import { SidebarNav } from "@/components/shared/sidebar";
import { SIDEBAR_MENU } from "@/lib/constants/path";

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full h-full over bg-background flex flex-col">
			<Header />
			<div className="flex flex-1 gap-2 px-2 pb-2 overflow-hidden">
				<div className="basis-[268px]">
					<SidebarNav items={SIDEBAR_MENU} />
				</div>

				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
}
