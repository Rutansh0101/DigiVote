import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { gsap } from 'gsap';

const VoterRights = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Animate background
      gsap.fromTo(
        backgroundRef.current, 
        { opacity: 0, backdropFilter: 'blur(0px)' },
        { 
          opacity: 1, 
          backdropFilter: 'blur(10px)', 
          duration: 0.3, 
          ease: 'power1.out' 
        }
      );

      // Animate popup
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.4, 
          ease: 'back.out(1.7)' 
        }
      );
    } else {
      // Exit animations
      if (backgroundRef.current && popupRef.current) {
        const tl = gsap.timeline({
          onComplete: onClose
        });

        tl.to(popupRef.current, { 
          opacity: 0, 
          scale: 0.9, 
          y: 50, 
          duration: 0.3,
          ease: 'power1.in'
        });

        tl.to(backgroundRef.current, { 
          opacity: 0, 
          backdropFilter: 'blur(0px)', 
          duration: 0.3 
        }, '-=0.2');
      }
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div 
        ref={popupRef}
        className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Voter Rights in India</h2>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <section>
            <h3 className="text-xl font-semibold mb-2">Right to Vote</h3>
            <p>Every Indian citizen who is 18 years or older and registered as a voter has the right to vote in elections.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Right to Information</h3>
            <p>Voters have the right to access information about candidates, their backgrounds, and electoral processes.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Secret Ballot</h3>
            <p>Your vote is confidential. No one can compel you to reveal your voting choice.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Equal Opportunity</h3>
            <p>Regardless of religion, race, caste, sex, or place of birth, every registered voter has an equal right to participate in the democratic process.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <p>Provisions are made to ensure voters with disabilities can exercise their right to vote comfortably.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VoterRights;