'use client'

import Header from "@/components/Header"
import DataManagementSettings from "@/components/Settings/DataManagementSettings";
import NotificationSettings from "@/components/Settings/NotificationSettings";
import ProfileSettings from "@/components/Settings/ProfileSettings";
import SystemSettings from "@/components/Settings/SystemSettings";

const SettingsPage = () => {

  return (
    <div className="grid w-full gap-1 px-4 pb-6">
        <Header
            name="Settings"
            color=""
        />
     
        <div className="grid grid-cols-2 gap-4">
            {/* Profile Settings */}
            <ProfileSettings />

             {/* System Settings */}
            <SystemSettings />

            {/* Notifications Preferences */}
            <NotificationSettings />
           
            {/* Data Management */}
            <DataManagementSettings

            />
        </div>
        
        
    </div>
  )
}
export default SettingsPage;