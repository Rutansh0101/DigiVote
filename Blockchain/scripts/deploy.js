const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const VoteChain = await hre.ethers.getContractFactory("Election");

  // Deploy the contract
  const voteChain = await VoteChain.deploy();

  await voteChain.waitForDeployment(); // Ensure it's deployed

  const contractAddress = await voteChain.getAddress();
  console.log(`✅ Contract deployed to: ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });