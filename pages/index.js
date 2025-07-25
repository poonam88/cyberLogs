import { useState } from "react";
import LogTable from "../components/LogTable";
import { sendLogsToAPI } from "../utils/api";

export default function Home() {
  const [logs, setLogs] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    const lines = text.split("\n").filter(line => line.trim() !== "");
    setLogs(lines);

    setLoading(true);
    const response = await sendLogsToAPI(lines);
    setResults(response);
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">ThreatLens – Log Analyzer</h1>

      <input type="file" accept=".txt,.csv" onChange={handleFileUpload} className="mb-4" />

      {loading && <p>Analyzing logs, please wait...</p>}
      {results.length > 0 && <LogTable data={results} />}
    </div>
  );
}
