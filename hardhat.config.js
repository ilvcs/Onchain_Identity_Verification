require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.20",
	networks: {
		amoy: {
			chainId: 80002,
			url: `${process.env.AMOY_JSON_RPC_URL}`,
			accounts: [`0x${process.env.PRIVATE_KEY}`],
		},
	},
};
