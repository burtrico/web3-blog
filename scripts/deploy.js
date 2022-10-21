/* scripts/deploy.js */
const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // let hardCodedUser = '0x8759B07C01Cc9808Ecedf7c0A5ED68f176B9c012';

  // [hardCodedUser] = ethers.getSigners();
  // hardCodedUser.connect(ethers.provider)
  // const signer = new ethers.Wallet(your_private_key_string);

  /* these two lines deploy the contract to the network */
  const Blog = await hre.ethers.getContractFactory("Blog");
  const blog = await Blog.deploy("My blog");

  await blog.deployed();
  console.log("Blog deployed to:", blog.address);

  /* this code writes the contract addresses to a local */
  /* file named config.js that we can use in the app */
  fs.writeFileSync('./config.js', `
  export const contractAddress = "${blog.address}"
  export const ownerAddress = "${blog.signer.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });