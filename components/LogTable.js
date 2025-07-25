export default function LogTable({ data }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded p-4">
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Log</th>
            <th className="p-2 text-left">Threat Level</th>
            <th className="p-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{entry.log}</td>
              <td className="p-2 font-semibold">{entry.classification}</td>
              <td className="p-2">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
