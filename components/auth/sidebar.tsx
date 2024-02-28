'use client'
import Link from "next/link"
import { FaKey, FaWallet, FaUser } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";


export default function SidebarLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}


export function Sidebar() {
  const pathName = usePathname();
  return (
    <div className=" h-screen w-[380px] min-h-[500px] border-r px pl-[80px] pt-[39px] ">
      <p className="h-[56px] text-[20px] text-[#8358F6] font-semibold">Account</p>
      <div className="flex justify-center items-start flex-col">
        <Link href="/profile" className={cn(pathName.includes('/profile') ? `sidebar bg-[#28c5fa33] rounded-s-lg` : `sidebar`)} ><FaUser className="mr-[16px] flex justify-center" />Profile</Link>
        <Link href="/tokens" className={cn(pathName.includes('/tokens') ? `sidebar bg-[#28c5fa33] rounded-s-lg` : `sidebar`)}><FaKey className="mr-[16px] flex justify-center" />API Keys</Link>
        <Link href="/billing" className={cn(pathName.includes('/billing') ? `sidebar bg-[#28c5fa33] rounded-s-lg` : `sidebar`)}><FaWallet className="mr-[16px] flex justify-center" />Billing</Link>
      </div>
    </div >
  )
}