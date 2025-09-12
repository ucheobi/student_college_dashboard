

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {


  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      sidebar
      <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50`}>
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
