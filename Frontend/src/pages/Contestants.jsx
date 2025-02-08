import React from 'react';
import CandidateCard from '../components/CandidateCard';
import { useSelector } from 'react-redux';

const Contestants = () => {
  const candidates = useSelector((state) => state.votes);
  console.log(candidates);

  return (
    <div className="flex flex-col min-h-screen bg-[#f0eef6] text-black">
      <div className="flex flex-col container mx-auto px-4 py-8 space-y-5">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-700">National Parties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.name} {...candidate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contestants;