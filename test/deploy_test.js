const { ethers } = require("ethers");
require("dotenv").config();

async function main() {
    // 引入 ethers
    
    const myContract = await hre.ethers.getContractFactory("LINK2");
    const myContractDeployed = await myContract.deploy("My contract name is:", "LINK2");
    
    await myContractDeployed.deployed();
    console.log("Deployed my contract to:", myContractDeployed.address);

    // 使用 PRIVATE_KEY_2 创建钱包（Wallet）对象
    const privateKey = process.env.PRIVATE_KEY_2; // 请将 "0xYourPrivateKey2" 替换为您的 PRIVATE_KEY_2
    const wallet = new ethers.Wallet(privateKey);
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545"); // 替换为您本地节点的 URL

    // 调用 mint 函数，使用 PRIVATE_KEY_2 对应的钱包对象和提供者进行合约调用
    const tokenId = 0; // 设置你想要创建的NFT的tokenId
    const myContractWithSigner = myContractDeployed.connect(wallet.connect(provider));
    const mintTx = await myContractWithSigner.mint(wallet.address, tokenId);
    await mintTx.wait(); // 等待交易被打包并确认
    console.log("NFT minted!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
