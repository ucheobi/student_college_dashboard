import { Student } from "@/types";
import { Eye, HandFist } from "lucide-react";
import Image  from "next/image"

type LeaderboardCardProps = Student & { index: number, variant?: "default" | "compact" };


const LeaderboardCard = ({ name, imageUrl, grade, accuracy, score, hours, streak,  index, variant = "default" }: LeaderboardCardProps) => {
    if (variant === "compact") {
        return (
            <div className={`flex justify-between items-center p-2 border border-gray-200 rounded-lg bg-white 
                shadow-md dark:bg-gray-950 dark:text-white ${index <= 2 ? "border border-yellow-300 bg-yellow-50" : ""}`}>
                <div className="flex items-center gap-2">
                    <div className="h-9 w-9">
                        <Image 
                            className={`h-full rounded-full object-cover
                                ${index <= 3 ? "border-1 border-yellow-500" : ""} 
                            `} 
                            width={100} height={50} 
                            src={`/${imageUrl}`} 
                            alt="Profile Picture" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold text-xs">{name}</h4>
                        <p className="text-gray-500 text-[8px]">{grade}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                   <div className="flex justify-between">
                        <div className="flex flex-col items-center p-1">
                            <p className={`px-1 rounded-md text-xs font-semibold text-yellow-600 dark:text-white`}>{score}</p>
                            <p className="text-gray-500 text-[7px]">points</p>
                        </div>
                        <p className={`flex text-green-600 p-1 text-[7px] rounded-lg items-center pb-2`}>{accuracy}%</p>
                        <div className="flex ml-2 text-[7px] items-center pb-2">
                            <span className="text-yellow-600 mr-1"><HandFist size={10} /></span>
                            <span className="text-gray-500">{streak}</span>
                        </div>
                   </div>
                    <button 
                        className="flex items-center gap-1 text-[7px] bg-white border-1 border-gray-300 py-1.5 px-1 w-12 rounded-lg 
                            shadow-lg cursor-pointer hover:bg-gray-100 font-bold text-gray-500 place-self-end">
                        <Eye size={8} /> 
                        View
                    </button>
                </div>
            </div>
        )
    }


    return (
        <div className="flex flex-col justify-between gap-1 border border-gray-200 items-center p-3 bg-white rounded-2xl shadow-md dark:bg-gray-950 dark:text-white">
            <div className="h-9 w-9">
                <Image className="h-full rounded-full object-cover" width={100} height={50} src={`/${imageUrl}`} alt="Profile Picture" />
            </div>
            <h4 className="font-bold text-[8px]">{name}</h4>
            <p className="text-gray-600 text-[8px]">{grade}</p>
            <p className={`p-1 text-white rounded-md text-[8px]
                ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : index === 2 ? "bg-orange-400" : "bg-blue-600"}
            `}>{score} pts</p>
            <p className="bg-green-200 dark:bg-green-500 p-1 text-[8px] rounded-lg">{accuracy}% accuracy</p>
            <div className="text-[7px]">
                <span>{streak}</span>
                <span className="inline-block w-2 h-2 mx-1 rounded-full bg-green-500"></span>
                <span>{Math.floor(hours / 24)} day streak</span>
            </div>
            <button 
                className="flex items-center gap-1 text-[7px] border-1 border-gray-50 py-1.5 px-2 rounded-lg 
                    shadow-md cursor-pointer hover:bg-gray-100 font-bold">
                <Eye size={8} /> 
                View Profile
            </button>
        </div>
    )
}

export default LeaderboardCard;