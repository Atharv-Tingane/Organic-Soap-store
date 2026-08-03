import { FiSearch } from "react-icons/fi";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search organic products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
      />

      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default SearchBar;