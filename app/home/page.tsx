import dashboardData from "@/mockData";
import Card from "../../components/Card";
import ClassPerformanceChart from "../../components/ClassPerformanceChart";
import Header from "../../components/Header";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col px-4 ">
      <Header
        name="Extraordinary Technical College"
        description="Welcome back! Here is your latest update"
      />
      <Card dashboardData={dashboardData} />
      <ClassPerformanceChart
        classPerformance={dashboardData.dashboard.classPerformance}
      />
    </div>
  );
};
export default HomePage;
