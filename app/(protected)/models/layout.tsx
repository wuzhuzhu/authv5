export default function Layout({
	children,
}: {
	children: React.ReactNode;
	form: React.ReactNode;
}) {
	return <div className="flex gap-4 h-full">{children}</div>;
}
