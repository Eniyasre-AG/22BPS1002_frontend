import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
      <input
        type="text"
        placeholder="🔍 Search trademarks..."
        className="w-full sm:w-3/4 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="w-full sm:w-auto bg-blue-600 text-white px-6 py-4 rounded-lg shadow-md text-lg font-medium hover:bg-blue-700 transition duration-300"
        onClick={() => onSearch(query)}
      >
        Search
      </button>
    </div>
  );
}
