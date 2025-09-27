"use client"

import Header from "../Header";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { useState } from "react";
import { updateProfileSettings } from "@/state/userSlice";

const ProfileSettings = () => {
    const dispatch = useAppDispatch();
    const profileSetting = useAppSelector((state) => state.user.profileSettings);

    const [fullName, setFullName] = useState(profileSetting.fullName)
    const [email, setEmail] = useState(profileSetting.email);
    const [phoneNumber, setPhoneNumber] = useState(profileSetting.phoneNumber);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(updateProfileSettings({
            fullName, email, phoneNumber
        }))
    }

    return (
        <div className="rounded-lg border border-gray-200 shadow-lg bg-white px-3 pb-3">
            <Header 
                name="Profile Settings"
                description="Update your personal information and contact details"
                color=""
                isSmallText
            />

            <form className="grid gap-3" onSubmit={handleSubmit}>
                <div className="grid">
                    <label className="text-[10px]">Full Name</label>
                    <input 
                        className="text-[8px] p-2 border border-gray-200 rounded-md font-light mt-1 outline-gray-300" 
                        type="text" 
                        value={fullName} 
                        onChange={(e) => setFullName(e.target.value as typeof profileSetting.fullName)}
                    />
                </div>
                <div className="grid">
                    <label className="text-[10px]">Email</label>
                    <input 
                        className="text-[8px] p-2 border border-gray-200 rounded-md font-light mt-1 outline-gray-300" 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value as typeof profileSetting.email)}
                    />
                </div>
                <div className="grid">
                    <label className="text-[10px]">Phone</label>
                    <input 
                        className="text-[8px] p-2 border border-gray-200 rounded-md font-light mt-1 outline-gray-300" 
                        type="text" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value as typeof profileSetting.phoneNumber)}
                    />
                </div>

                <button 
                    className="rounded-lg bg-sky-500 hover:bg-sky-400 cursor-pointer w-1/3 p-2 text-[9px] text-white" 
                    type="submit"
                >
                    Update Profile
                </button>
            </form>        
        </div>
    )
}

export default ProfileSettings;