import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
};

const initialState: UiState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    toggleDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleSidebar, toggleDarkMode } = uiSlice.actions;
export default uiSlice.reducer;
