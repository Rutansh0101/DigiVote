import { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";
import ElectionABI from "../artifacts/contracts/voting.sol/Election.json";
import { toast } from "react-toastify";

const electionAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function Vote() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    async function loadBlockchainData() {
      if (!window.ethereum) {
        console.error("MetaMask not found");
        return;
      }

      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);

        const contract = new Contract(electionAddress, ElectionABI.abi, signer);
        setContract(contract);

        // ✅ Convert BigInt to a regular number
        const candidatesCount = Number(await contract.candidateCount());

        let candidatesArray = [];
        for (let i = 1; i <= candidatesCount; i++) {
          const candidate = await contract.candidates(i);

          candidatesArray.push({
            id: candidate.id.toString(),
            name: candidate.name,
            leader: candidate.name, // Assuming leader is the candidate's name
            leaderPhoto: candidate.photoUrl,
            party: candidate.partyLogoUrl,
          });
        }
        setCandidates(candidatesArray);
      } catch (error) {
        console.error("Error loading blockchain data:", error);
      }
    }

    loadBlockchainData();
  }, []);

  const handleVote = async () => {
    if (!selectedCandidate) {
      alert("Please select a candidate");
      return;
    }

    try {
      const transaction = await contract.vote(selectedCandidate);
      await transaction.wait();
      alert("Vote cast successfully!");
      window.location.reload();
    } catch (error) {
      if(error.code === 4001) {
        toast.error("You rejected the transaction");
      }
      else{
        toast.error("You have already voted");
      }
    }
  };

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
                  setSelectedCandidate(selectedCandidate === candidate.id ? null : candidate.id);
                }}
              >
                <h2 className="text-gray-800 text-lg font-medium">{candidate.leader}</h2>
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="h-60 rounded-xl transform transition duration-300 ease-in-out group-hover:scale-110"
                    src={candidate.leaderPhoto}
                    alt={candidate.name}
                  />
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img className="h-10 rounded-lg" src={candidate.party} alt="Party Logo" />
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
  );
}
