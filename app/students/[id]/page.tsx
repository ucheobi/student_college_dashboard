"use client";

import { useParams } from "next/navigation";
import { useAppSelector } from "@/app/redux";
import Link from "next/link";
import Image from "next/image";
import StudentProgressCircle from "@/components/StudentsList/StudentProgressCircle";
import StudentSkillsChart from "@/components/StudentsList/StudentSkillsChart";
import Header from "@/components/Header";

const  StudentDetailPage = () => {
  const params = useParams();
  const studentId = params.id as string;

  const student = useAppSelector((state) =>
    state.students.find((s) => s.id === studentId)
  );

  // Create a dummy email from the fullname
  const email = student?.name.split(" ").join("").toLowerCase() + "@example.com";

  if (!student) {
    return <div className="p-6">Student not found</div>;
  }

  return (
    <div className="pb-6 dark:bg-gray-900">
        <div className="relative w-full">
            {/* Banner */}
            <div className="h-20 w-full bg-gradient-to-r from-sky-400 to-purple-400 rounded-t-lg"></div>

            <div className="absolute left-16 transform -translate-x-1/2 -bottom-12">
                <Image
                    src={`/${student.imageUrl}`}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
            </div>
        </div>

        <div className="mt-14 px-4">
            <h1 className="text-2xl font-bold text-sky-900 dark:text-white">{student.name}</h1>
            <div className="flex ">
                <div>
                    <span className="text-sm text-gray-500 dark:text-white">ID: </span>
                    <span className="text-sm text-blue-900 dark:text-orange-500">{student.id}</span>
                </div>

                <span className="text-sm text-gray-500 mx-2">|</span>

                <div>
                    <span className="text-sm text-gray-500 dark:text-white">Email: </span>
                    <span className="text-sm text-blue-900 dark:text-orange-500">{email}</span>
                </div>

                <span className="text-sm text-gray-500 mx-2">|</span>

                <div>
                    <span className="text-sm text-gray-500 dark:text-white">Grade: </span>
                    <span className="text-sm text-blue-900 dark:text-orange-500">{student.grade}</span>
                </div>              
            </div>
            
           

            <div className="flex justify-around gap-6 w-full bg-white p-4 my-6 rounded-xl shadow-lg">
               <StudentProgressCircle
                    label="Score"
                    value={student.score}
                    maxValue={1000}
                    color="#3b82f6"
                />
                <StudentProgressCircle
                    label="Accuracy"
                    value={student.accuracy}
                    maxValue={100}
                    color="#10b981"
                />
                <StudentProgressCircle
                    label="Hours"
                    value={student.hours}
                    maxValue={180}
                    color="#f59e0b"
                />
            </div>

            <div className="p-2 border border-gray-300 shadow-lg rounded-lg">
                <Header 
                    name="Student Skills Performance Chart"
                    isSmallText
                />
                <StudentSkillsChart 
                    skills={student.skills}
                />
            </div>
            
            <Link href="/students">
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:text-indigo-200 cursor-pointer">
                    Back To Students
                </button>
            </Link>
        </div>
    </div>
  );
}

export default StudentDetailPage;
