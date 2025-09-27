'use client'

import Header from "@/components/Header";
import { Crown, Filter, Flame, Medal, Shell, Zap } from "lucide-react";
import { useAppSelector } from "../redux";
import ChampionsCard from "@/components/ChampionsCard";
import SearchFilter from "@/components/Search";
import useSearchHook from "@/hooks/useSearchHook";
import LeaderboardCard from "@/components/Leaderboard/LeaderboardCard";
import { computeDashboard, getMostLessons } from "@/utils";
import { useState } from "react";

const months = ["This Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const LeaderboardPage = () => {
    const students = useAppSelector((state) => state.students);
    const { topScorers, topScorer, longestStreak, mostActive, highestAccuracy} = computeDashboard(students);
    const mostLessons = getMostLessons(students)
    const [selectedMonth, setSelectedMonth] = useState("This Month")

    const { grades, searchTerm, filteredStudents, selectedGrade,  handleSearchTerm, handleSelectedGrade} = useSearchHook(topScorers);


  return (
    <div className="grid gap-2 w-full px-4">
        <Header 
            name="School Leaderboard"
            description="Celebrating our the performers and enccouraging healthy competition"
        />

        <div className="flex flex-col items-center rounded-lg bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center mx-auto w-full bg-yellow-50 py-2 rounded-t-lg">
                <div className="flex text-blue-500 text-sm my-2">
                    <span className="flex items-center"><Medal size={12} /></span>
                    <h2 className="mx-1">Champions Podium</h2>
                    <span className="flex items-center"><Medal size={12} /></span>
                </div>
                <div className="text-[8px] text-yellow-600">This month&#39;s top 3 achieve</div>
            </div>

            <ChampionsCard students={students} />           
        </div>

        <div className="flex p-4 rounded-lg bg-white shadow-lg">
            <SearchFilter 
                grades={grades}
                searchTerm={searchTerm}
                selectedGrade={selectedGrade}
                handleSearchTerm={handleSearchTerm}
                handleSelectedGrade={handleSelectedGrade}
            />

            {/* Dummy Month - Month not part of dummy data */}
            <div className="mx-2">
                 <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="p-2 border border-gray-300 h-10 rounded-md text-[8px] dark:bg-gray-900 dark:text-white text-gray-500"
                >
                    {months.map((month) => (
                    <option key={month} value={month}>
                        {month}
                    </option>
                    
                    ))}
                </select>
            </div>

            <div className="">
                <button className="flex gap-2 text-[8px] font-semibold text-gray-500 py-3 px-6 border border-gray-200 rounded-lg shadow">
                    <Filter size={10} />
                    More Filters
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-2 w-full bg-white px-4 pb-6 rounded-xl">
            <Header 
                name="Complete Rankings"
                description="All students ranked by points earned this month"
                isSmallText={true}
            />
            {filteredStudents.map((leaderboard, index) => (
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
                    variant="compact"
                />
            ))}

            <div className="grid grid-cols-4 my-4 gap-2">
                <div className="flex flex-col items-center gap-1 bg-white dark:bg-amber-400 dark:text-white py-4 px-6 rounded-lg shadow-lg">
                    <span className="text-amber-600"><Crown size={15} /></span>
                    <span className="text-[9px] font-bold">Current Champion</span>
                    <span className="text-[8px] text-gray-500">{topScorer.name}</span>
                    <span className="text-[10px] font-bold text-yellow-600">{topScorer.score} points</span>
                </div>
                <div className="flex flex-col items-center bg-white dark:text-white dark:bg-green-500 gap-1 py-4 px-6 rounded-lg shadow-lg">
                    <span className="text-amber-600"><Flame size={15} /></span>
                    <span className="text-[9px] font-bold">Longest Streak</span>
                    <span className="text-[8px] text-gray-500">{longestStreak.name}</span>
                    <span className="text-[10px] font-bold text-amber-600">{Math.floor(longestStreak.hours / 24)} days</span>
                </div>
                <div className="flex flex-col items-center bg-white dark:bg-blue-500 dark:text-white gap-1 py-4 px-6 rounded-lg shadow-lg">
                    <span className="text-yellow-500"><Zap size={15} /></span>
                    <span className="text-[10px] font-bold">Most Active</span>
                    <span className="text-[8px] text-gray-500">{mostActive?.name}</span>
                    <span className="text-[10px] font-bold text-blue-800">{mostLessons?.lessons} lessons</span>
                </div>
                <div className="flex flex-col items-center bg-white dark:bg-blue-500 dark:text-white gap-1 py-4 px-6 rounded-lg shadow-lg">
                    <span className="text-orange-600"><Shell size={15} /></span>
                    <span className="text-[10px] font-bold">Highest Accuracy</span>
                    <span className="text-[8px] text-gray-500">{highestAccuracy?.name}</span>
                    <span className="text-[10px] font-bold text-green-600">{highestAccuracy?.accuracy} %</span>
                </div>
            </div>
        </div>
    </div>
  )
}


export default LeaderboardPage;