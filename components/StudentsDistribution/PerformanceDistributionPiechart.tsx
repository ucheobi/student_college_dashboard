import { ResponsiveContainer, Pie, Cell, Tooltip, PieChart } from "recharts"
import Header from "../Header"
import { COLORS } from "@/constants"

type PerformanceDistributionPieChartProps = {
    performanceDistribution: { name: string; value: number }[];
}

const PerformanceDistributionPiechart = ({ performanceDistribution }: PerformanceDistributionPieChartProps) => (
    <div className="h-120 bg-white shadow rounded-xl p-4 dark:bg-gray-950">
    <div className="w-full h-80 mb-6">
      <Header 
        name="Student Performance Distribution" 
        description="Overall accuracy breakdown across all students" 
        isSmallText={true}
        color=""
      />
      <ResponsiveContainer className="pb-10">
        <PieChart>
          <Pie
            data={performanceDistribution}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            {performanceDistribution.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="pt-2">
      <ul className="text-[8px] space-y-1 dark:text-white">
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
)

export default PerformanceDistributionPiechart;