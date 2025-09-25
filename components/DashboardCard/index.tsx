import { LucideIcon } from "lucide-react";

type CardContentProps = {
    label: string;
    value: number | string;
    Icon?: LucideIcon;
    percent: number;
    color?: string;
}

const DashboardCard = ({ label, value, Icon, percent, color = "bg-blue-primary" }: CardContentProps) => {
    return (
        <div className="flex w-full justify-between p-3 md:py-2 md:px-0 rounded-lg border-none h-24 bg-white shadow-lg dark:bg-gray-950">
            <div className="grid ml-4">
                <h4 className="text-gray-800 text-md md:text-[8px] uppercase dark:text-white">{label}</h4>
                <h2 className="font-bold text-3xl md:text-xl dark:text-white">{value}</h2>
                <p className="text-[8px] text-gray-600 md:text-[6px] dark:text-white"><span className="text-green-700 dark:text-green-600">{percent}%</span> from last month </p>
            </div>
            {Icon && (
                <div className="flex items-center mr-4">
                <Icon className={`w-10 rounded-lg p-1.5 ${color} size-12 md:size-7 text-white`} />
            </div>
            )}
        </div>
    )
}

export default DashboardCard;