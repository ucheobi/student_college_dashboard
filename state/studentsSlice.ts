import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StudentType } from "@/types";
import studentsMockData from "@/mockData";

const studentsSlice = createSlice({
  name: "students",
  initialState: studentsMockData as StudentType[],
  reducers: {
    setStudents: (state, action: PayloadAction<StudentType[]>) => action.payload,
  },
});

export const { setStudents } = studentsSlice.actions;
export default studentsSlice.reducer;
