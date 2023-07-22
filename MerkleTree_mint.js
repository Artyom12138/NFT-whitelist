const { ethers } = require("ethers");
const fs = require("fs");
require("dotenv").config();
const generateProof = require("./generateProof"); // 导入默克尔证明

async function main() {
    // 使用 PRIVATE_KEY_2 创建钱包（Wallet）对象
    const privateKey = process.env.PRIVATE_KEY_2;
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ethers.Wallet(privateKey, provider);

    // 获取合约实例
    const contractAddress = "0x34F8Ffbf416B7614175b3Ce58093342371dCb10e"; // NFT的合约地址
    const abi = JSON.parse(fs.readFileSync("./abi/abi_MerkleTree.json", "utf8")); // 读取abi
    const myContract = new ethers.Contract(contractAddress, abi, wallet);

    // 调用 generateProof 生成白名单默克尔证明
    const addressToCheck = wallet.address; // 使用钱包对象生成地址
    const tokenId = 0; // NFT的tokenId
    const proof = await generateProof(addressToCheck);

    // 调用 mint 函数
    const mintTx = await myContract.mint(addressToCheck, tokenId, proof);
    await mintTx.wait(); // 等待交易被打包并确认
    console.log("NFT minted!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
