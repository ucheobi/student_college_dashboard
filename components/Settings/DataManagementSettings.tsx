import Header from "../Header";

const DataManagementSettings = () => (
    <div className="rounded-lg border border-gray-200 shadow-lg bg-white px-3 pb-3">
        <Header
            name="Data Management"
            description="Export data and manage systems backups"
            color=""
            isSmallText
        />

        <div className="grid gap-2">
            <div className="grid gap-2">
                <h4 className="text-[9px]">Export Data</h4>
                <div className="grid grid-cols-2 text-[9px] gap-1">
                    <button type="submit" className="p-1 border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-lg shadow-md">Export Student Data</button>
                    <button type="submit" className="p-1 border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-lg shadow-md">Export School Reports</button>
                    <button type="submit" className="p-1 border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-lg shadow-md">Export Analytics</button>
                </div>
            </div>

            <div className="text-xs ">
                <h4 className="my-1">Backup</h4>
                <button 
                    type="submit"
                    className="rounded-lg hover:bg-gray-100 cursor-pointer w-1/3 p-1 text-[10px] border border-gray-300 shadow-md" 
                >
                    Create Backup
                </button>
            </div>
        </div>
    </div>
)

export default DataManagementSettings;