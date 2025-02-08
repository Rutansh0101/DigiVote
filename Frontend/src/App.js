import { Route, Routes } from "react-router-dom"
import "./App.css"
import Main from "./pages/Main"
import VotingPage from "./pages/VotingPage"
import ResultsPage from "./pages/ResultsPage"
import Contestants from "./pages/Contestants"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ElectionAdmin from "./pages/ElectionAdmin"
import BotPressChat from "./components/BotPressChat"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  const location = window.location;

  return (
    <div className={`min-h-screen bg-gray-100`}>
    {
      !location.pathname.includes('admin-dashboard') &&
      <Navbar/>
    }
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vote" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/parties" element={<Contestants />} />
        <Route path='/admin-dashboard' element={<div><ElectionAdmin/></div>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        <BotPressChat/>
      </div>
    {
      !location.pathname.includes('admin-dashboard') &&
      <Footer/>
    }
    </div>
  )
}

export default App;