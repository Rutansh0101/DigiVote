import React, { useState } from 'react';
import CandidateDetails from './CandidateDetails';

const CandidateCard = ({ name, description, party, isPixelArt, ElectionSymbol, CurrentPartyPresident, KeyLeaders, Presence }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <div className={`relative p-4`}>
          <div className="aspect-square w-full overflow-hidden rounded-lg">
            {isPixelArt ? (
              <div className={`w-full h-full`}>
                <img 
                  src={party} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <img 
                src={party} 
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
        
        <div className="p-4 text-center">
          <h3 className="text-gray-700 text-xl font-semibold mb-2">{name}</h3>
        </div>
      </div>

      <CandidateDetails 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        status={description}
        party={party}
        ElectionSymbol = {ElectionSymbol}
        CurrentPartyPresident = {CurrentPartyPresident}
        KeyLeaders = {KeyLeaders}
        Presence = {Presence}
      />
    </>
  );
};

export default CandidateCard;