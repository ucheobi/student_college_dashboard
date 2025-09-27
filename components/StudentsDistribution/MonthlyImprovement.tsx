import Header from "../Header";

const MonthlyImprovementReport = () => (
      <div className="p-4 rounded-lg bg-white">
        <Header 
          name="Month-over-Month Improvement"
          color=""
          isSmallText
        />
        <div className="text-[8px] grid grid-cols-2 gap-2">
            <div className="grid grid-cols-2 p-2 bg-white items-end rounded-md ">
                <span>Vocabulary</span>
                
                <span className="flex justify-end text-green-500">+5%</span>
            </div>
            <div className="grid grid-cols-2 p-2 bg-white items-end rounded-md ">
                <span>Grammer</span>
                <span className="flex justify-end text-green-500">+8%</span>
            </div>
        

            <div className="grid grid-cols-2 p-2 bg-white items-end rounded-md ">
                <span>Pronunciation</span>
                <span className="flex justify-end text-green-500">+12%</span>
            </div>
            <div className="grid grid-cols-2 p-2 bg-white items-end rounded-md ">
                <span>Listening</span>
                <span className="flex justify-end text-green-500">+3%</span>
            </div>
        
            <div className="grid grid-cols-2 p-2 bg-white rounded-md">
                <span>Speaking</span>
                <span  className="flex justify-end text-green-500">+15%</span>
            </div>
        </div>
      </div>
)

export default MonthlyImprovementReport;