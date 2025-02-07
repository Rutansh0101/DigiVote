import React, { useState } from 'react';
import CandidateDetails from './CandidateDetails';

const CandidateCard = ({ name, description, imageUrl, isPixelArt }) => {
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
                  src={imageUrl} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <img 
                src={imageUrl} 
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
        candidate={{ name, description, imageUrl }}
      />
    </>
  );
};

export default CandidateCard;