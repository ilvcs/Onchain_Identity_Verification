const { ethers } = require("hardhat");
// UniversalVerifier deployed to: 0x70696036CA1868B42155b06235F95549667Eb0BE
// ZKAirdropVerifier  contract address: 0x5105bFeD2fDB001c2b50758090ee009bbBDcfbFE
async function main() {
	const universalVerifierAddress = "0x70696036CA1868B42155b06235F95549667Eb0BE";
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
