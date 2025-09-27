import { StudentType } from "@/types";
import { useState } from "react";

const useSearchHook  = ( students : StudentType[]) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("All grades");

    const grades = ["All grades", ...new Set(students.map((s) => s.grade))];

    const handleSearchTerm = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }

    const handleSelectedGrade= (selectedGrade: string) => {
        setSelectedGrade(selectedGrade);
    }

    const filteredStudents = students.filter((student) => {
        const matchesSearch =
        searchTerm.length < 2 ||
        student.name.toLowerCase().includes(searchTerm.toLowerCase()); // Search only if searchterm ccontains 3 or more characters

        const matchesGrade =
        selectedGrade === "All grades" || student.grade === selectedGrade;

        return matchesSearch && matchesGrade;
    });

    return {
        grades,
        searchTerm,
        selectedGrade,
        filteredStudents,
        handleSearchTerm,
        handleSelectedGrade
    }

}

export default useSearchHook