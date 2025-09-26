import { StudentType } from "@/types";
import { Eye } from "lucide-react";
import Image from "next/image";

type StudentProps = Omit<StudentType, "streak" | "hours">;
type StudentCardProps = StudentProps & { index: number }

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

export default StudentCard;