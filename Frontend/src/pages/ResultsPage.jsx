import { useSelector } from "react-redux"


const ResultsPage = () => {
  
  const results = useSelector((state) => state.votes);
  const totalVotes = results.reduce((sum, candidate) => sum + candidate.votes, 0)
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Election Results</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Vote Distribution</h2>
          <div className="space-y-6">
            {results.map((candidate) => (
              <div key={candidate.id} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{candidate.name}</h3>
                  <span className="text-lg font-medium">{candidate.votes} votes</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={"bg-blue-600 h-4 rounded-full w-0 transition-all duration-300"}
                    style={{ width: `${(candidate.votes / totalVotes) * 100}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-1">
                  {(candidate.votes === 0) ? 0 : ((candidate.votes / totalVotes) * 100).toFixed(2)}%
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold">Total Votes: {totalVotes.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage