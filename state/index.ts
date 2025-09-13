import dashboardData from "@/mockData";
import { initialStateTypes } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialStateTypes = {
    isSidebarCollaped: false,
    isDarkMode: false,
    dashboardData
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        toggleSidebar: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollaped = action.payload;
        },
        toggleDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
});

export const { toggleSidebar, toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;