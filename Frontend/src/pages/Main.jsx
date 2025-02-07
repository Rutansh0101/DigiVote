import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import VoterRights from '../components/VoterRights';
import FAQPopup from '../components/FAQPopup';
import VoteForIndia from '../Assets/VoteForIndia.png'
import aboutImg3 from '../Assets/aboutImg3.png'
import b1 from '../Assets/benefits/b1.png'
import b2 from '../Assets/benefits/b2.png'
import b3 from '../Assets/benefits/b3.png'
import b4 from '../Assets/benefits/b4.png'
import rights from '../Assets/voterEdu/rights.jpg'
import Faq from '../Assets/voterEdu/Faq.jpg'
import parties from '../Assets/voterEdu/parties.png'
import Pic1 from '../Assets/Pic1.jpg'

const Main = () => {

  const [isVoterRightsOpen, setIsVoterRightsOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      <div className="flex-grow mx-5 px-4 py-8">
        
        <div className='flex mb-10 bg-white rounded-xl justify-around h-[600px] items-center'>
          <div className='p-6 flex flex-col w-[50%] h-full justify-center'>
            <h1 className="text-6xl font-bold mb-4 text-gray-700">Welcome to DigiVote India</h1>
            <p className="text-lg mb-3 font-medium text-gray-600">Empowering Democracy, One Click at a Time!</p>
            <p className='text-gray-500'>
            Voting is the cornerstone of a thriving democracy, ensuring that every citizen has a voice in shaping the nation’s future. As India continues to grow as the world’s largest democracy, it is crucial to make the electoral process secure, transparent, and accessible to all.
            DigiVote is a next-generation online voting platform designed to enhance electoral participation, streamline voting procedures, and eliminate fraud. By integrating advanced security measures, we aim to provide a fair, efficient, and reliable voting system for all eligible voters, including those in remote areas, overseas, and underserved communities.
            </p>
          </div>
          <div className='w-[500px]'>
            <img src={VoteForIndia} alt="Voting" className="w-full bg-transparent"/>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 p-10 pb-14 w-screen -ml-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-600 text-center">Voter Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out
             cursor-pointer"
            onClick={() => setIsVoterRightsOpen(true)}>
              <img src={rights} className='rounded-xl py-8' alt='rights'/>
              <h3 className="text-xl font-semibold mb-4">Know Your Rights</h3>
              <p className="mb-4">Learn about your voting rights and responsibilities as an Indian citizen.</p>
              <button 
                className="text-blue-600 hover:underline"
              >
                Read More
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out
             cursor-pointer"
             onClick={()=>navigate('/parties')}>
              <img src={parties} className='rounded-xl' alt='parties'/>
              <h3 className="text-xl font-semibold mb-4">Parties Information</h3>
              <p className="mb-4">Get to know the candidates running in your constituency.</p>
              <Link to="/parties" className="text-blue-600 hover:underline">
                View Parties
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out
             cursor-pointer"
             onClick={() => setIsFAQOpen(true)}>
              <img src={Faq} className='rounded-xl' alt=''/>
              <h3 className="text-xl font-semibold mb-4">FAQs</h3>
              <p className="mb-4">Find answers to commonly asked questions about the voting process.</p>
              <button 
                className="text-blue-600 hover:underline"
              >
                View FAQs
              </button>
            </div>
          </div>
        </div>

        <div className="my-32 mt-28 ">
          <h2 className="text-4xl font-bold mb-14 text-center text-gray-600">Benefits of E-Voting</h2>
          <div className='flex justify-center items-center'>
            <div className="grid md:grid-cols-2 gap-8 w-[75%]">
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b3} className='h-10' alt=''/>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">Security & Transparency</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>Blockchain technology ensures that votes are encrypted, tamper-proof, and traceable, eliminating fraudulent activities.</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b2} className='h-10' alt=''/>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">Accessibility for All</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>Voters from remote locations, overseas citizens, and individuals with disabilities can cast their votes conveniently.</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b1} className='h-10' alt=''/>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">Quick & Accurate Results</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>Automated vote counting speeds up result announcements and reduces human errors.</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b4} className='h-10' alt=''/>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">Eco-Friendly & Cost-Effective</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>Reduces paper wastage and administrative costs, making the voting process more efficient.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold my-14 text-center text-gray-600">How to Vote</h2>
          <div className='flex justify-center items-center'>
            <div className="bg-[#ffffff] p-6 rounded-lg shadow-md border w-[75%]">
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li className='bg-[#eff7ff] p-4 text-xl rounded-xl'>Register as a voter by providing your personal details and verifying your identity.</li>
                <li className='bg-[#eff7ff] p-4 text-xl rounded-xl'>Complete the identity verification process using a government-approved ID.</li>
                <li className='bg-[#eff7ff] p-4 text-xl rounded-xl'>Once verified, you will receive access credentials to the voting portal.</li>
                <li className='bg-[#eff7ff] p-4 text-xl rounded-xl'>Log in to the secure voting page and view the list of candidates.</li>
                <li className='bg-[#eff7ff] p-4 text-xl rounded-xl'>Cast your vote for your preferred government party.</li>
                <li className='bg-[#eff7ff] p-4 text-xl rounded-xl'>Confirm your selection to securely submit your vote.</li>
                <li className='bg-[#eff7ff] p-4 text-xl rounded-xl'>After voting, you can track the election results and verify your vote was counted.</li>
              </ol>
            </div>
          </div>

      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='bg-[#e6e0ff] w-full h-[400px] rounded-3xl p-5 flex items-center pl-24'>
          <div className='w-[35%] h-full flex justify-center items-center'>
            <img src={aboutImg3} className='h-[300px]' alt='' title='India International Institute of Democracy and Election Management'/>
          </div>
          <div className='max-w-[60%] h-full flex flex-col gap-4 justify-center'>
            <h1 className='text-xl font-medium text-gray-800 tracking-wide'>
              India International Institute of Democracy and Election Management
            </h1>
            <p className='text-gray-700 font-normal text-[15.5px]'>
              The Election Commission of India (ECI), established the India International Institute of Democracy and Election Management (IIIDEM) to advance its professional competence in election management, promote peoples participation, contribute to developing stronger democratic institutions and support the efforts of ECI in carrying out its mandate and functions.
            </p>
            <p className='text-gray-700 font-normal text-[15.5px]'>
              Over the last six decades, the structure and functions of the Election Commission have undergone major changes and thus the management of elections has become increasingly complex. A rapid transformation in social context and reality, rising number of political parties, changing dynamics and demands of coalitions and alliances, frequent elections and bye-elections, increase in number of eligible voters and continuous updating of electoral rolls have led to new challenges for election management bodies of today.
            </p>
          </div>
        </div>

        Updated Platform Section

        <div className="bg-gradient-to-b from-[#033062] to-[#02258b] w-[95%] p-4 rounded-3xl text-white 
        flex items-center h-[400px] relative bottom-10 justify-around">
          <div className="max-w-[55%]">
            <div className="mb-6 ml-10">
              <h3 className="text-2xl mb-4 font-semibold">Secure Digital Democracy Platform</h3>
              <p className="text-[15px] leading-relaxed text-gray-200">
                DigiVote is India's pioneering blockchain-based e-voting platform, designed to revolutionize 
                the way citizens participate in democracy. Our system combines cutting-edge technology with 
                user-friendly interfaces to ensure secure, transparent, and accessible voting for all. 
                Since our inception, we have been committed to modernizing the electoral process while 
                maintaining the highest standards of security and voter privacy.
              </p>
              <p className="text-[15px] leading-relaxed mt-4 text-gray-200">
                Our platform features advanced encryption, multi-factor authentication, and real-time 
                vote verification, making it a reliable solution for both voters and election administrators. 
                By eliminating geographical barriers and reducing administrative overhead, DigiVote is 
                making democracy more accessible and efficient for everyone.
              </p>
            </div>
          </div>
          <div className='group overflow-hidden rounded-2xl cursor-grab'>
            <img
              src={Pic1}
              alt="Secure Voting"
              className="w-full rounded-lg object-cover h-[275px] transform transition duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>



      <VoterRights
        isOpen={isVoterRightsOpen} 
        onClose={() => setIsVoterRightsOpen(false)} 
      />

      <FAQPopup
        isOpen={isFAQOpen}
        onClose={() => setIsFAQOpen(false)}
      />

    </div>
  )
}

export default Main;