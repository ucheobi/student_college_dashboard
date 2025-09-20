import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "@/types";
import studentsMockData from "@/mockData";

const studentsSlice = createSlice({
  name: "students",
  initialState: studentsMockData as Student[],
  reducers: {
    setStudents: (state, action: PayloadAction<Student[]>) => action.payload,
  },
});

export const { setStudents } = studentsSlice.actions;
export default studentsSlice.reducer;
