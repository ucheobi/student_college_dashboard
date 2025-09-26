"use client";

import { useMemo } from "react";
import { StudentType } from "@/types";
import Header from "../Header";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const SKILL_COLORS: Record<string, string> = {
  vocabulary: "bg-blue-500",
  grammar: "bg-green-500",
  punctuation: "bg-yellow-500",
  listening: "bg-purple-500",
  speaking: "bg-red-500",
};

const BAR_COLORS: Record<string, string> = {
  vocabulary: "#3B82F6",  // Tailwind blue-500
  grammar: "#10B981",     // Tailwind green-500
  punctuation: "#F59E0B", // Tailwind yellow-500
  listening: "#8B5CF6",   // Tailwind purple-500
  speaking: "#EF4444",    // Tailwind red-500
};

type SkillPerformanceChartProps = {
    students: StudentType[]
}

const SkillPerformanceChart = ({ students }: SkillPerformanceChartProps) => {

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
    <div className="bg-white dark:bg-gray-950 shadow rounded-xl p-6">
      <Header
            name="Average Performance by Skill Area"
            description="Individual skill performance metric and improvements"
            color=""
            isSmallText={true}
        />
      <div className="space-y-4">
        {averageSkills.map(({ skill, average }) => (
          <div key={skill} className="flex flex-col">

            <div className="flex justify-between w-full text-xs text-gray-500 font-medium capitalize dark:text-gray-200">
                <div>
                    {skill}
                </div>
                <div className="">
                    {average}%
                </div>
            </div>

            <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded relative">
                <div
                    className={`h-2 w-full rounded ${SKILL_COLORS[skill]}`}
                    style={{ width: `${average}%` }}
                />
            </div>

          </div>
        ))}
      </div>

      {/* Performance skills barchart */}
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
                    <Cell key={`cell-${index}`} fill={BAR_COLORS[skill.skill]} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

        {/* Hard-coded improvement */}
      <div className="grid gap-2 p-4 rounded-lg bg-gray-100">
        <Header 
          name="Month-over-Month Improvement"
          color=""
          isSmallText
        />
        <div className="text-[8px] grid grid-cols-2 gap-2">
            <div className="grid grid-cols-2 p-2 bg-white items-end rounded-md ">
                <span>Vocabulary</span>
                
                <span className="flex justify-end text-green-500">+5%</span>
            </div>
            <div className="grid grid-cols-2 p-2 bg-white items-end rounded-md ">
                <span>Grammer</span>
                <span className="flex justify-end text-green-500">+8%</span>
            </div>
        

            <div className="grid grid-cols-2 p-2 bg-white items-end rounded-md ">
                <span>Pronunciation</span>
                <span className="flex justify-end text-green-500">+12%</span>
            </div>
            <div className="grid grid-cols-2 p-2 bg-white items-end rounded-md ">
                <span>Listening</span>
                <span className="flex justify-end text-green-500">+3%</span>
            </div>
        
            <div className="grid grid-cols-2 p-2 bg-white rounded-md">
                <span>Speaking</span>
                <span  className="flex justify-end text-green-500">+15%</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPerformanceChart;
