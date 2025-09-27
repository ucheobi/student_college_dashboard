"use client"

import { TimeZone } from "@/types";
import Header from "../Header";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { updateSystemSettings } from "@/state/userSlice";

const SystemSettings = () => { 
    const dispatch = useAppDispatch();
    const systemSettings = useAppSelector((state) => state.user.systemSettings);

    const [selectedLanguage, setSelectedLanguage] = useState(systemSettings.language);
    const [selectedTimeZone, setSelectedTimeZone] = useState(systemSettings.timeZone);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(updateSystemSettings({language: selectedLanguage, timeZone: selectedTimeZone}));   
    }
    
    return (
    <div className="rounded-lg border border-gray-200 shadow-lg bg-white px-3 pb-3">
        <Header 
            name="System Settings"
            description="Configure system preference and default options"
            color=""
            isSmallText
        />

        <form className="grid gap-3" onSubmit={handleSubmit}>          
            <div className="grid gap-1">
                <label  className="text-[10px]" htmlFor="language">Default Language</label>
                <select 
                    id="langauge" 
                    className="text-[10px] p-2 border border-gray-200 rounded-md font-light mt-1 outline-gray-300"
                    value={selectedLanguage} 
                    onChange={(e) => setSelectedLanguage(e.target.value as typeof systemSettings.language)}
                >
                    <option value="English">English</option>
                    <option value="German">German</option>
                    <option value="French">French</option>
                    <option value="Russian">Russian</option>
                </select>
            </div>
            <div className="grid gap-1">
                <label className="text-[10px]" htmlFor="timezone">Time Zone</label>
                <select 
                    id="timezone" 
                    value={selectedTimeZone}
                    className="text-[8px] p-2 border border-gray-200 rounded-md font-light mt-1 outline-gray-300"
                    onChange={(e) => setSelectedTimeZone(e.target.value as typeof systemSettings.timeZone)}
                >
                    {Object.entries(TimeZone).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>

            <button 
                type="submit"
                 className="rounded-lg bg-sky-500 hover:bg-sky-400 w-1/3 p-2 text-[9px] text-white cursor-pointer" 
            >
                Save Settings
            </button>
        </form>
    </div>
)}

export default SystemSettings;