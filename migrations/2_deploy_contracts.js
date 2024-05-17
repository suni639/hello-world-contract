const SimpleContract = artifacts.require("SimpleContract");

module.exports = async function (deployer) {
    try {
        console.log("Starting deployment...");
        await deployer.deploy(SimpleContract);
        const instance = await SimpleContract.deployed();
        console.log("Contract deployed at address:", instance.address);
    } catch (error) {
        console.error("Deployment failed:", error);
    }
};
