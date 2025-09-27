import {  NotificationProps, ProfileSettingsProps, SystemSettingsProps, TimeZone } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type UserState = {
    profileSettings: ProfileSettingsProps,
    systemSettings: SystemSettingsProps,
    notificationSettings: NotificationProps
}

const initialState: UserState = {
    profileSettings: {
        fullName: "Admin User",
        email: "admin@example.com",
        phoneNumber: "+49-178-777-000",
      },
      systemSettings: {
        language: "English",
        timeZone: TimeZone.UTC
      }, 
      notificationSettings: {
        email: true,
        reports: false,
        alert: true
      },
    
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateProfileSettings: (
            state,
            action: PayloadAction<UserState["profileSettings"]>
        ) => {
            state.profileSettings = action.payload;
        },
        updateSystemSettings: (
            state,
            action: PayloadAction<UserState["systemSettings"]>
        ) => {
            state.systemSettings = action.payload;
        },
        updateNotificationSettings: (
            state,
            action: PayloadAction<Partial<UserState["notificationSettings"]>>
        ) => {
            state.notificationSettings = {...state.notificationSettings, ...action.payload};
        },
    }
})

export const { updateSystemSettings, updateProfileSettings, updateNotificationSettings } = userSlice.actions;
export default userSlice.reducer;