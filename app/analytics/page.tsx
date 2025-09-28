'use client';

import Header from "@/components/Header";
import { computeDashboard, getPerformanceDistribution } from "@/utils";
import { useAppSelector } from "../redux";
import DashboardCard from "@/components/DashboardCard";
import PerformanceDistributionPiechart from "@/components/StudentsDistribution/PerformanceDistributionPiechart";
import { useMemo } from "react";
import AveragePerformanceBySkill from "@/components/StudentsDistribution/AveragePerformanceBySkill";
import MonthlyImprovementReport from "@/components/StudentsDistribution/MonthlyImprovement";
import PerformanceBarChart from "@/components/StudentsDistribution/PerformanceBarChart";
import { SKILL_COLORS, BAR_COLORS } from "@/constants";



const AnalyticsPage = () => {
    const students = useAppSelector((state) => state.students);

    const { activeStudents, totalLearningHours, totalLessonsCompleted, averageSessionTime } = computeDashboard(students);
    const performanceDistribution = getPerformanceDistribution(students);

    const averageSkills = useMemo(() => {
        const totalSkills: Record<string, number> = {
          vocabulary: 0,
          grammar: 0,
          punctuation: 0,
          listening: 0,
          speaking: 0,
        };
        const count = students.length;
    
        students.forEach((student) => {
          totalSkills.vocabulary += student.skills.vocabulary;
          totalSkills.grammar += student.skills.grammar;
          totalSkills.punctuation += student.skills.punctuation;
          totalSkills.listening += student.skills.listening;
          totalSkills.speaking += student.skills.speaking;
        });
    
        return Object.keys(totalSkills).map((skill) => ({
          skill,
          average: Math.round(totalSkills[skill] / count),
          color: SKILL_COLORS[skill],
        }));
      }, [students]);
  
  return (
    <div className="grid w-full gap-4 px-4 mb-4">
      <Header name="Analytics & Reports" color="" />
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

       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <PerformanceDistributionPiechart 
              performanceDistribution={performanceDistribution} 
          />

          <AveragePerformanceBySkill
              averageSkills={averageSkills}
              skillColors={SKILL_COLORS}
          />

          <PerformanceBarChart 
              averageSkills={averageSkills}
              barColor={BAR_COLORS}
          />

          <MonthlyImprovementReport />
       </div>
    </div>
  );
};

export default AnalyticsPage;
