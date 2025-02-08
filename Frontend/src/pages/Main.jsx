import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import VoterRights from '../components/VoterRights';
import FAQPopup from '../components/FAQPopup';
import VoteForIndia from '../Assets/VoteForIndia.png';
import aboutImg3 from '../Assets/aboutImg3.png';
import b1 from '../Assets/benefits/b1.png';
import b2 from '../Assets/benefits/b2.png';
import b3 from '../Assets/benefits/b3.png';
import b4 from '../Assets/benefits/b4.png';
import rights from '../Assets/voterEdu/rights.jpg';
import Faq from '../Assets/voterEdu/Faq.jpg';
import parties from '../Assets/voterEdu/parties.png';
import Pic1 from '../Assets/Pic1.jpg';
import { useLanguage } from '../LanguageContext';

const Main = () => {
  const [isVoterRightsOpen, setIsVoterRightsOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();

  const text = {
    en: {
      welcome: "Welcome to DigiVote India",
      empowering: "Empowering Democracy, One Click at a Time!",
      description: "Voting is the cornerstone of a thriving democracy...",
      voterEducation: "Voter Education",
      knowYourRights: "Know Your Rights",
      rightsDescription: "Learn about your voting rights...",
      readMore: "Read More",
      partiesInformation: "Parties Information",
      partiesDescription: "Get to know the candidates running...",
      viewParties: "View Parties",
      faqs: "FAQs",
      faqsDescription: "Find answers to commonly asked questions...",
      viewFaqs: "View FAQs",
      benefits: "Benefits of E-Voting",
      security: "Security & Transparency",
      securityDescription: "Blockchain technology ensures votes...",
      accessibility: "Accessibility for All",
      accessibilityDescription: "Voters from remote locations...",
      quickResults: "Quick & Accurate Results",
      quickResultsDescription: "Automated vote counting speeds up...",
      ecoFriendly: "Eco-Friendly & Cost-Effective",
      ecoFriendlyDescription: "Reduces paper wastage and...",
      howToVote: "How to Vote",
      steps: [
        "Register as a voter by providing your personal details...",
        "Complete the identity verification process...",
        "Receive access credentials to the voting portal.",
        "Log in to the secure voting page...",
        "Cast your vote for your preferred government party.",
        "Confirm your selection to securely submit your vote.",
        "Track election results and verify your vote."
      ],
      about: "India International Institute of Democracy...",
      aboutDescription1: "The Election Commission of India (ECI)...",
      aboutDescription2: "The management of elections has become complex...",
      platform: "Secure Digital Democracy Platform",
      platformDescription1: "DigiVote is India's pioneering blockchain...",
      platformDescription2: "Our platform features advanced encryption...",
    },
    hi: {
      welcome: "डिजीवोट इंडिया में आपका स्वागत है",
      empowering: "लोकतंत्र को सशक्त बनाना, एक क्लिक में!",
      description: "मतदान एक समृद्ध लोकतंत्र का आधार है...",
      voterEducation: "मतदाता शिक्षा",
      knowYourRights: "अपने अधिकार जानें",
      rightsDescription: "भारतीय नागरिक के रूप में अपने मतदान अधिकारों...",
      readMore: "और पढ़ें",
      partiesInformation: "पार्टियों की जानकारी",
      partiesDescription: "अपने निर्वाचन क्षेत्र में चल रहे...",
      viewParties: "पार्टियों को देखें",
      faqs: "सामान्य प्रश्न",
      faqsDescription: "मतदान प्रक्रिया के बारे में अक्सर पूछ...",
      viewFaqs: "सामान्य प्रश्न देखें",
      benefits: "ई-मतदान के लाभ",
      security: "सुरक्षा और पारदर्शिता",
      securityDescription: "ब्लॉकचेन तकनीक यह सुनिश्चित करती है...",
      accessibility: "सभी के लिए सुलभता",
      accessibilityDescription: "दूरस्थ स्थानों, विदेशों में नागरिकों...",
      quickResults: "त्वरित और सटीक परिणाम",
      quickResultsDescription: "स्वचालित वोट गिनती परिणाम घोषणाओं...",
      ecoFriendly: "पर्यावरण के अनुकूल और किफायती",
      ecoFriendlyDescription: "कागज की बर्बादी और प्रशासनिक लागत...",
      howToVote: "कैसे वोट करें",
      steps: [
        "अपने व्यक्तिगत विवरण प्रदान करके एक मतदाता के रूप...",
        "सरकार द्वारा अनुमोदित आईडी का उपयोग...",
        "एक बार सत्यापित होने के बाद, आपको मतदान पोर्टल...",
        "सुरक्षित मतदान पृष्ठ में लॉग इन करें...",
        "अपने पसंदीदा सरकारी पार्टी के लिए अपना वोट डालें...",
        "अपने चयन की पुष्टि करें ताकि आपका वोट...",
        "मतदान के बाद, आप चुनाव परिणामों को ट्रैक कर सकते हैं..."
      ],
      about: "भारत अंतर्राष्ट्रीय लोकतंत्र और चुनाव प्रबंधन संस्थान",
      aboutDescription1: "भारत के चुनाव आयोग ने चुनाव प्रबंधन में...",
      aboutDescription2: "पिछले छह दशकों में, चुनाव आयोग की संरचना...",
      platform: "सुरक्षित डिजिटल लोकतंत्र मंच",
      platformDescription1: "डिजीवोट भारत का अग्रणी ब्लॉकचेन-आधारित...",
      platformDescription2: "हमारे मंच में उन्नत एन्क्रिप्शन, बहु-कारक...",
    }
  };

  // Handle smooth scrolling for the "How to Vote" section
  useEffect(() => {
    if (location.hash === "#how-to-vote") {
      const element = document.getElementById("how-to-vote");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow mx-5 px-4 py-8">
        <div className='flex flex-col md:flex-row mb-10 bg-white rounded-xl justify-around h-auto md:h-[600px] items-center'>
          <div className='p-6 flex flex-col w-full md:w-[50%] h-full justify-center'>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 text-gray-700">{text[language].welcome}</h1>
            <p className="text-lg mb-3 font-medium text-gray-600">{text[language].empowering}</p>
            <p className='text-gray-500'>{text[language].description}</p>
          </div>
          <div className='w-full md:w-[500px]'>
            <img src={VoteForIndia} alt="Voting" className="w-full bg-transparent" />
          </div>
        </div>

        <div className="mt-12 bg-gray-100 p-10 pb-14 w-full">
          <h2 className="text-3xl font-bold mb-6 text-gray-600 text-center">{text[language].voterEducation}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer" onClick={() => setIsVoterRightsOpen(true)}>
              <img src={rights} className='rounded-xl py-8' alt='rights' />
              <h3 className="text-xl font-semibold mb-4">{text[language].knowYourRights}</h3>
              <p className="mb-4">{text[language].rightsDescription}</p>
              <button className="text-blue-600 hover:underline">{text[language].readMore}</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer" onClick={() => navigate('/parties')}>
              <img src={parties} className='rounded-xl' alt='parties' />
              <h3 className="text-xl font-semibold mb-4">{text[language].partiesInformation}</h3>
              <p className="mb-4">{text[language].partiesDescription}</p>
              <Link to="/parties" className="text-blue-600 hover:underline">{text[language].viewParties}</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer" onClick={() => setIsFAQOpen(true)}>
              <img src={Faq} className='rounded-xl' alt='' />
              <h3 className="text-xl font-semibold mb-4">{text[language].faqs}</h3>
              <p className="mb-4">{text[language].faqsDescription}</p>
              <button className="text-blue-600 hover:underline">{text[language].viewFaqs}</button>
            </div>
          </div>
        </div>

        <div className="my-32 mt-28">
          <h2 className="text-4xl font-bold mb-14 text-center text-gray-600">{text[language].benefits}</h2>
          <div className='flex justify-center items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-[75%]">
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b3} className='h-10' alt='' />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">{text[language].security}</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>{text[language].securityDescription}</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b2} className='h-10' alt='' />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">{text[language].accessibility}</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>{text[language].accessibilityDescription}</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b1} className='h-10' alt='' />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">{text[language].quickResults}</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>{text[language].quickResultsDescription}</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b4} className='h-10' alt='' />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">{text[language].ecoFriendly}</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>{text[language].ecoFriendlyDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <h2 id="how-to-vote" className="text-4xl font-bold my-14 text-center text-gray-600">{text[language].howToVote}</h2>
        <div className='flex justify-center items-center'>
          <div className="bg-[#ffffff] p-6 rounded-lg shadow-md border w-full md:w-[75%]">
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              {text[language].steps.map((step, index) => (
                <li key={index} className='bg-[#eff7ff] p-4 text-xl rounded-xl'>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='bg-[#e6e0ff] w-full h-auto md:h-[400px] rounded-3xl p-5 flex flex-col md:flex-row items-center md:pl-24'>
          <div className='w-full md:w-[35%] h-full flex justify-center items-center'>
            <img src={aboutImg3} className='h-[300px]' alt='' title='India International Institute of Democracy and Election Management' />
          </div>
          <div className='max-w-full md:max-w-[60%] h-full flex flex-col gap-4 justify-center'>
            <h1 className='text-xl font-medium text-gray-800 tracking-wide'>
              {text[language].about}
            </h1>
            <p className='text-gray-700 font-normal text-[15.5px]'>
              {text[language].aboutDescription1}
            </p>
            <p className='text-gray-700 font-normal text-[15.5px]'>
              {text[language].aboutDescription2}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#033062] to-[#02258b] w-full md:w-[95%] p-4 rounded-3xl text-white 
        flex flex-col md:flex-row items-center h-auto md:h-[400px] relative bottom-10 justify-around">
          <div className="max-w-full md:max-w-[55%]">
            <div className="mb-6 ml-10">
              <h3 className="text-2xl mb-4 font-semibold">{text[language].platform}</h3>
              <p className="text-[15px] leading-relaxed text-gray-200">
                {text[language].platformDescription1}
              </p>
              <p className="text-[15px] leading-relaxed mt-4 text-gray-200">
                {text[language].platformDescription2}
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
  );
}

export default Main;