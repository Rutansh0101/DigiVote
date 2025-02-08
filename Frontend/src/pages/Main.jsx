import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
  const { language } = useLanguage();

  const text = {
    en: {
      welcome: "Welcome to DigiVote India",
      empowering: "Empowering Democracy, One Click at a Time!",
      description: "Voting is the cornerstone of a thriving democracy, ensuring that every citizen has a voice in shaping the nation’s future. As India continues to grow as the world’s largest democracy, it is crucial to make the electoral process secure, transparent, and accessible to all. DigiVote is a next-generation online voting platform designed to enhance electoral participation, streamline voting procedures, and eliminate fraud. By integrating advanced security measures, we aim to provide a fair, efficient, and reliable voting system for all eligible voters, including those in remote areas, overseas, and underserved communities.",
      voterEducation: "Voter Education",
      knowYourRights: "Know Your Rights",
      rightsDescription: "Learn about your voting rights and responsibilities as an Indian citizen.",
      readMore: "Read More",
      partiesInformation: "Parties Information",
      partiesDescription: "Get to know the candidates running in your constituency.",
      viewParties: "View Parties",
      faqs: "FAQs",
      faqsDescription: "Find answers to commonly asked questions about the voting process.",
      viewFaqs: "View FAQs",
      benefits: "Benefits of E-Voting",
      security: "Security & Transparency",
      securityDescription: "Blockchain technology ensures that votes are encrypted, tamper-proof, and traceable, eliminating fraudulent activities.",
      accessibility: "Accessibility for All",
      accessibilityDescription: "Voters from remote locations, overseas citizens, and individuals with disabilities can cast their votes conveniently.",
      quickResults: "Quick & Accurate Results",
      quickResultsDescription: "Automated vote counting speeds up result announcements and reduces human errors.",
      ecoFriendly: "Eco-Friendly & Cost-Effective",
      ecoFriendlyDescription: "Reduces paper wastage and administrative costs, making the voting process more efficient.",
      howToVote: "How to Vote",
      steps: [
        "Register as a voter by providing your personal details and verifying your identity.",
        "Complete the identity verification process using a government-approved ID.",
        "Once verified, you will receive access credentials to the voting portal.",
        "Log in to the secure voting page and view the list of candidates.",
        "Cast your vote for your preferred government party.",
        "Confirm your selection to securely submit your vote.",
        "After voting, you can track the election results and verify your vote was counted."
      ],
      about: "India International Institute of Democracy and Election Management",
      aboutDescription1: "The Election Commission of India (ECI), established the India International Institute of Democracy and Election Management (IIIDEM) to advance its professional competence in election management, promote peoples participation, contribute to developing stronger democratic institutions and support the efforts of ECI in carrying out its mandate and functions.",
      aboutDescription2: "Over the last six decades, the structure and functions of the Election Commission have undergone major changes and thus the management of elections has become increasingly complex. A rapid transformation in social context and reality, rising number of political parties, changing dynamics and demands of coalitions and alliances, frequent elections and bye-elections, increase in number of eligible voters and continuous updating of electoral rolls have led to new challenges for election management bodies of today.",
      platform: "Secure Digital Democracy Platform",
      platformDescription1: "DigiVote is India's pioneering blockchain-based e-voting platform, designed to revolutionize the way citizens participate in democracy. Our system combines cutting-edge technology with user-friendly interfaces to ensure secure, transparent, and accessible voting for all. Since our inception, we have been committed to modernizing the electoral process while maintaining the highest standards of security and voter privacy.",
      platformDescription2: "Our platform features advanced encryption, multi-factor authentication, and real-time vote verification, making it a reliable solution for both voters and election administrators. By eliminating geographical barriers and reducing administrative overhead, DigiVote is making democracy more accessible and efficient for everyone."
    },
    hi: {
      welcome: "डिजीवोट इंडिया में आपका स्वागत है",
      empowering: "लोकतंत्र को सशक्त बनाना, एक क्लिक में!",
      description: "मतदान एक समृद्ध लोकतंत्र का आधार है, यह सुनिश्चित करता है कि हर नागरिक के पास राष्ट्र के भविष्य को आकार देने में एक आवाज हो। जैसे-जैसे भारत दुनिया का सबसे बड़ा लोकतंत्र बनता जा रहा है, यह महत्वपूर्ण है कि चुनावी प्रक्रिया को सुरक्षित, पारदर्शी और सभी के लिए सुलभ बनाया जाए। डिजीवोट एक अगली पीढ़ी का ऑनलाइन मतदान प्लेटफॉर्म है जिसे चुनावी भागीदारी बढ़ाने, मतदान प्रक्रियाओं को सुव्यवस्थित करने और धोखाधड़ी को समाप्त करने के लिए डिज़ाइन किया गया है। उन्नत सुरक्षा उपायों को एकीकृत करके, हम सभी पात्र मतदाताओं के लिए एक निष्पक्ष, कुशल और विश्वसनीय मतदान प्रणाली प्रदान करने का लक्ष्य रखते हैं, जिसमें दूरदराज के क्षेत्रों, विदेशों और वंचित समुदायों के लोग शामिल हैं।",
      voterEducation: "मतदाता शिक्षा",
      knowYourRights: "अपने अधिकार जानें",
      rightsDescription: "भारतीय नागरिक के रूप में अपने मतदान अधिकारों और जिम्मेदारियों के बारे में जानें।",
      readMore: "और पढ़ें",
      partiesInformation: "पार्टियों की जानकारी",
      partiesDescription: "अपने निर्वाचन क्षेत्र में चल रहे उम्मीदवारों के बारे में जानें।",
      viewParties: "पार्टियों को देखें",
      faqs: "सामान्य प्रश्न",
      faqsDescription: "मतदान प्रक्रिया के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर पाएं।",
      viewFaqs: "सामान्य प्रश्न देखें",
      benefits: "ई-मतदान के लाभ",
      security: "सुरक्षा और पारदर्शिता",
      securityDescription: "ब्लॉकचेन तकनीक यह सुनिश्चित करती है कि वोट एन्क्रिप्टेड, छेड़छाड़-प्रूफ और ट्रेस करने योग्य हैं, जिससे धोखाधड़ी की गतिविधियों को समाप्त किया जा सके।",
      accessibility: "सभी के लिए सुलभता",
      accessibilityDescription: "दूरस्थ स्थानों, विदेशों में नागरिकों और विकलांग व्यक्तियों के मतदाता आसानी से अपने वोट डाल सकते हैं।",
      quickResults: "त्वरित और सटीक परिणाम",
      quickResultsDescription: "स्वचालित वोट गिनती परिणाम घोषणाओं को तेज करती है और मानव त्रुटियों को कम करती है।",
      ecoFriendly: "पर्यावरण के अनुकूल और किफायती",
      ecoFriendlyDescription: "कागज की बर्बादी और प्रशासनिक लागत को कम करता है, जिससे मतदान प्रक्रिया अधिक कुशल हो जाती है।",
      howToVote: "कैसे वोट करें",
      steps: [
        "अपने व्यक्तिगत विवरण प्रदान करके और अपनी पहचान सत्यापित करके एक मतदाता के रूप में पंजीकरण करें।",
        "सरकार द्वारा अनुमोदित आईडी का उपयोग करके पहचान सत्यापन प्रक्रिया को पूरा करें।",
        "एक बार सत्यापित होने के बाद, आपको मतदान पोर्टल तक पहुंच क्रेडेंशियल प्राप्त होंगे।",
        "सुरक्षित मतदान पृष्ठ में लॉग इन करें और उम्मीदवारों की सूची देखें।",
        "अपने पसंदीदा सरकारी पार्टी के लिए अपना वोट डालें।",
        "अपने चयन की पुष्टि करें ताकि आपका वोट सुरक्षित रूप से जमा हो सके।",
        "मतदान के बाद, आप चुनाव परिणामों को ट्रैक कर सकते हैं और सत्यापित कर सकते हैं कि आपका वोट गिना गया था।"
      ],
      about: "भारत अंतर्राष्ट्रीय लोकतंत्र और चुनाव प्रबंधन संस्थान",
      aboutDescription1: "भारत के चुनाव आयोग (ईसीआई) ने चुनाव प्रबंधन में अपनी पेशेवर क्षमता को आगे बढ़ाने, लोगों की भागीदारी को बढ़ावा देने, मजबूत लोकतांत्रिक संस्थानों के विकास में योगदान करने और अपने जनादेश और कार्यों को पूरा करने में ईसीआई के प्रयासों का समर्थन करने के लिए भारत अंतर्राष्ट्रीय लोकतंत्र और चुनाव प्रबंधन संस्थान (आईआईआईडीईएम) की स्थापना की।",
      aboutDescription2: "पिछले छह दशकों में, चुनाव आयोग की संरचना और कार्यों में बड़े बदलाव हुए हैं और इस प्रकार चुनावों का प्रबंधन तेजी से जटिल हो गया है। सामाजिक संदर्भ और वास्तविकता में तेजी से परिवर्तन, राजनीतिक दलों की बढ़ती संख्या, गठबंधनों और गठबंधनों की बदलती गतिशीलता और मांगें, बार-बार चुनाव और उपचुनाव, पात्र मतदाताओं की संख्या में वृद्धि और मतदाता सूची का निरंतर अद्यतन आज के चुनाव प्रबंधन निकायों के लिए नई चुनौतियां पैदा कर रहे हैं।",
      platform: "सुरक्षित डिजिटल लोकतंत्र मंच",
      platformDescription1: "डिजीवोट भारत का अग्रणी ब्लॉकचेन-आधारित ई-मतदान मंच है, जिसे नागरिकों की लोकतंत्र में भागीदारी के तरीके में क्रांति लाने के लिए डिज़ाइन किया गया है। हमारा सिस्टम सभी के लिए सुरक्षित, पारदर्शी और सुलभ मतदान सुनिश्चित करने के लिए अत्याधुनिक तकनीक को उपयोगकर्ता के अनुकूल इंटरफेस के साथ जोड़ता है। हमारी स्थापना के बाद से, हम उच्चतम सुरक्षा मानकों और मतदाता गोपनीयता को बनाए रखते हुए चुनावी प्रक्रिया को आधुनिक बनाने के लिए प्रतिबद्ध हैं।",
      platformDescription2: "हमारे मंच में उन्नत एन्क्रिप्शन, बहु-कारक प्रमाणीकरण और वास्तविक समय वोट सत्यापन की सुविधा है, जिससे यह मतदाताओं और चुनाव प्रशासकों दोनों के लिए एक विश्वसनीय समाधान बन जाता है। भौगोलिक बाधाओं को समाप्त करके और प्रशासनिक ओवरहेड को कम करके, डिजीवोट लोकतंत्र को सभी के लिए अधिक सुलभ और कुशल बना रहा है।"
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow mx-5 px-4 py-8">
        <div className='flex mb-10 h-fit bg-white rounded-xl justify-around min-h-[600px] items-center'>
          <div className='p-6 flex flex-col w-[50%] h-full justify-center'>
            <h1 className="text-6xl font-bold mb-4 text-gray-700">{text[language].welcome}</h1>
            <p className="text-lg mb-3 font-medium text-gray-600">{text[language].empowering}</p>
            <p className='text-gray-500'>{text[language].description}</p>
          </div>
          <div className='w-[500px]'>
            <img src={VoteForIndia} alt="Voting" className="w-full bg-transparent"/>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 p-10 pb-14 w-screen -ml-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-600 text-center">{text[language].voterEducation}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer" onClick={() => setIsVoterRightsOpen(true)}>
              <img src={rights} className='rounded-xl py-8' alt='rights'/>
              <h3 className="text-xl font-semibold mb-4">{text[language].knowYourRights}</h3>
              <p className="mb-4">{text[language].rightsDescription}</p>
              <button className="text-blue-600 hover:underline">{text[language].readMore}</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer" onClick={() => navigate('/parties')}>
              <img src={parties} className='rounded-xl' alt='parties'/>
              <h3 className="text-xl font-semibold mb-4">{text[language].partiesInformation}</h3>
              <p className="mb-4">{text[language].partiesDescription}</p>
              <Link to="/parties" className="text-blue-600 hover:underline">{text[language].viewParties}</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer" onClick={() => setIsFAQOpen(true)}>
              <img src={Faq} className='rounded-xl' alt=''/>
              <h3 className="text-xl font-semibold mb-4">{text[language].faqs}</h3>
              <p className="mb-4">{text[language].faqsDescription}</p>
              <button className="text-blue-600 hover:underline">{text[language].viewFaqs}</button>
            </div>
          </div>
        </div>

        <div className="my-32 mt-28">
          <h2 className="text-4xl font-bold mb-14 text-center text-gray-600">{text[language].benefits}</h2>
          <div className='flex justify-center items-center'>
            <div className="grid md:grid-cols-2 gap-8 w-[75%]">
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b3} className='h-10' alt=''/>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">{text[language].security}</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>{text[language].securityDescription}</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b2} className='h-10' alt=''/>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">{text[language].accessibility}</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>{text[language].accessibilityDescription}</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b1} className='h-10' alt=''/>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">{text[language].quickResults}</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>{text[language].quickResultsDescription}</p>
              </div>
              <div className="bg-[#e5e5e5] p-14 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className='flex items-center m-3 gap-3'>
                  <img src={b4} className='h-10' alt=''/>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">{text[language].ecoFriendly}</h3>
                </div>
                <p className='ml-3 mt-7 text-gray-600'>{text[language].ecoFriendlyDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold my-14 text-center text-gray-600">{text[language].howToVote}</h2>
        <div className='flex justify-center items-center'>
          <div className="bg-[#ffffff] p-6 rounded-lg shadow-md border w-[75%]">
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              {text[language].steps.map((step, index) => (
                <li key={index} className='bg-[#eff7ff] p-4 text-xl rounded-xl'>{step}</li>
              ))}
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

        <div className="bg-gradient-to-b from-[#033062] to-[#02258b] w-[95%] p-4 rounded-3xl text-white 
        flex items-center h-[400px] relative bottom-10 justify-around">
          <div className="max-w-[55%]">
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
  )
}

export default Main;