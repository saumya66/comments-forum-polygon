const hre = require("hardhat");

async function main() {
 
  const CommentsContract = await hre.ethers.getContractFactory("Comments");
  const contract = await CommentsContract.deploy();

  await contract.deployed();

  const tx1 = await contract.addComment("my-blog-post", "My first comment");
  await tx1.wait();

  const tx2 = await contract.addComment("my-blog-post", "My second comment");
  await tx2.wait();

  console.log("Contract deployed to:", contract.address);
}

 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });