"use client";

import { useAppSelector } from "@/app/redux";
import PerformanceDistributionPiechart from "./PerformanceDistributionPiechart";
import AveragePerformanceBarchart from "./AveragePerformanceBarchart";

type StudentsDistributionProps = {
  classPerformance: { class: string; averageScore: number }[];
  performanceDistribution: { name: string; value: number }[];
}

const StudentsDistribution = ({ classPerformance, performanceDistribution }: StudentsDistributionProps) => {
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode)
  
  const tickColor = isDarkMode ? "#ffffff" : "";

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Average performance barchart */}
      <AveragePerformanceBarchart 
        classPerformance={classPerformance}
        tickColor={tickColor}
      />

      {/* Performance distribution pie chart */}
      <PerformanceDistributionPiechart 
        performanceDistribution={performanceDistribution}
      /> 
    </div>
  );
};

export default StudentsDistribution;
