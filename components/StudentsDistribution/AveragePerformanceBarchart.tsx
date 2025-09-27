import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Bar, BarChart } from "recharts"
import Header from "../Header"

type AveragePerformanceBarchartProps = {
    classPerformance: { class: string; averageScore: number }[];
    tickColor: string;
}

const AveragePerformanceBarchart = ({ classPerformance, tickColor }: AveragePerformanceBarchartProps) => {

    return (
      <div className="w-full h-120 p-6 bg-white shadow-lg rounded-xl dark:bg-gray-950">
        <Header 
          name="Average Performance by Grade" 
          isSmallText={true}
          description="Student distribution across different grades"  
        />
        <ResponsiveContainer width="100%" height="70%" className="pb-10">
          <BarChart
            data={classPerformance}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="class" tick={{ fill: tickColor }} />
            <YAxis domain={[0, 100]} tick={{ fill: tickColor }} />
            <Tooltip />
            <Bar dataKey="averageScore" fill="#3385ff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
}

export default AveragePerformanceBarchart;