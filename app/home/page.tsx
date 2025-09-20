'use client'

import Card from "../../components/Card";
import StudentsDistribution from "../../components/StudentsDistribution";
import Header from "../../components/Header";
import Leaderboard from "@/components/Leaderboard";
import { useAppSelector } from "../redux";
import { computeDashboard } from "@/utils";


const HomePage = () => {
  const allStudents = useAppSelector((state) => state.students)
  const dashboardSummary = computeDashboard(allStudents);

  return (
    <div className="flex w-full flex-col px-4 ">
      <Header
        name="Extraordinary Technical College"
        description="Welcome back! Here is your latest update"
      />
      <Card dashboardData={dashboardSummary} />
      <StudentsDistribution />
      <Leaderboard />
    </div>
  );
};
export default HomePage;
