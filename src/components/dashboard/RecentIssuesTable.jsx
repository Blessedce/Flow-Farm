export default function RecentIssuesTable(){

  return(
    <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">

      <h2 className="text-lg font-semibold mb-4">
        Recent Issues
      </h2>

      <table className="min-w-full text-sm">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Sensor</th>
            <th className="p-2 text-left">Issue</th>
            <th className="p-2 text-left">Value</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">
            <td className="p-2">19 May</td>
            <td className="p-2">pH</td>
            <td className="p-2">Above safe range</td>
            <td className="p-2">8.1</td>
            <td className="p-2 text-red-500">High</td>
          </tr>

          <tr className="border-b">
            <td className="p-2">18 May</td>
            <td className="p-2">Water Level</td>
            <td className="p-2">Tank critically low</td>
            <td className="p-2">22%</td>
            <td className="p-2 text-orange-500">Low</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}