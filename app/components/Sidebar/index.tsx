'use client';

import { Home,  LockIcon, LucideIcon, Settings, ChartColumnIncreasing, Trophy, LogOut, Users, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
    const [isSidebarCollapsed, setIsSideBarCollapse] = useState(false)
    
    const sideBarClassNames =`flex flex-col fixed h-full justify-between shadow-xl transition-all 
    duration-300 z-40 h-full dark:bg-black overflow-y-auto bg-white"}`;

    return (
        <div className={sideBarClassNames}>
            <div className="flex flex-col w-full h-full justify-start">
                {/* Top Logo */}
                <div className="flex z-50 min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                   {isSidebarCollapsed ? null : (
                        <button className="py-3" onClick={() => setIsSideBarCollapse(!isSidebarCollapsed)}>
                            <X className="h-6 w-6 text-gray-800 hover:text-gray-600 dark:text-white" />
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-3 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                    <Image src="/logo.png" alt="Logo" width={40} height={40}  />
                    <div>
                        <h3 className="text-md font-bold text-blue-primary tracking-wide dark:text-gray-200">
                            ExtraCollege
                        </h3>
                        <div className="mt-1 flex items-start gap-2">
                            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                            <p className="text-xs text-gray-500">Admin Panel</p>
                        </div>
                    </div>
                </div>

                {/* Navbar Links */}
                <nav className="z-10 w-full">
                    <SidebarLink href="/" Icon={Home} label="Dashboard" />
                    <SidebarLink href="/timeline" Icon={Trophy} label="Leaderboard" />
                    <SidebarLink href="/search" Icon={Users} label="Students" />
                    <SidebarLink href="/users" Icon={ChartColumnIncreasing} label="Analytics" />
                    <SidebarLink href="/settings" Icon={Settings} label="Settings" />
                </nav>
            
            </div>

            <div className="flex items-center gap-3 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                <Image src="/logo.png" alt="Logo" width={40} height={40}  />
                <div>
                    <h3 className="text-md font-bold text-blue-primary tracking-wide dark:text-gray-200">
                        School Admin
                    </h3>
                    <div className="mt-1 flex items-start gap-2">
                        <p className="text-xs text-gray-500">School Admin</p>
                    </div>
                </div>
                <div>
                    <LogOut className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                </div>
            </div>
           
        </div>
    )
}

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
        <Link href={href} className="w-full">
            <div className={`flex relative rounded-lg cursor-pointer items-center gap-3 transition-colors hover:bg-blue-500 hover:*:text-white dark:bg-black  dark:hover:bg-gray-700
                    ${isActive ? "bg-blue-primary text-white dark:bg-gray-600" : ""} justify-start px-8 py-3`}>

                <Icon className={`h-6 w-6 text-gray-800 dark:text-gray-100 ${isActive ? "text-white" : ""}`} />
                <span className={`font-medium text-gray-800 dark:text-gray-100 ${isActive ? "text-white " : ""}`}>{label}</span>
            </div>
        </Link>
    )
}

export default Sidebar;