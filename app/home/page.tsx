import Card from "../components/Card"
import dashboardData from "@/mockData"
import Header from "../components/Header"


const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
        <Header name="Extraordinary Technical College" description="Welcome back! Here is your latest update" />
        <Card dashboardData={dashboardData} />
    </div>
  )
}
export default HomePage