"use client";

import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

type StudentProgressCircleProps = {
  label: string;
  value: number;
  maxValue: number;
  color: string;
};

const StudentProgressCircle = ({
  label,
  value,
  maxValue,
  color,
}: StudentProgressCircleProps) => {
  const percentage = (value / maxValue) * 100;

  const data = [
    { name: label, value: percentage, fill: color },
    { name: "remaining", value: 100 - percentage, fill: "#e5e7eb" },
  ];

  return (
    <div className="relative flex flex-col items-center">
      <RadialBarChart
        width={120}
        height={120}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="100%"
        barSize={12}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          background
          dataKey="value"
          cornerRadius={5}
        />
      </RadialBarChart>

      {/* Centered text */}
      <div className="absolute flex flex-col items-center justify-center h-full">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-gray-500">{`${value}/${maxValue}`}</p>
      </div>
    </div>
  );
};

export default StudentProgressCircle;
