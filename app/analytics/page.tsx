'use client';

import Header from "@/components/Header";
import { computeDashboard, getPerformanceDistribution } from "@/utils";
import { useAppSelector } from "../redux";
import DashboardCard from "@/components/DashboardCard";
import PerformanceDistributionPiechart from "@/components/StudentsDistribution/PerformanceDistributionPiechart";
import SkillPerformanceChart from "@/components/StudentsDistribution/SkillsPerformanceChart";

const AnalyticsPage = () => {
    const isDarkMode = useAppSelector((state) => state.ui.isDarkMode)
    const students = useAppSelector((state) => state.students);

    const { activeStudents, totalLearningHours, totalLessonsCompleted, averageSessionTime } = computeDashboard(students);
    const performanceDistribution = getPerformanceDistribution(students);
    
    const headerColor = isDarkMode ? "text-white" : "text-blue-primary";

  
  return (
    <div className="grid w-full gap-4 px-4 mb-4">
      <Header name="Analytics & Reports" />
      <div className="grid-col-1 m-auto grid w-full gap-4 md:w-full md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
            label="Total Learning Hours"
            value={totalLearningHours}
            percent={8}
            />
            <DashboardCard
            label="Lessons Completed"
            value={totalLessonsCompleted}
            percent={13}
            color="bg-green-secondary"
            />
            <DashboardCard
            label="Average Session Time"
            value={averageSessionTime}
            percent={8}
            color="bg-purple-800"
            />
            <DashboardCard
            label="Active Students"
            value={activeStudents}
            percent={8}
            />
       </div>

       <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 h-full">
            <div className="h-full">
                <PerformanceDistributionPiechart 
                    performanceDistribution={performanceDistribution} 
                    headerColor={headerColor}
                />
             </div>
            <div className="h-full">
                <SkillPerformanceChart students={students} />
            </div>
       </div>
    </div>
  );
};

export default AnalyticsPage;
