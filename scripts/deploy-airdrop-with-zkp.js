// zkAirdropVerifier  contract address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
const { ethers, upgrades } = require("hardhat");

async function main() {
	const name = "ZKAirdrop Token";
	const symbol = "ZKERC20";

	const ZKAirdropVerifierFactory = await ethers.getContractFactory(
		"ERC20Verifier",
	);
	const zkAirdropVerifier = await upgrades.deployProxy(
		ZKAirdropVerifierFactory,
		[name, symbol],
	);

	await zkAirdropVerifier.waitForDeployment();
	console.log(
		"zkAirdropVerifier  contract address:",
		await zkAirdropVerifier.getAddress(),
	);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
