"use client";

import { AverageSkillType } from "@/types";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Header from "../Header";


type PerformanceBarChartProps = {
    averageSkills: AverageSkillType[];
    barColor: Record<string, string>
}

const PerformanceBarChart = ({ averageSkills, barColor }: PerformanceBarChartProps) => (
    <div className="bg-white dark:bg-gray-950 shadow rounded-xl p-2">

      <Header
        name="Average Skill Performance Barchart"
        color=""
        isSmallText
      />

      <div className="mt-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={averageSkills}
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
            barSize={70}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="skill" 
                angle={-60} 
                textAnchor="end" 
                interval={0} 
                height={80}
                className="text-[8px]"
            />
            <YAxis domain={[0, 100]} tick={{ fill: "#888" }} />
            <Tooltip />
             <Bar dataKey="average" radius={[4, 4, 0, 0]}>
                {averageSkills.map((skill, index) => (
                    <Cell key={`cell-${index}`} fill={barColor[skill.skill]} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

       
    </div>
);

export default PerformanceBarChart;
