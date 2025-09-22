import { Student, StudentListProps } from "@/types"
import { Eye } from "lucide-react"
import Image from "next/image"
import Header from "../Header"
import { useAppSelector } from "@/app/redux"
import { useState } from "react";
import SearchFilter from "../Search"
import useSearchHook from "@/hooks/useSearchHook"


type StudentProps = Omit<Student, "streak" | "hours">;
type StudentCardProps = StudentProps & { index: number }

const StudentsList = ({ students }: StudentListProps) => {
 const isDarkMode = useAppSelector((state) => state.ui.isDarkMode)
 const [visibleCount, setVisibleCount] = useState(8);

 const { grades, searchTerm, selectedGrade, filteredStudents, handleSearchTerm, handleSelectedGrade} = useSearchHook(students)

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  }

  const visibleStudents = filteredStudents.slice(0, visibleCount);
  const headerColor = isDarkMode ? "text-white" : "text-blue-primary"


  return (
    <div className="bg-white p-4 rounded-xl dark:bg-gray-950">
      <div className="flex justify-between">
          <Header 
            name="All Students"
            description="Complete student directory with performance details"
            isSmallText={true}
            color={headerColor}
          />

          <SearchFilter 
            grades={grades} 
            searchTerm={searchTerm} 
            selectedGrade={selectedGrade}
            handleSearchTerm={handleSearchTerm}
            handleSelectedGrade={handleSelectedGrade} 
          />
          
      </div>
      

      <div className="grid grid-cols-4 gap-3 w-full">
        {visibleStudents.map((student, index) => (
          <StudentCard
            key={index}
            imageUrl={student.imageUrl}
            name={student.name}
            accuracy={student.accuracy}
            score={student.score}
            grade={student.grade}
            index={index}
          />
        ))}
      </div>

      {/* Load Morre Students */}
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


const StudentCard = ({ imageUrl, name, accuracy, score, grade, index}: StudentCardProps) => (
    <div className="grid grid-cols-4 gap-1 items-center p-2 bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-950 dark:text-white">
      <div className="h-9 w-9">
        <Image src={`/${imageUrl}`} alt="student" width={80} height={40} className="h-full rounded-full object-cover" />
      </div>
      <div className="col-span-2 mx-auto">
        <h3 className="text-[8px] font-bold">{name}</h3>
        <p className="text-[7px] text-gray-700 mb-1">{grade}</p>
        <div className="text-[7px]">
          <span className={`bg-blue-100 p-1 rounded-md mr-1
            ${index < 5 ? "bg-green-200 text-green-700"  : "bg-blue-200 text-blue-700"}
          `}>{accuracy}%</span>
          <span>{score}</span>
        </div>
      </div>
      <div className="py-1 border border-gray-300 shadow-lg rounded-lg">
        <Eye size={10} className="mx-auto" />
      </div>
    </div>
)

export default StudentsList