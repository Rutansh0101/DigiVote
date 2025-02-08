import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const CandidateDetails = ({ isOpen, onClose, name, status, party, ElectionSymbol , CurrentPartyPresident, KeyLeaders, Presence}) => {
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const [isClosing, setIsClosing] = useState(false);
    const { language } = useLanguage();

    useEffect(() => {
      if (isOpen) {
        setIsClosing(false);
        // Animate modal opening
        gsap.fromTo(modalRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.3,
          }
        );

        // Animate content
        gsap.fromTo(contentRef.current,
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.1
          }
        );
      }
    }, [isOpen]);

    const handleClose = () => {
      setIsClosing(true);
      
      // Animate content out
      gsap.to(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.3
      });

      // Animate modal out
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        onComplete: onClose
      });
    };

    if (!isOpen) return null;

    return (
      <div 
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ pointerEvents: isClosing ? 'none' : 'auto' }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={handleClose}
        />
        
        {/* Modal Content */}
        <div 
          ref={contentRef}
          className="relative w-[70%] h-[70%] bg-white rounded-xl shadow-xl overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-300 text-xl z-10"
          >
            ✕
          </button>

          <div className="h-full overflow-auto p-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>
              {`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}
            </style>
            <div className="flex gap-8 mb-8">
              <div className="w-40 h-40 overflow-hidden rounded-lg flex-shrink-0">
                <img 
                  src={party}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-600 mb-3">{name}</h2>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-600 mb-3">{language === 'en' ? 'About' : 'के बारे में'}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {status}
              </p>
              <div className='text-xl font-bold text-gray-600 mb-3'>
                ElectionSymbol : {ElectionSymbol}
              </div>
              <div className='text-xl font-bold text-gray-600 mb-3'>
                CurrentPartyPresident : {CurrentPartyPresident}
              </div>
              <div className='text-xl font-bold text-gray-600 mb-3'>
                KeyLeaders : {KeyLeaders}
              </div>
              <div className='text-xl font-bold text-gray-600 mb-3'>
                Presence : {Presence}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CandidateDetails;