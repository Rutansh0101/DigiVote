import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMarkieHovered, setShowMarkie } from '../redux/slices/Markie';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showMarkie = useSelector((state) => state.markie.showMarkie);
  const isMarkieHovered = useSelector((state) => state.markie.ishovered);
  const dispatch = useDispatch();
  const { language, toggleLanguage } = useLanguage();

  const handleNavigation = () => {
    navigate("/#how-to-vote");
  };

  return (
    <div>
      <div className="bg-white text-gray-700 h-20 flex items-center justify-center shadow-md">
        <div className="w-[85%] max-w-7xl">
          <div className="flex items-center w-full h-full px-4 md:px-10 justify-between">
            <div className="flex items-center">
              <span
                className="font-bold text-2xl cursor-default text-blue-600"
                onClick={() => window.location.reload()}
              >
                DigiVote India
              </span>
            </div>
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link
                  to="/"
                  className={`hover:text-blue-600 font-medium transition duration-200 ${
                    location.pathname === '/' ? 'text-blue-600' : ''
                  }`}
                >
                  {language === 'en' ? 'Home' : 'होम'}
                </Link>
              </li>
              <li>
                <Link
                  to="/parties"
                  className={`hover:text-blue-600 font-medium transition duration-200 ${
                    location.pathname === '/parties' ? 'text-blue-600' : ''
                  }`}
                >
                  {language === 'en' ? 'Parties' : 'पार्टियां'}
                </Link>
              </li>
              <li className="relative group">
                <Link
                  className={`hover:text-blue-600 font-medium transition duration-200 ${
                    location.pathname === '/resources' ? 'text-blue-600' : ''
                  }`}
                >
                  {language === 'en' ? 'Resources' : 'संसाधन'}
                </Link>
                <div className="absolute hidden group-hover:block w-[128px] bg-white shadow-lg z-50">
                  <ul>
                    <li>
                      <Link
                        to="/about"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {language === 'en' ? 'About Us' : 'हमारे बारे में'}
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleNavigation}
                        className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      >
                        {language === 'en' ? 'How to Vote' : 'कैसे वोट करें'}
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/results"
                  className={`hover:text-blue-600 relative font-medium transition duration-200 ${
                    location.pathname === '/results' ? 'text-blue-600' : ''
                  }`}
                >
                  {language === 'en' ? 'Results' : 'परिणाम'}
                  <span className="bg-red-600 animate-pulse text-[10px] absolute rounded-full px-[5px] left-full ml-1 -top-2 font-medium tracking-wide text-white">
                    {language === 'en' ? 'Live' : 'लाइव'}
                  </span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 font-medium shadow-md"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
              {location.pathname !== '/vote' ? (
                <Link
                  to="/vote"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-medium shadow-md"
                >
                  {language === 'en' ? 'Vote Now' : 'अभी वोट करें'}
                </Link>
              ) : (
                <Link
                  to="/"
                  className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300 font-medium shadow-md"
                >
                  {language === 'en' ? 'Connect' : 'कनेक्ट'}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {showMarkie && (
        <div
          className="relative w-full bg-blue-100 overflow-hidden"
          onMouseEnter={() => dispatch(setIsMarkieHovered(true))}
          onMouseLeave={() => dispatch(setIsMarkieHovered(false))}
        >
          {isMarkieHovered && (
            <button
              onClick={() => dispatch(setShowMarkie(false))}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-red-600 font-bold hover:text-red-800"
            >
              ✖
            </button>
          )}
          <div
            className={`whitespace-nowrap inline-block py-2 px-4 ${
              isMarkieHovered ? 'animate-paused' : 'animate-marquee'
            }`}
          >
            <span className="text-black">
              {language === 'en'
                ? "2024 Indian General Elections: Lok Sabha Elections from April 19 to June 1, 2024 | Phase-wise voting across 543 constituencies | Election Commission of India managing the world's largest democratic exercise"
                : '2024 भारतीय आम चुनाव: 19 अप्रैल से 1 जून, 2024 तक लोकसभा चुनाव | 543 निर्वाचन क्षेत्रों में चरणबद्ध मतदान | भारत का चुनाव आयोग दुनिया के सबसे बड़े लोकतांत्रिक अभ्यास का प्रबंधन कर रहा है'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;