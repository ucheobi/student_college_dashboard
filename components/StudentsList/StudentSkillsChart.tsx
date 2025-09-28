"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

type Skills = {
  vocabulary: number;
  grammar: number;
  punctuation: number;
  listening: number;
  speaking: number;
};

type StudentSkillsChartProps = {
  skills: Skills;
};

const SKILL_COLORS: Record<keyof Skills, string> = {
  vocabulary: "#3b82f6",
  grammar: "#10b981",
  punctuation: "#f59e0b",
  listening: "#8b5cf6",
  speaking: "#ef4444",
};

const StudentSkillsChart = ({ skills }: StudentSkillsChartProps) => {
  const data = Object.entries(skills).map(([skill, value]) => ({
    skill,
    value,
    fill: SKILL_COLORS[skill as keyof Skills],
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="skill" />
          <Tooltip />
          <Bar dataKey="value">
            <LabelList dataKey="value" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentSkillsChart;
