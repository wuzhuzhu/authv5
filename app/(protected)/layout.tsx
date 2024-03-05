import Header from "@/components/shared/header";
import { SidebarNav } from "@/components/shared/sidebar";

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full min-h-full bg-background">
			<Header />
			<div className="flex w-[200px]">
				<SidebarNav items={[{ title: "Playground" }]} />
				{children}
			</div>
		</div>
	);
}
