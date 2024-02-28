import Sidebar from "@/components/auth/sidebar";
export default function SidebarLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex">{children}</div>
    </div>
  );
}