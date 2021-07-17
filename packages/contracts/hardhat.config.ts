import "@nomiclabs/hardhat-ethers"
import "@openzeppelin/hardhat-upgrades"
import "@typechain/hardhat"
import "hardhat-gas-reporter"

import network from "./network.json";

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    mainnet: {
      url: network.mainnet.provider,
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: network.rinkeby.provider,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  gasReporter: {
    enable: true,
    currency: "JPY",
    outputFile: process.env.CI ? "gas-report.txt" : undefined,
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        runs: 200,
      },
    },
  }
};
