import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {


  return (
    <div className="flex min-h-screen w-full text-gray-900 px-16">
      {/* sidebar */}
      <Sidebar />
      
      <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}>
        <Navbar />
        <div className="bg-gray-200 ml-2">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardWrapper;
