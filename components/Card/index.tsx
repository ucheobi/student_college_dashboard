
import { DashboardData } from "@/types"
import { LucideIcon, School2, UsersRound, ChartNoAxesColumnIncreasing, Trophy } from "lucide-react"

type DashboardProps =  {
    dashboardData: DashboardData
}


const Card = ({ dashboardData }: DashboardProps) => {
    const { totalClasses, totalStudents, averagePerformance, topPerformer } = dashboardData.dashboard

    return (
       <div className="grid gap-4 w-full m-auto grid-col-1 md:grid-cols-2 lg:grid-cols-4 md:w-full">
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
        <div className="flex w-full justify-between p-3 rounded-lg border-none h-28 bg-white shadow-lg dark:bg-gray-950">
            <div className="flex flex-col justify-between ml-4">
                <h4 className="text-gray-800 text-md uppercase dark:text-white">{label}</h4>
                <h2 className="font-bold text-3xl md:text-xl dark:text-white">{value}</h2>
                <p className="text-[8px] text-gray-600 dark:text-white"><span className="text-green-700 dark:text-green-600">{percent}%</span> from last month </p>
            </div>
            <div className="flex items-center mr-4">
                <Icon className={`w-10 rounded-lg p-1.5 ${color} size-12 md:size-8 text-white`} />
            </div>
        </div>
    )
}

export default Card;