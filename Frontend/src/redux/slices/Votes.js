import { createSlice } from "@reduxjs/toolkit";
import BjpLogo from "../../Assets/partyLogos/BjpLogo.png";
import Aap from "../../Assets/Aap.jpg";
import Congress from "../../Assets/Congress.jpeg";
import PNP from "../../Assets/PNP.jpeg";
import Cpi from "../../Assets/partyLogos/Cpi.png";
import Bsp from "../../Assets/partyLogos/Bsp.jpg";
import Modi from "../../Assets/partyLeaders/Modi.jpg";
import Arvind from "../../Assets/partyLeaders/Arvind.jpg";
import Rahul from "../../Assets/partyLeaders/Rahul.jpg";
import Conrad from "../../Assets/partyLeaders/Conrad.jpg";
import Sitaram from "../../Assets/partyLeaders/Sitaram.jpg";
import Mayawati from "../../Assets/partyLeaders/Mayawati.jpg";

const Votes = createSlice({
  name: "votes",
  initialState: [
    // adding hindi names after slash:
    {
      id: 1,
      name: "Bharatiya Janata Party / भारतीय जनता पार्टी",
      party: BjpLogo,
      votes: 0,
      leader: "Narendra Modi",
      leaderPhoto: Modi,
      description:
        "The Bharatiya Janata Party (BJP) is India’s largest political party in terms of parliamentary representation and membership. It was founded on 6 April 1980 as a successor to the Bharatiya Jana Sangh, which was established in 1951 by Dr. Syama Prasad Mukherjee. The party is closely associated with the Rashtriya Swayamsevak Sangh (RSS) and follows an ideology of Hindutva, nationalism, and right-wing politics. BJP first gained national prominence in the 1990s under Atal Bihari Vajpayee and L.K. Advani, forming a government in 1998–2004. It returned to power in 2014 with a historic mandate under Narendra Modi, securing 282 seats in the Lok Sabha, followed by an even bigger victory in 2019 with 303 seats. The party promotes policies like Digital India, Make in India, Atmanirbhar Bharat, and GST reforms.",
        ElectionSymbol:'Lotus (कमल)',
        CurrentPartyPresident:' J.P. Nadda (जेपी नड्डा)',
        KeyLeaders: 'Narendra Modi, Amit Shah, Rajnath Singh, Yogi Adityanath',
        Presence: 'Strongest in Hindi heartland (Uttar Pradesh, Gujarat, Madhya Pradesh, Bihar, Rajasthan); expanding in the South and Northeast (हिंदी पट्टी (उत्तर प्रदेश, गुजरात, मध्य प्रदेश, बिहार, राजस्थान) में सबसे मजबूत दक्षिण और पूर्वोत्तर में विस्तार कर रही है।)',
    },
    {
      id: 2,
      name: "Aam Aadmi Party / आम आदमी पार्टी",
      party: Aap,
      votes: 0,
      leader: "Arvind Kejriwal",
      leaderPhoto: Arvind,
      description: "The Aam Aadmi Party (AAP) was founded on 26 November 2012 by Arvind Kejriwal, a former IRS officer and activist, following the India Against Corruption movement led by Anna Hazare. AAP emerged as a political force with a focus on anti-corruption, transparency, and welfare policies. It first formed a government in Delhi in 2013 but resigned after 49 days. It returned to power in 2015 with 67 out of 70 seats and again in 2020 with 62 seats, making it a dominant force in Delhi politics. AAP has expanded beyond Delhi, winning Punjab in 2022, forming its second state government. It has also contested elections in Gujarat, Goa, Haryana, and Karnataka. The party is known for policies like free electricity, free water, mohalla clinics, improved government schools, and doorstep services.",
      ElectionSymbol:'Broom (झाड़ू)',
      CurrentPartyPresident:'Arvind Kejriwal (अरविंद केजरीवाल)',
      KeyLeaders: 'Bhagwant Mann, Manish Sisodia, Saurabh Bharadwaj',
      Presence: 'Strong in Delhi and Punjab; expanding to Gujarat, Goa, Haryana, and Karnataka (दिल्ली और पंजाब में मजबूत; गुजरात, गोवा, हरियाणा और कर्नाटक में विस्तार कर रही है।)',
    },
    {
      id: 3,
      name: "Indian National Congress / भारतीय राष्ट्रीय कांग्रेस",
      party: Congress,
      votes: 0,
      leader: "Rahul Gandhi",
      leaderPhoto: Rahul,
      description: "The Indian National Congress (INC) is one of India's oldest and most historic political parties, founded on 28 December 1885 by A.O. Hume, Dadabhai Naoroji, and others. It played a crucial role in India's freedom movement, led by leaders like Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel, and Subhas Chandra Bose. After independence, it remained India’s dominant party for several decades, governing from 1947 to 1977 and then intermittently in the following years. Congress follows an ideology of secularism, social democracy, and center-left politics. It implemented major policies like Green Revolution, liberalization (1991), Right to Information (RTI), and MNREGA. However, in recent years, the party has faced a decline, suffering major losses in the 2014 and 2019 elections.",
      ElectionSymbol:'Hand (हाथ)',
      CurrentPartyPresident:'Mallikarjun Kharge (मल्लिकार्जुन खड़गे)',
      KeyLeaders: 'Sonia Gandhi, Rahul Gandhi, Priyanka Gandhi, P. Chidambaram',
      Presence: 'Historically dominant, now struggling; strong in Kerala, Karnataka, Rajasthan, and Chhattisgarh (ऐतिहासिक रूप से प्रमुख, लेकिन अब संघर्षरत; केरल, कर्नाटक, राजस्थान और छत्तीसगढ़ में मजबूत।)',
    },
    {
      id: 4,
      name: "National People's Party / राष्ट्रीय जनता पार्टी",
      party: PNP,
      votes: 0,
      leader: "Conrad Sangma",
      leaderPhoto: Conrad,
      description: "The National People's Party (NPP) was founded on 6 January 2013 by P.A. Sangma, a former Lok Sabha Speaker and prominent politician from Meghalaya. It is the first and only party from the Northeast to receive national party status. The party primarily focuses on tribal rights, regional development, and autonomy for northeastern states. NPP is currently the ruling party in Meghalaya, led by Conrad Sangma, and has a presence in states like Arunachal Pradesh, Manipur, Nagaland, and Mizoram. It aims to empower tribal communities and advocate for economic and infrastructural development in the region.",
      ElectionSymbol:'Book (पुस्तक)',
      CurrentPartyPresident:'Conrad Sangma (कॉन्राड संगमा)',
      KeyLeaders: 'James Sangma, Agatha Sangma',
      Presence: 'Strongest in Meghalaya; growing influence in Arunachal Pradesh, Manipur, Nagaland, Mizoram (मेघालय में सबसे मजबूत; अरुणाचल प्रदेश, मणिपुर, नागालैंड, मिज़ोरम में प्रभाव बढ़ रहा है।)',
    },
    {
      id: 5,
      name: "Communist Party of India / भारतीय कम्युनिस्ट पार्टी ",
      party: Cpi,
      votes: 0,
      leader: "Sitaram Yechury",
      leaderPhoto: Sitaram,
      description: "The Communist Party of India (CPI) is one of India’s oldest left-wing political parties, founded on 26 December 1925 in Kanpur. It follows Marxism-Leninism and has historically been associated with trade unions, labor rights, and land reforms. The party played a key role in peasants’ movements, labor strikes, and anti-colonial struggles. CPI was once a powerful force, particularly in states like West Bengal, Kerala, and Tripura, but its influence has significantly declined. Today, it remains active mainly in Kerala, where the Left Democratic Front (LDF) is in power. The party promotes social justice, government control over industries, and wealth redistribution.",
      ElectionSymbol:'Hammer and Sickle (हंसिया और हथौड़ा)',
      CurrentPartyPresident:'D. Raja (डी. राजा)',
      KeyLeaders: 'Binoy Viswam, Annie Raja',
      Presence: 'Strong in Kerala; limited influence in West Bengal and Tripura (केरल में मजबूत; पश्चिम बंगाल और त्रिपुरा में सीमित प्रभाव।)',
    },
    {
      id: 6,
      name: "Bahujan Samaj Party / बहुजन समाज पार्टी",
      party: Bsp,
      votes: 0,
      leader: "Mayawati",
      leaderPhoto: Mayawati,
      description: "The Bahujan Samaj Party (BSP) was founded on 14 April 1984 by Kanshi Ram to uplift the Dalits, Scheduled Castes, Scheduled Tribes, and Other Backward Classes (OBCs). Inspired by Dr. B.R. Ambedkar, BSP promotes social justice, caste equality, and economic upliftment of marginalized communities. BSP has been a dominant force in Uttar Pradesh, forming governments multiple times, especially under Mayawati, who has served as Chief Minister of UP four times. However, the party has lost significant ground in recent elections due to competition from BJP and Samajwadi Party.",
      ElectionSymbol:'Elephant (हाथी)',
      CurrentPartyPresident:'Mayawati / मायावती',
      KeyLeaders: 'Satish Chandra Mishra, Akash Anand / सतीश चंद्र मिश्रा, आकाश आनंद',
      Presence: 'Strong in Uttar Pradesh; some influence in Madhya Pradesh, Punjab, and Rajasthan (उत्तर प्रदेश में सबसे मजबूत; मध्य प्रदेश, पंजाब और राजस्थान में कुछ प्रभाव।)',
    },
  ],
  reducers: {
    voteForCandidate: (state, action) => {
      const candidate = state.find(
        (candidate) => candidate.id === action.payload
      );
      if (candidate) {
        candidate.votes++;
      }
    },
  },
});

export const { voteForCandidate } = Votes.actions;
export default Votes.reducer;
