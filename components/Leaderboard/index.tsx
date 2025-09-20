'use client'

import Image from "next/image";
import Header from "../Header";
import { Eye, Flame, Trophy, Zap } from "lucide-react"
import { useAppSelector } from "@/app/redux";
import { computeDashboard, getMostLessons } from "@/utils";
import { Student } from "@/types";

type LeaderColorProps = Student & { index: number }


const Leaderboard = () => {
    const students = useAppSelector((state) => state.students)
    const { topScorers, topScorer, longestStreak } = computeDashboard(students);
    const mostLessons = getMostLessons(students)
    
  return (
    <div className="bg-white p-4 rounded-xl">
        <Header 
            name="School Leaderboard - Top Champions" 
            description="Our hghest performing students this month with points and achievements" 
            isSmallText={true}
        />

       <div className="grid grid-cols-5 gap-2 w-full">
        {topScorers.map((leaderboard, index) => (
            <LeaderboardCard  
                key={index}
                name={leaderboard.name}
                imageUrl={leaderboard.imageUrl}
                grade={leaderboard.grade}
                accuracy={leaderboard.accuracy}
                score={leaderboard.score}
                streak={leaderboard.streak}
                hours={leaderboard.hours}
                index={index}
            />
            )
        )}
       </div>

       <div className="grid grid-cols-3 gap-3 my-4">
            <button className="flex flex-col items-center gap-1 text-yellow-600 bg-amber-50 py-4 px-6 rounded-lg shadow">
                <span className="text-amber-500"><Trophy size={12} /></span>
                <span className="text-[10px] font-bold">Top Scorer</span>
                <span className="text-[8px]">{topScorer.name} - {topScorer.score}pts</span>
            </button>
            <button className="flex flex-col items-center text-green-800 bg-green-50 gap-1 py-4 px-6 rounded-lg shadow">
                <span className="text-amber-500"><Flame size={12} /></span>
                <span className="text-[10px] font-bold">Longest Streak</span>
                <span  className="text-[8px]">{longestStreak.name} - {Math.floor(longestStreak.hours / 24)} days</span>
            </button>
            <button className="flex flex-col items-center text-blue-800 bg-blue-50 gap-1 py-4 px-6 rounded-lg shadow">
                <span className="text-amber-500"><Zap size={12} /></span>
                <span className="text-[10px] font-bold">Most Lessons</span>
                <span  className="text-[8px]">{mostLessons?.student.name} - {mostLessons?.lessons} lessons</span>
            </button>
       </div>
    </div>
  )
}


const LeaderboardCard = ({ name, imageUrl, grade, accuracy, score, hours, streak,  index }: LeaderColorProps) => {
    return (
        <div className="flex flex-col justify-between gap-1 items-center p-3 bg-white rounded-2xl shadow-md">
            <div>
                <Image className="border rounded-full" width={30} height={30} src={`/${imageUrl}`} alt="Profile Picture" />
            </div>
            <h4 className="font-bold text-[8px]">{name}</h4>
            <p className="text-gray-600 text-[8px]">{grade}</p>
            <p className={`p-1 text-white rounded-md text-[8px]
                ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : index === 2 ? "bg-orange-400" : "bg-blue-600"}
            `}>{score} pts</p>
            <p className="bg-green-200 p-1 text-[8px] rounded-lg">{accuracy}% accuracy</p>
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

export default Leaderboard;