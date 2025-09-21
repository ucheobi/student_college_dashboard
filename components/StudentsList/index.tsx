import { Student } from "@/types"
import { Eye } from "lucide-react"
import Image from "next/image"
import Header from "../Header"
import { useAppSelector } from "@/app/redux"
import { useState } from "react";


type StudentProps = Omit<Student, "streak" | "hours">;
type StudentCardProps = StudentProps & { index: number }

type StudentListProps = {
  students: Student[]
}

const StudentsList = ({ students }: StudentListProps) => {
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode)

  const [visibleCount, setVisibleCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("All grades");

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  }

  const grades = ["All grades", ...new Set(students.map((s) => s.grade))];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      searchTerm.length < 3 ||
      student.name.toLowerCase().includes(searchTerm.toLowerCase()); // Search only if searchterm ccontains 3 or more characters

    const matchesGrade =
      selectedGrade === "All grades" || student.grade === selectedGrade;

    return matchesSearch && matchesGrade;
  });

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
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search students"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-4 border h-10 border-gray-300 text-[8px] rounded-md dark:bg-gray-900 dark:text-white"
            />
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="p-2 border border-gray-300 h-10 rounded-md text-[8px] dark:bg-gray-900 dark:text-white text-gray-500"
            >
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>
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
      <div className="m-auto p-0">
        <Image src={`/${imageUrl}`} alt="student" width={20} height={20} className="border rounded-full" />
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