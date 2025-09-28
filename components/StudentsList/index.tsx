import { StudentListProps } from "@/types"
import Header from "../Header"
import { useState } from "react";
import SearchFilter from "../Search"
import useSearchHook from "@/hooks/useSearchHook"
import StudentCard from "./StudentCard";

const StudentsList = ({ students, variant }: StudentListProps) => {
 const [visibleCount, setVisibleCount] = useState(16);

 const { grades, searchTerm, selectedGrade, filteredStudents, handleSearchTerm, handleSelectedGrade} = useSearchHook(students);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  }

  const visibleStudents = filteredStudents.slice(0, visibleCount);

  return (
    <div className="bg-white p-4 rounded-xl dark:bg-gray-950">
      <div className="flex justify-between">
          <Header 
            name="All Students"
            description="Complete student directory with performance details"
            isSmallText={true}
          />

          <SearchFilter 
            grades={grades} 
            searchTerm={searchTerm} 
            selectedGrade={selectedGrade}
            handleSearchTerm={handleSearchTerm}
            handleSelectedGrade={handleSelectedGrade} 
          />     
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {visibleStudents.map((student, index) => (
          <StudentCard
            key={index}
            index={index}
            student={student}
            variant={variant}
          />
        ))}
      </div>

        {visibleCount < filteredStudents.length && (
          <div className="flex my-4 mx-auto justify-center">
            <button
              onClick={handleLoadMore}
              className="p-2.5 border border-gray-300 shadow-lg rounded-lg text-[7px] 
                font-semibold cursor-pointer hover:bg-gray-100 dark:bg-blue-300 dark:text-white dark:hover:text-blue-500"
            >
              Load More Students ({students.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
  )
}


export default StudentsList