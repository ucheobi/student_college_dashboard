import { StudentType } from "@/types";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type StudentProps = Omit<StudentType, "streak" | "hours" | "skills">;

type StudentCardProps = {
  student: StudentProps,
  variant?: "default" | "compact",
  index: number;
}

const StudentCard = ({ student, index,  variant = "default"}: StudentCardProps) => {
  const { id, imageUrl, name, accuracy, score, grade } = student;
   
  if (variant === "compact") {
    return (
      <div className="p-2 border border-gray-200 bg-white rounded-2xl shadow-md dark:bg-gray-950 dark:text-white">
        <div className="flex flex-col justify-between gap-1 items-center p-3 ">
          <div className="h-15 w-15">
              <Image className="h-full rounded-full object-cover" width={100} height={50} src={`/${imageUrl}`} alt="Profile Picture" />
          </div>
          <h4 className="font-bold text-[10px] text-sky-900 dark:text-white">{name}</h4>
          <p className="text-gray-600 text-[8px] dark:text-orange-400">{grade}</p>
        </div>

        <Link href={`/students/${id}`} className="">
          <button 
            className="flex w-full items-center justify-center gap-1 text-[9px] border-1 border-gray-300 py-1.5 px-2 rounded-lg 
                shadow-md cursor-pointer bg-sky-400 text-white hover:bg-sky-500  hover:shadow-3xl tracking-wider my-2">
            <Eye size={8} /> 
            View Profile
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 md:gap-0 gap-1 items-center p-2 bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-950 dark:text-white">
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
)}

export default StudentCard;