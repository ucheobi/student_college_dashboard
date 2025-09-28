"use client";

import StudentsList from "@/components/StudentsList";
import { useAppSelector } from "../redux";

const StudentsPage = () => {
  const students = useAppSelector((state) => state.students);

  return (
    <div className="grid grid-cols-1 w-full px-4">
      <StudentsList students={students} variant="compact" />
    </div>
  );
};

export default StudentsPage;
