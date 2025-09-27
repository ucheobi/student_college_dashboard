import { AveragePerformanceBySkillProps } from "@/types";
import Header from "../Header";


const AveragePerformanceBySkill = ({averageSkills, skillColors}: AveragePerformanceBySkillProps) => (
    <div className="p-4 rounded-lg bg-white">
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
                    className={`h-2 w-full rounded ${skillColors[skill]}`}
                    style={{ width: `${average}%` }}
                />
            </div>

            </div>
        ))}
        </div>
    </div>
)

export default AveragePerformanceBySkill;