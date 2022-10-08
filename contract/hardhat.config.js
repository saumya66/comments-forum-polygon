require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["7024211ccdfd57b4380c4032816ab77ced481bfc4fcd749d69ebd4715e64acea"],
    },
  },
};