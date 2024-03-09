export default function NewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-full flex justify-center p-8">
      {children}
    </div>
  );
}
