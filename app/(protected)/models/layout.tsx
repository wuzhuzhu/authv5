export default function Layout({
	children,
	form,
}: {
	children: React.ReactNode;
	form: React.ReactNode;
}) {
	return (
		<div className="flex gap-4 h-full">
			{children}
			{form}
		</div>
	);
}
