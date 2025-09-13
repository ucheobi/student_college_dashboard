
import { DashboardData } from "@/types"
import { LucideIcon, School2, UsersRound, ChartNoAxesColumnIncreasing, Trophy } from "lucide-react"

type DashboardProps =  {
    dashboardData: DashboardData
}


const Card = ({ dashboardData }: DashboardProps) => {
    const { totalClasses, totalStudents, averagePerformance, topPerformer } = dashboardData.dashboard

    return (
       <div className="flex gap-3">
            <CardContent
                label="Total Students"
                value={totalStudents}
                percent={8}
                Icon={UsersRound}
            />
            <CardContent
                label="Total Classes"
                value={totalClasses}
                percent={13}
                Icon={School2}
                color="bg-green-secondary"
            />
            <CardContent
                label="Average Performance"
                value={averagePerformance}
                percent={8}
                Icon={ChartNoAxesColumnIncreasing}
                color="bg-purple-800"
            />
            <CardContent
                label="Top Performance"
                value={topPerformer.score}
                percent={8}
                Icon={Trophy}
            />
       </div> 
    )
}

type CardContentProps = {
    label: string;
    value: number | string;
    Icon: LucideIcon;
    percent: number;
    color?: string;
}

const CardContent = ({ label, value, Icon, percent, color = "bg-blue-primary" }: CardContentProps) => {


    return (
        <div className="flex gap-3 justify-between p-3 rounded-lg border-none w-44 h-22 bg-white shadow-lg">
            <div className="flex flex-col justify-between">
                <h4 className="text-gray-800 text-[8px] uppercase">{label}</h4>
                <h2 className="font-bold text-xl">{value}</h2>
                <p className="text-[7px] text-gray-600 "><span className="text-green-700">{percent}%</span> from last month </p>
            </div>
            <div className="flex items-center">
                <Icon className={`w-6 rounded-lg p-1.5 ${color} text-white dark:text-gray-400`} />
            </div>
        </div>
    )
}

export default Card;