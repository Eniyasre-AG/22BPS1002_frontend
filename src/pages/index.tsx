import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";

export default function Home() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    owner: "",
    lawFirm: "",
    attorney: "",
    status: "",
  });

  // Function to fetch data (currently placeholder)
  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      // Placeholder for actual API integration
      setResults([
        { name: "Nike", owner: "Nike Inc.", lawFirm: "ABC Law", status: "Live" },
        { name: "Adidas", owner: "Adidas AG", lawFirm: "XYZ Law", status: "Pending" },
      ]);
    } catch (err: any) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Trademark Search
      </h1>

      {/* Search Bar */}
      <SearchBar
        onSearch={(query) => {
          setSearchQuery(query);
          fetchData();
        }}
      />

      {/* Filters */}
      <Filters
        onFilter={(selectedFilters) => {
          setFilters(selectedFilters);
          fetchData();
        }}
      />

      {/* Status Messages */}
      <div className="mt-4 text-center">
        {loading && <p className="text-blue-600">🔄 Searching...</p>}
        {error && <p className="text-red-600">❌ {error}</p>}
        {!loading && !error && results.length === 0 && (
          <p className="text-gray-600">No results found. Try refining your search.</p>
        )}
      </div>

      {/* Search Results */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-900">{result.name}</h3>
            <p className="text-gray-700 mt-2"><strong>Owner:</strong> {result.owner}</p>
            <p className="text-gray-700"><strong>Law Firm:</strong> {result.lawFirm}</p>
            <p className="text-gray-700"><strong>Status:</strong> {result.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
