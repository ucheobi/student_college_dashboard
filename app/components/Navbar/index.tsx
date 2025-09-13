'use client'

import { Sun, Moon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div className="flex items-center justify-between py-3 px-2">
            <div className="flex"></div>
            <div className="flex">
                <button
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className={isDarkMode ? "rounded p-2 dark:hover:bg-gray-700" : "rounded p-2 hover:bg-gray-100"}
            >
                {isDarkMode ? (
                <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
                ) : (
                <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
                )}
            </button>
            </div>
        </div>
    )
}

export default Navbar;