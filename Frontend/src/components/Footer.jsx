import React from 'react';
import { Link } from "react-router-dom";
import footerlogo from '../Assets/footerlogo.svg';
import { IoLocationSharp } from "react-icons/io5";
import ticket24 from '../Assets/ticket24.png';
import eci1 from '../Assets/eci1.png';
import eci2 from '../Assets/eci2.png';
import eci3 from '../Assets/eci3.png';
import eci4 from '../Assets/eci4.png';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "../LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className='bg-[#004274]'>
      <div className='flex gap-10 p-5 '>
          <div className='bg-[#003863] h-[300px] w-[350px] rounded-xl px-4 py-5 text-white flex flex-col gap-2'>
            <div>
              <h1 className='text-xl font-medium'>{language === 'en' ? 'Election Commission Of India' : 'भारत का चुनाव आयोग'}</h1>
            </div>
            <div className='border-b-[#00aeef] border-b-2 rounded-xl w-12'></div>
            <div className='flex gap-4'>
              <div className='w-[30%] flex justify-center items-center'>
                <img src={footerlogo} alt="footerlogo" className=''/>
              </div>
              <p className='text-[10px] w-[50%] text-[#ace8fe]'>{language === 'en' ? 'The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India. The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India, and the offices of the President and Vice President in the country.' : 'भारत का चुनाव आयोग भारत में चुनाव प्रक्रियाओं का संचालन करने के लिए जिम्मेदार एक स्वायत्त संवैधानिक प्राधिकरण है। यह निकाय भारत में लोकसभा, राज्यसभा, राज्य विधानसभाओं और देश में राष्ट्रपति और उपराष्ट्रपति के कार्यालयों के चुनावों का संचालन करता है।'}</p>
            </div>
            <div className='flex justify-center'>
              <IoLocationSharp className='text-[#ace8fe] text-lg pt-[5px]' />
              <span className='text-[#ace8fe] font-medium'>
                {language === 'en' ? 'Nirvachan Sadan, Ashoka Road, New Delhi 110001' : 'निर्वाचन सदन, अशोक रोड, नई दिल्ली 110001'}
              </span>
            </div>
          </div>
          <div className='h-[300px] w-[200px] rounded-xl'>
            <img src={ticket24} alt="ticket24" className=' h-[80%]' />
          </div>
          <div className='h-[300px] w-[600px] rounded-xl p-3 flex flex-col gap-2'>
              <h1 className='text-xl font-medium text-white'>{language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}</h1>
              <div className='border-b-[#00aeef] border-b-2 rounded-xl w-12'></div>
              <div className='flex gap-10 text-white mt-2 ml-4'>
                  <div className='flex flex-col gap-1 text-sm text-[#ace8fe] marker:text-[#00aeef]'>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'Home' : 'होम'}</Link>
                      <Link to='/parties' className='list-item tracking-wide'>{language === 'en' ? 'Parties' : 'पार्टियां'}</Link>
                      <Link to='/vote' className='list-item tracking-wide'>{language === 'en' ? 'Vote Now' : 'अभी वोट करें'}</Link>
                      <Link to='/results' className='list-item tracking-wide'>{language === 'en' ? 'Results' : 'परिणाम'}</Link>
                      <Link to='/about' className='list-item tracking-wide'>{language === 'en' ? 'Resources' : 'संसाधन'}</Link>
                  </div>
                  <div className='flex flex-col gap-1 text-sm text-[#ace8fe] marker:text-[#00aeef]'>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'About ECI' : 'ईसीआई के बारे में'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'Directory' : 'निर्देशिका'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'Contact Us' : 'संपर्क करें'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'Public Grievance' : 'सार्वजनिक शिकायत'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'RTI Online' : 'आरटीआई ऑनलाइन'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'eOffice' : 'ईऑफिस'}</Link>
                  </div>
                  <div className='flex flex-col gap-1 text-sm text-[#ace8fe] marker:text-[#00aeef]'>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'International Cooperation' : 'अंतर्राष्ट्रीय सहयोग'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'India A-WEB Centre' : 'इंडिया ए-वेब सेंटर'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'VoiceNet' : 'वॉयसनेट'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'MCC Cases' : 'एमसीसी मामले'}</Link>
                      <Link to='/' className='list-item tracking-wide'>{language === 'en' ? 'Political Parties Registration' : 'राजनीतिक दल पंजीकरण'}</Link>
                  </div>
              </div>
          </div>
          <div className='h-[300px] w-[300px] rounded-xl p-3 flex flex-col gap-2'>
            <div>
                <h1 className='text-xl font-medium text-white'>{language === 'en' ? 'ECI Apps Links' : 'ईसीआई ऐप्स लिंक'}</h1>
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
        <p>&copy; 2025 {language === 'en' ? 'Government E-Voting Portal. All rights reserved.' : 'सरकारी ई-वोटिंग पोर्टल। सर्वाधिकार सुरक्षित।'}</p>
      </footer>
    </div>
  );
};

export default Footer;