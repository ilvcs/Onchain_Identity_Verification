const { ethers } = require("hardhat");
// ZKAirdropVerifier  contract address: 0xcea1f00983A90AF2D5015fC6093461AE6a75EAA2
const ZK_AIRDROP_VERIFIER_ADDRESS =
	"0xcea1f00983A90AF2D5015fC6093461AE6a75EAA2";

async function main() {
	const [deployer] = await ethers.getSigners();
	console.log(
		"Claiming airdrop with the account:",
		await deployer.getAddress(),
	);

	const ZkAirdropVerifier = await ethers.getContractFactory(
		"ZKAirdropVerifier",
	);
	const zkAirdropVerifier = ZkAirdropVerifier.attach(
		ZK_AIRDROP_VERIFIER_ADDRESS,
	);

	const tx = await zkAirdropVerifier.mint();
	await tx.wait();

	console.log("Airdrop claimed!");
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
