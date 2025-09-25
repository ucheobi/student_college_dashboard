"use client";

import Leaderboard from "@/components/Leaderboard";
import StudentsList from "@/components/StudentsList";
import {
  computeDashboard,
  getClassPerformance,
  getMostLessons,
  getPerformanceDistribution,
} from "@/utils";
import Header from "../../components/Header";
import StudentsDistribution from "../../components/StudentsDistribution";
import { useAppSelector } from "../redux";
import DashboardCard from "@/components/DashboardCard";
import { ChartNoAxesColumnIncreasing, School2, Trophy, UsersRound } from "lucide-react";

const HomePage = () => {
  const students = useAppSelector((state) => state.students);
  const { totalStudents, totalClasses, averagePerformance, topPerformer, topScorer, topScorers, longestStreak } = computeDashboard(students);
  const classPerformance = getClassPerformance(students);
  const performanceDistribution = getPerformanceDistribution(students);
  const mostLessons = getMostLessons(students);

  return (
    <div className="grid w-full gap-4 px-4">
      <Header
        name="Extraordinary Technical College"
        description="Welcome back! Here is your latest update"
      />
      <div className="grid-col-1 m-auto grid w-full gap-4 md:w-full md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          label="Total Students"
          value={totalStudents}
          percent={8}
          Icon={UsersRound}
        />
        <DashboardCard
          label="Total Classes"
          value={totalClasses}
          percent={13}
          Icon={School2}
          color="bg-green-secondary"
        />
        <DashboardCard
          label="Average Performance"
          value={averagePerformance}
          percent={8}
          Icon={ChartNoAxesColumnIncreasing}
          color="bg-purple-800"
        />
        <DashboardCard
          label="Top Performance"
          value={topPerformer.score}
          percent={8}
          Icon={Trophy}
        />
      </div>
      <StudentsDistribution
        classPerformance={classPerformance}
        performanceDistribution={performanceDistribution}
      />
      <Leaderboard 
        mostLessons={mostLessons} 
        topScorer={topScorer}
        topScorers={topScorers}
        longestStreak={longestStreak}
      />
      <StudentsList students={students} />
    </div>
  );
};
export default HomePage;
