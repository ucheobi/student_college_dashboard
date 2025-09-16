"use client";

import { ClassPerformanceDataProps } from "@/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Pie,
  PieChart,
} from "recharts";
import Header from "../Header";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6"];

const ClassPerformanceChart = ({ classPerformance }: ClassPerformanceDataProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-6">
      <div className="w-full h-120 p-6 bg-white shadow-lg rounded-xl">
        <Header name="Average Performance by Grade" description="Student distribution across different grades"  />
        <ResponsiveContainer width="100%" height="70%" className="pb-10">
          <BarChart
            data={classPerformance}
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="class" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="averageScore" fill="#3385ff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    {/* Performan distribution bar chart */}
    <div className="h-120 bg-white shadow rounded-xl p-4">
        <div className="w-full h-80 mb-6">
          <Header name="Performance Distribution" description="Overall accuracy breakdown across all students" />
          <ResponsiveContainer className="pb-10">
            <PieChart>
              <Pie
                data={classPerformance}
                dataKey="averageScore"
                nameKey="class"
                cx="50%"
                cy="50%"
                outerRadius={100}
              >
                {classPerformance.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="pt-2">
          <ul className="text-[8px] space-y-1">
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              Excellent (90 - 100%)
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
              Good (80 - 89%)
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
              Average (70 - 79%)
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
              Needs Improvement (below 70%)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassPerformanceChart;
