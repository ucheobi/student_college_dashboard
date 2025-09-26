import {  NotificationProps, ProfileSettingsProps, SystemSettingsProps, TimeZone } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type UserState = {
    profileSettings: ProfileSettingsProps,
    systemSettings: SystemSettingsProps,
    notification: NotificationProps
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
      notification: {
        email: "email",
        reports: "reports",
        alert: "alerts"
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
        updateNotification: (
            state,
            action: PayloadAction<UserState["notification"]>
        ) => {
            state.notification = action.payload;
        },
    }
})

export const { updateSystemSettings, updateProfileSettings, updateNotification } = userSlice.actions;
export default userSlice.reducer;