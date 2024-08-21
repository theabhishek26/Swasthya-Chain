const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

// task()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{}
  }
};
