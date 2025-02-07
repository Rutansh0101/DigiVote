import { useState } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { voteForCandidate } from "../redux/slices/Votes"

const VotingPage = () => {
  
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const candidates = useSelector((state) => state.votes);
  const dispatch = useDispatch();

  const handleVote = () => {
    if (selectedCandidate) {
      dispatch(voteForCandidate(selectedCandidate))
      toast.success("Your vote has been cast successfully!")
      setSelectedCandidate(null)
    } else {
      toast.error("Please select a candidate before voting.")
    }
  }
  

  return (
    <div className="flex flex-col min-h-screen min-w-[100%]">
      <div className="flex-grow mx-auto px-4 py-8 w-[90%]">
        <h1 className="text-4xl font-bold mb-6 text-center">Cast Your Vote</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center gap-10 flex-wrap mt-5">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className={`p-4 border rounded-lg cursor-pointer min-w-[300px] flex flex-col gap-3 justify-center items-center group ${
                selectedCandidate === candidate.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
              onClick={() => {
                if (selectedCandidate === candidate.id) {
                  setSelectedCandidate(null);
                } else {
                  setSelectedCandidate(candidate.id);
                }
              }}
            >
              <h2 className="text-gray-800 text-lg font-medium">{candidate.leader}</h2>
              <div className="overflow-hidden rounded-xl">
                <img
                  className="h-60 rounded-xl transform transition duration-300 ease-in-out group-hover:scale-110"
                  src={candidate.leaderPhoto}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <img className="text-gray-600 h-10 rounded-lg" src={candidate.party} alt="" />
                <h3 className="text-lg font-bold">{candidate.name}</h3>
              </div>
            </div>
          ))}

          </div>
          <button
            onClick={handleVote}
            className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            disabled={!selectedCandidate}
          >
            Cast Your Vote
          </button>
        </div>
      </div>
    </div>
  )
}

export default VotingPage;