import { useState } from "react";

export default function Filters({ onFilter }: { onFilter: (filters: any) => void }) {
  const [filters, setFilters] = useState({
    owner: "",
    lawFirm: "",
    attorney: "",
    status: "",
  });

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Filters</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="🏢 Owner"
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          value={filters.owner}
          onChange={(e) => setFilters({ ...filters, owner: e.target.value })}
        />
        <input
          type="text"
          placeholder="⚖️ Law Firm"
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          value={filters.lawFirm}
          onChange={(e) => setFilters({ ...filters, lawFirm: e.target.value })}
        />
        <input
          type="text"
          placeholder="👨‍⚖️ Attorney"
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          value={filters.attorney}
          onChange={(e) => setFilters({ ...filters, attorney: e.target.value })}
        />
        <input
          type="text"
          placeholder="🔵 Status"
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        />
      </div>
      <button
        className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium hover:bg-green-700 transition duration-300"
        onClick={() => onFilter(filters)}
      >
        ✅ Apply Filters
      </button>
    </div>
  );
}
