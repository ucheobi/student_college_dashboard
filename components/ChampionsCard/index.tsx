import { StudentType } from "@/types";
import Image from "next/image";

type ChampionsCardProps = {
    students: StudentType[]
}

const ChampionsCard = ({ students }: ChampionsCardProps) => {
    return (
        <div className="flex items-end gap-6 my-4 justify-end pb-4">
            <ChampionsList 
                imageUrl={students[1].imageUrl}
                name={students[1].name}
                grade={students[1].grade}
                score={students[1].score}
                bgColor="gray"
                pHeight="h-40"
                pWidth="w-20"
            />

            <ChampionsList 
                imageUrl={students[0].imageUrl}
                name={students[0].name}
                grade={students[0].grade}
                score={students[0].score}
                bgColor="amber"
                pHeight="h-50"
                pWidth="w-25"
            />

            <ChampionsList 
                imageUrl={students[2].imageUrl}
                name={students[2].name}
                grade={students[2].grade}
                score={students[2].score}
                bgColor="orange"
                pHeight="h-38"
                pWidth="w-22"
            />
        </div>  
    )
}

const colorMap: Record<string, string> = {
  amber: "bg-amber-400 border-amber-400",
  gray: "bg-gray-400 border-gray-400",
  orange: "bg-orange-400 border-orange-400",
};

type ChampionsListProps = {
    imageUrl: string; 
    name: string; 
    grade: string; 
    score: number; 
    pWidth: string; 
    pHeight: string;
    bgColor: keyof typeof colorMap;
}


const ChampionsList = ({imageUrl, name, grade, score, pWidth, pHeight, bgColor}: ChampionsListProps) => (
    <div className={`flex flex-col justify-between gap-3 items-center pt-2 rounded-t-xl ${pWidth} ${pHeight}`}>
        <div className="h-15 w-15">
            <Image 
                className={`h-full rounded-full object-cover border-3 ${colorMap[bgColor]}`} 
                src={`/${imageUrl}`} 
                alt="Profile Picture" 
                width={100} 
                height={50} 
            />
        </div>
        <div className={`flex flex-col px-2 pt-4 rounded-t-lg items-center ${colorMap[bgColor]} ${pWidth} ${pHeight} w-full`}>
            <h3 className="text-white text-[8px]">{name}</h3>
            <p className="text-[6px] text-gray-200">{grade}</p>
            <p className="text-white text-xs">{score} pts</p>
        </div>
    </div>
)

export default ChampionsCard;