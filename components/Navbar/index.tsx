import { useAppDispatch, useAppSelector } from "@/app/redux";
import { toggleDarkMode, toggleSidebar } from "@/state/uiSlice";
import { Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.ui.isSidebarCollapsed); 
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
  

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      <div className="flex items-center gap-8">

        {(isSidebarCollapsed || true) && (
            <button
                onClick={() => dispatch(toggleSidebar(!isSidebarCollapsed))}
                className={`h-min w-min rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700 
                            ${isSidebarCollapsed ? "hidden md:block" : "block md:hidden"}`}
            >
                <Menu className="h-8 w-8 dark:text-white" />
            </button>
        )}
      </div>

      <div className="flex items-center">
        <button
          onClick={() => dispatch(toggleDarkMode(!isDarkMode))} 
          className={isDarkMode ? "rounded p-2 dark:hover:bg-gray-700" : "rounded p-2 hover:bg-gray-100"}
        >
            {isDarkMode ? (
              <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
            ) : (
              <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
            )}
        </button>
        <Link href="/settings" className={isDarkMode ? "h-min w-min rounded p-2 dark:hover:bg-gray-700" : "h-min w-min rounded p-2 hover:bg-gray-100"}>
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>
      </div>
    </div>
  )
}
export default Navbar