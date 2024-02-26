import Header from "@/components/shared/header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-full bg-background">
      <Header />
      {children}
    </div>
  );
}
