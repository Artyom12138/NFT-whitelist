/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const  { INfURA_API_KEY, PRIVATE_KEY_1, PRIVATE_KEY_2, PRIVATE_KEY_3, PRIVATE_KEY_4, PRIVATE_KEY_5 } = process.env;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "localnetwork",
  networks: {
    hardhat: {},
    // 这是本地Ganache的环境
    localnetwork: {
      url: `HTTP://127.0.0.1:7545`,
      accounts: [
        PRIVATE_KEY_1,
        PRIVATE_KEY_2,
        PRIVATE_KEY_3,
        PRIVATE_KEY_4,
        PRIVATE_KEY_5
      ],
      chainId: 1337
    },
    goerli: {
      // url: `https://goerli.infura.io/v3/${INfURA_API_KEY}`,
      url: `https://weathered-young-dream.ethereum-goerli.discover.quiknode.pro/${INfURA_API_KEY}`,
      accounts: [],
      chainId: 5
    },
  }
};
