
type SearchProps = {
    grades: string[];
    searchTerm: string;
    selectedGrade: string;
    handleSearchTerm: (searchTerm: string) => void;
    handleSelectedGrade: (selectedGrade: string) => void;
}

const SearchFilter = ({ grades, searchTerm, selectedGrade, handleSearchTerm, handleSelectedGrade}: SearchProps) => (
    <div className="flex gap-2 items-center">
        <input
            type="text"
            placeholder="Search students"
            value={searchTerm}
            onChange={(e) => handleSearchTerm(e.target.value)}
            className="p-4 border h-10 border-gray-300 text-[8px] rounded-md dark:bg-gray-900 dark:text-white"
        />
        <select
            value={selectedGrade}
            onChange={(e) => handleSelectedGrade(e.target.value)}
            className="p-2 border border-gray-300 h-10 rounded-md text-[8px] dark:bg-gray-900 dark:text-white text-gray-500"
        >
            {grades.map((grade) => (
            <option key={grade} value={grade}>
                {grade}
            </option>
            ))}
        </select>
    </div>
)

export default SearchFilter