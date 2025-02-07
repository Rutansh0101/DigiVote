import { createSlice } from "@reduxjs/toolkit";
import BjpLogo from '../../Assets/partyLogos/BjpLogo.png'
import Aap from '../../Assets/Aap.jpg'
import Congress from '../../Assets/Congress.jpeg'
import PNP from '../../Assets/PNP.jpeg'
import Cpi from '../../Assets/partyLogos/Cpi.png'
import Bsp from '../../Assets/partyLogos/Bsp.jpg'
import Modi from '../../Assets/partyLeaders/Modi.jpg'
import Arvind from '../../Assets/partyLeaders/Arvind.jpg'
import Rahul from '../../Assets/partyLeaders/Rahul.jpg'
import Conrad from '../../Assets/partyLeaders/Conrad.jpg'
import Sitaram from '../../Assets/partyLeaders/Sitaram.jpg'
import Mayawati from '../../Assets/partyLeaders/Mayawati.jpg'

const Votes = createSlice({
    name: "votes",
    initialState: [
        { id: 1, name: "Bharatiya Janata Party", party: BjpLogo, votes: 0 , leader: "Narendra Modi", leaderPhoto: Modi, description: "" },
        { id: 2, name: "Aam Aadmi Party", party: Aap, votes: 0 , leader: "Arvind Kejriwal", leaderPhoto: Arvind, description: "" },
        { id: 3, name: "Indian National Congress", party: Congress, votes: 0 , leader: "Rahul Gandhi", leaderPhoto: Rahul, description: "" },
        { id: 4, name: "National People's Party", party: PNP, votes: 0 , leader: "Conrad Sangma", leaderPhoto: Conrad, description: "" },
        { id:5, name: "Communist Party of India", party: Cpi, votes: 0 , leader: "Sitaram Yechury", leaderPhoto: Sitaram, description: "" },
        { id:6, name: "Bahujan Samaj Party", party: Bsp, votes: 0 , leader: "Mayawati", leaderPhoto: Mayawati, description: "" },
          
    ],
    reducers: {
        voteForCandidate: (state, action) => {
            const candidate = state.find((candidate) => candidate.id === action.payload)
            if (candidate) {
                candidate.votes++
            }
        }
    }
})

export const { voteForCandidate } = Votes.actions
export default Votes.reducer