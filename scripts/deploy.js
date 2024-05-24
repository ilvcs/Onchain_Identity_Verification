const { ethers } = require("hardhat");
// UniversalVerifier deployed to: 0x1377Ef2A26364c388d1e4873CFb10f14A6fb8854

async function main() {
	const universalVerifierAddress = "0x1377Ef2A26364c388d1e4873CFb10f14A6fb8854";
	const verifierName = "ZKAirdropVerifier";
	const verifierSymbol = "zkERC20";

	const verifier = await ethers.deployContract(verifierName, [
		universalVerifierAddress,
		verifierName,
		verifierSymbol,
	]);
	await verifier.waitForDeployment();
	console.log(verifierName, " contract address:", await verifier.getAddress());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
