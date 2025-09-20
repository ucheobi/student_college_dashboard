import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./studentsSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
