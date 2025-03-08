# DigiVote India - Blockchain-Based Online Voting System

## Overview
DigiVote India is a secure and transparent online voting platform leveraging blockchain technology. It ensures fair, tamper-proof elections with decentralized governance, reducing electoral fraud and increasing voter accessibility.

## Features
- **Secure Blockchain Voting**: Immutable and transparent voting process.
- **MetaMask Integration**: Enables secure voter authentication.
- **On-Chain Vote Verification**: Ensures integrity and prevents duplicate voting.
- **Admin Dashboard**: Manage elections, track votes, and monitor statistics.
- **Dynamic QR Code for Voter Validation**: Enhances security by preventing vote duplication.
- **Anti-Bot Mechanism**: Captcha and wallet-based limitations to prevent spam voting.
- **Multilingual Chatbot (Digi Saarthi)**: AI assistant for voter guidance.
- **Interactive Election Map**: Visual representation of state-wise elections using React & Framer Motion.
- **Decentralized Storage (IPFS)**: Securely stores election metadata.
- **Resale-Proof Ticketing System**: Blockchain-based event ticketing for electoral campaigns.
- **Mobile-Friendly UI**: Optimized for seamless voting on any device.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Framer Motion, Leaflet
- **Backend**: Node.js, Express.js, MongoDB
- **Blockchain**: Solidity, Hardhat, Ethers.js
- **Storage**: IPFS for metadata
- **Security**: Dynamic QR code validation, wallet-based authentication
- **AI Integration**: Gemini AI for voter assistance
- **Web3 Authentication**: MetaMask & Ethers.js

## Installation
### Prerequisites
- Node.js (v16 or higher)
- MetaMask browser extension
- Hardhat for local blockchain testing

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/digivote-india.git
   cd digivote-india
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables in a `.env` file.
4. Start the local blockchain:
   ```sh
   npx hardhat node
   ```
5. Deploy smart contracts:
   ```sh
   npx hardhat run scripts/deploy.js --network localhost
   ```
6. Start the frontend:
   ```sh
   npm run dev
   ```

## Contributing
We welcome contributions! Open an issue or submit a pull request for improvements.

## License
DigiVote India is licensed under the MIT License.



