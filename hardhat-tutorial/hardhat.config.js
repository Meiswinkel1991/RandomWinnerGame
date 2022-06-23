require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: MUMBAI_PRIVATE_KEY ? [MUMBAI_PRIVATE_KEY] : ["0x"],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};
