'use client'

import Image from "next/image";
import Header from "../Header";
import { Eye, Flame, Trophy, Zap } from "lucide-react"
import { useAppSelector } from "@/app/redux";
import { DashboardSummary, Student } from "@/types";

type LeaderColorProps = Student & { index: number }
type MostLessons = {
    student: Student;
    lessons: number;
}
type LeaderboardProps = { 
    dashboardData: DashboardSummary;
    mostLessons:  MostLessons | null
}

const Leaderboard = ({ mostLessons, dashboardData}: LeaderboardProps) => {
    const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
    const { topScorer, topScorers, longestStreak } = dashboardData;

    const headerColor = isDarkMode ? "text-white" : "text-blue-primary";
    
  return (
    <div className="bg-white p-4 rounded-xl dark:bg-gray-950">
        <Header 
            name="School Leaderboard - Top Champions" 
            description="Our hghest performing students this month with points and achievements" 
            isSmallText={true}
            color={headerColor}
        />

       <div className="grid grid-cols-5 gap-4 w-full">
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

       <div className="grid grid-cols-3 my-4 gap-2">
            <button className="flex flex-col items-center gap-1 text-yellow-600 bg-amber-50 dark:bg-amber-400 dark:text-white py-4 px-6 rounded-lg shadow">
                <span><Trophy size={12} /></span>
                <span className="text-[10px] font-bold">Top Scorer</span>
                <span className="text-[8px]">{topScorer.name} - {topScorer.score}pts</span>
            </button>
            <button className="flex flex-col items-center text-green-800 bg-green-50 dark:text-white dark:bg-green-500 gap-1 py-4 px-6 rounded-lg shadow">
                <span><Flame size={12} /></span>
                <span className="text-[10px] font-bold">Longest Streak</span>
                <span  className="text-[8px]">{longestStreak.name} - {Math.floor(longestStreak.hours / 24)} days</span>
            </button>
            <button className="flex flex-col items-center text-blue-800 bg-blue-50 dark:bg-blue-500 dark:text-white gap-1 py-4 px-6 rounded-lg shadow">
                <span><Zap size={12} /></span>
                <span className="text-[10px] font-bold">Most Lessons</span>
                <span  className="text-[8px]">{mostLessons?.student.name} - {mostLessons?.lessons} lessons</span>
            </button>
       </div>
    </div>
  )
}


const LeaderboardCard = ({ name, imageUrl, grade, accuracy, score, hours, streak,  index }: LeaderColorProps) => {
    return (
        <div className="flex flex-col justify-between gap-1 border border-gray-200 items-center p-3 bg-white rounded-2xl shadow-md dark:bg-gray-950 dark:text-white">
            <div>
                <Image className="border rounded-full" width={30} height={30} src={`/${imageUrl}`} alt="Profile Picture" />
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

export default Leaderboard;