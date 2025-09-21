'use client'

import Card from "../../components/Card";
import StudentsDistribution from "../../components/StudentsDistribution";
import Header from "../../components/Header";
import Leaderboard from "@/components/Leaderboard";
import { useAppSelector } from "../redux";
import { computeDashboard, getClassPerformance, getMostLessons, getPerformanceDistribution } from "@/utils";
import StudentsList from "@/components/StudentsList";


const HomePage = () => {
  const students = useAppSelector((state) => state.students)
  const dashboardSummary = computeDashboard(students);
  const classPerformance = getClassPerformance(students);
  const performanceDistribution = getPerformanceDistribution(students);
  const mostLessons = getMostLessons(students);

  return (
    <div className="grid gap-4 w-full px-4 ">
      <Header
        name="Extraordinary Technical College"
        description="Welcome back! Here is your latest update"
      />
      <Card dashboardData={dashboardSummary} />
      <StudentsDistribution 
        classPerformance={classPerformance} 
        performanceDistribution={performanceDistribution} 
      />
      <Leaderboard 
        dashboardData={dashboardSummary} 
        mostLessons={mostLessons} 
      />
      <StudentsList students={students}/>
    </div>
  );
};
export default HomePage;
