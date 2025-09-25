'use client'

import Header from "../Header";
import { Flame, Trophy, Zap } from "lucide-react"
import { useAppSelector } from "@/app/redux";
import { Student } from "@/types";
import LeaderboardCard from "./LeaderboardCard";

type MostLessons = {
    student: Student;
    lessons: number;
}
type LeaderboardProps = { 
    mostLessons:  MostLessons | null;
    topScorer: Student; 
    topScorers: Student[]; 
    longestStreak: Student;
}

const Leaderboard = ({ mostLessons, topScorer, topScorers, longestStreak }: LeaderboardProps) => {
    const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);

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
            <div className="flex flex-col items-center gap-1 text-yellow-600 bg-amber-50 dark:bg-amber-400 dark:text-white py-4 px-6 rounded-lg shadow">
                <span><Trophy size={12} /></span>
                <span className="text-[10px] font-bold">Top Scorer</span>
                <span className="text-[8px]">{topScorer.name} - {topScorer.score}pts</span>
            </div>
            <div className="flex flex-col items-center text-green-800 bg-green-50 dark:text-white dark:bg-green-500 gap-1 py-4 px-6 rounded-lg shadow">
                <span><Flame size={12} /></span>
                <span className="text-[10px] font-bold">Longest Streak</span>
                <span  className="text-[8px]">{longestStreak.name} - {Math.floor(longestStreak.hours / 24)} days</span>
            </div>
            <div className="flex flex-col items-center text-blue-800 bg-blue-50 dark:bg-blue-500 dark:text-white gap-1 py-4 px-6 rounded-lg shadow">
                <span><Zap size={12} /></span>
                <span className="text-[10px] font-bold">Most Lessons</span>
                <span  className="text-[8px]">{mostLessons?.student.name} - {mostLessons?.lessons} lessons</span>
            </div>
       </div>
    </div>
  )
}

export default Leaderboard;