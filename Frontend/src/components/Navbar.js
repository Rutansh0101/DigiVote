import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setIsMarkieHovered, setShowMarkie } from "../redux/slices/Markie"

const Navbar = () => {
  const location = useLocation();
  const showMarkie = useSelector((state) => state.markie.showMarkie);
  const isMarkieHovered = useSelector((state) => state.markie.ishovered);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-white text-gray-700 h-20 flex items-center justify-center shadow-md">
        <div className="w-[85%] max-w-7xl">
          <div className="flex items-center w-full h-full px-4 md:px-10 justify-between">
            <div className="flex items-center">
              <span className="font-bold text-2xl cursor-default text-blue-600"
              onClick={()=>window.location.reload()}
              >DigiVote India</span>
            </div>
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link
                  to="/"
                  className={`hover:text-blue-600 font-medium transition duration-200 ${location.pathname === "/" ? "text-blue-600" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/parties"
                  className={`hover:text-blue-600 font-medium transition duration-200 ${location.pathname === "/parties" ? "text-blue-600" : ""}`}
                >
                  Parties
                </Link>
              </li>
              <li>
                <Link
                  to="/results"
                  className={`hover:text-blue-600 relative font-medium transition duration-200 ${location.pathname === "/results" ? "text-blue-600" : ""}`}
                >
                  Results
                  <span className="bg-red-600 animate-pulse text-[10px] absolute rounded-full px-[5px] left-full ml-1 -top-2 font-medium tracking-wide text-white">
                    Live
                  </span>
                </Link>
              </li>
            </ul>
            <div>
              {location.pathname !== '/vote' ? (
                <Link
                  to="/vote"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-medium shadow-md"
                >
                  Vote Now
                </Link>
              ) : (
                <Link
                  to="/"
                  className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300 font-medium shadow-md"
                >
                  Connect
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {showMarkie &&
        <div className="relative w-full bg-blue-100 overflow-hidden"
          onMouseEnter={() => dispatch(setIsMarkieHovered(true))}
          onMouseLeave={() => dispatch(setIsMarkieHovered(false))}
        >
          {isMarkieHovered &&
            <button 
              onClick={() => dispatch(setShowMarkie(false))} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-red-600 font-bold hover:text-red-800"
            >
              ✖
            </button>
          }
          <div className={`whitespace-nowrap inline-block py-2 px-4 ${isMarkieHovered ? 'animate-paused' : 'animate-marquee'}`}>
            <span className="text-black">
              2024 Indian General Elections: Lok Sabha Elections from April 19 to June 1, 2024 | Phase-wise voting across 543 constituencies | Election Commission of India managing the world's largest democratic exercise
            </span>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar;