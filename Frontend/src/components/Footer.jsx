import React from 'react'
import { Link } from "react-router-dom"
import footerlogo from '../Assets/footerlogo.svg'
import { IoLocationSharp } from "react-icons/io5";
import ticket24 from '../Assets/ticket24.png'
import eci1 from '../Assets/eci1.png'
import eci2 from '../Assets/eci2.png'
import eci3 from '../Assets/eci3.png'
import eci4 from '../Assets/eci4.png'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#004274]'>
      <div className='flex gap-10 p-5 '>
          <div className='bg-[#003863] h-[300px] w-[350px] rounded-xl px-4 py-5 text-white flex flex-col gap-2'>
            <div>
              <h1 className='text-xl font-medium'>Election Commission Of India</h1>
            </div>
            <div className='border-b-[#00aeef] border-b-2 rounded-xl w-12'></div>
            <div className='flex gap-4'>
              <div className='w-[30%] flex justify-center items-center'>
                <img src={footerlogo} alt="footerlogo" className=''/>
              </div>
              <p className='text-[10px] w-[50%] text-[#ace8fe]'>The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India. The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India, and the offices of the President and Vice President in the country.</p>
            </div>
            <div className='flex justify-center'>
              <IoLocationSharp className='text-[#ace8fe] text-lg pt-[5px]' />
              <span className='text-[#ace8fe] font-medium'>
                Nirvachan Sadan, Ashoka Road, New Delhi 110001
              </span>
            </div>
          </div>
          <div className='h-[300px] w-[200px] rounded-xl'>
            <img src={ticket24} alt="ticket24" className=' h-[80%]' />
          </div>
          <div className='h-[300px] w-[600px] rounded-xl p-3 flex flex-col gap-2'>
              <h1 className='text-xl font-medium text-white'>Quick Links</h1>
              <div className='border-b-[#00aeef] border-b-2 rounded-xl w-12'></div>
              <div className='flex gap-10 text-white mt-2 ml-4'>
                  <div className='flex flex-col gap-1 text-sm text-[#ace8fe] marker:text-[#00aeef]'>
                      <Link to='/' className='list-item tracking-wide'>Home</Link>
                      <Link to='/parties' className='list-item tracking-wide'>Parties</Link>
                      <Link to='/vote' className='list-item tracking-wide'>Vote Now</Link>
                      <Link to='/results' className='list-item tracking-wide'>Results</Link>
                      <Link to='/survey' className='list-item tracking-wide'>Survey</Link>
                      <Link to='/survey' className='list-item tracking-wide'>Resources</Link>
                  </div>
                  <div className='flex flex-col gap-1 text-sm text-[#ace8fe] marker:text-[#00aeef]'>
                      <Link to='/' className='list-item tracking-wide'>About ECI</Link>
                      <Link to='/' className='list-item tracking-wide'>Directory</Link>
                      <Link to='/' className='list-item tracking-wide'>Contact Us</Link>
                      <Link to='/' className='list-item tracking-wide'>Public Grievance</Link>
                      <Link to='/' className='list-item tracking-wide'>RTI Online</Link>
                      <Link to='/' className='list-item tracking-wide'>eOffice</Link>
                  </div>
                  <div className='flex flex-col gap-1 text-sm text-[#ace8fe] marker:text-[#00aeef]'>
                      <Link to='/' className='list-item tracking-wide'>International Cooperation</Link>
                      <Link to='/' className='list-item tracking-wide'>India A-WEB Centre</Link>
                      <Link to='/' className='list-item tracking-wide'>VoiceNet</Link>
                      <Link to='/' className='list-item tracking-wide'>MCC Cases</Link>
                      <Link to='/' className='list-item tracking-wide'>Political Parties Registration</Link>
                  </div>
              </div>
          </div>
          <div className='h-[300px] w-[300px] rounded-xl p-3 flex flex-col gap-2'>
            <div>
                <h1 className='text-xl font-medium text-white'>ECI Apps Links</h1>
              </div>
            <div className='border-b-[#00aeef] border-b-2 rounded-xl w-12'></div>
            <div className='flex flex-col gap-4 text-white mt-2'>
              <div className='flex gap-4'>
                <Link to="https://www.eci.gov.in/voter-helpline-app">
                  <img src={eci1} className='h-20' alt=''/>
                </Link>
                <Link to="https://www.eci.gov.in/saksham-app">
                  <img src={eci2} className='h-20' alt=''/>
                </Link>
              </div>
              <div className='flex gap-4'>
              <Link to='https://www.eci.gov.in/kyc-ict-app'>
                <img src={eci3} className='h-20' alt=''/>
              </Link>
              <Link to='https://www.eci.gov.in/cvigil-app'>
                <img src={eci4} className='h-20' alt=''/>
              </Link>
              </div>
            </div>
          </div>
      </div>
      <div className='border-b-gray-200/20 border-b w-[98%] mx-auto'></div>
      <div className='flex gap-2 py-4 px-4'>
        <Link to='https://www.facebook.com/ECI/'>
          <FaFacebookF fill='#ace8fe' size={30} className='cursor-pointer hover:fill-white transition duration-300 ease-in-out'/>
        </Link>
        <Link to='https://www.instagram.com/ecisveep/'>
          <FaInstagram fill='#ace8fe' size={30} className='cursor-pointer hover:fill-white transition duration-300 ease-in-out'/>
        </Link>
        <Link to='https://x.com/SpokespersonECI'>
          <FaXTwitter fill='#ace8fe' size={30} className='cursor-pointer hover:fill-white transition duration-300 ease-in-out'/>
        </Link>
        <Link to='https://www.youtube.com/eci'>
          <FaYoutube fill='#ace8fe' size={30} className='cursor-pointer hover:fill-white transition duration-300 ease-in-out'/>
        </Link>
      </div>
      <div className='border-b-gray-200/20 border-b w-[98%] mx-auto'></div>
      <footer className="bg-[#004274] py-4 text-center text-white">
        <p>&copy; 2025 Government E-Voting Portal. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer