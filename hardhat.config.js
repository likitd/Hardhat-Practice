
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

// const ALCHEMY_API_KEY = boIoLk_ueZKJRU6q6YXAcwRKwSfU9s_t; 
const SEPOLIA_PRIVATE_KEY =
  "9521ed66321087797d21d3f8c3ef9f26c12f40f760546de06625f7484a84869c";
module.exports = {
  solidity: "0.8.24",

  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/boIoLk_ueZKJRU6q6YXAcwRKwSfU9s_t`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    }
  }
};
