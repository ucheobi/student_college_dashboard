'use client';

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { toggleSidebar  } from "@/state/uiSlice";
import { Home,  LockIcon, LucideIcon, Settings, ChartColumnIncreasing, Trophy, LogOut, Users, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const isSidebarCollapsed = useAppSelector((state) => state.ui.isSidebarCollapsed)
  const dispatch = useAppDispatch();
  
  const sideBarClassNames = `
    flex flex-col hidden md:flex fixed bg-white shadow-xl transition-all
    duration-300 z-40 dark:bg-black h-full
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}
  `;

  return (
    <div className={sideBarClassNames}>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex z-50 min-h-[56px] items-center justify-between bg-white px-6 pt-3 dark:bg-black">         
          {!isSidebarCollapsed && (
            <button className="py-3" onClick={() => dispatch(toggleSidebar(!isSidebarCollapsed))}>
              <X className="h-6 w-6 text-gray-800 hover:text-gray-600 dark:text-white" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 border-b px-8 py-4 mb-4 border-gray-200 dark:border-gray-700">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold text-sky-500 tracking-wide dark:text-gray-200">
              ExtraCollege
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="z-10 w-full text-xs">
          <SidebarLink href="/" Icon={Home} label="Dashboard" />
          <SidebarLink href="/leaderboard" Icon={Trophy} label="Leaderboard" />
          <SidebarLink href="/students" Icon={Users} label="Students" />
          <SidebarLink href="/analytics" Icon={ChartColumnIncreasing} label="Analytics" />
          <SidebarLink href="/settings" Icon={Settings} label="Settings" />
        </nav>
      </div>

      <div className="border-t border-gray-200 px-8 py-4 flex items-center justify-between dark:border-gray-700">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold text-sky-500 tracking-wide dark:text-gray-200">
              School Admin
            </h3>
            <p className="text-xs text-gray-500">School Admin</p>
          </div>
        </div>
        <LogOut className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
};

interface SidebarLinkProps {
    href: string;
    Icon: LucideIcon;
    label: string;
    //isCollapsed: boolean;
}

const SidebarLink = ({ href, Icon, label,  }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href} className="w-full text-[10px]">
            <div className={`flex relative rounded-xl ml-10 mb-1 cursor-pointer w-3/4 items-center gap-2 transition-colors hover:bg-sky-500 hover:*:text-white dark:bg-black  dark:hover:bg-gray-700
                    ${isActive ? "bg-sky-500 text-white dark:bg-gray-600" : ""} justify-start px-8 py-3`}>

                <Icon className={`h-4 w-6 text-gray-800 dark:text-gray-100 ${isActive ? "text-white" : ""}`} />
                <span className={`font-medium text-gray-800 dark:text-gray-100 ${isActive ? "text-white " : ""}`}>{label}</span>
            </div>
        </Link>
    )
}

export default Sidebar;