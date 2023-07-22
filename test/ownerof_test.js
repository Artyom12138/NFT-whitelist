async function main() {
    // 合约地址 - 请替换为你部署合约后返回的地址
    const contractAddress = '0xB4f0a3dD83E0Fc7Fd447C6471c957261cce7CD40';

    // 获取合约实例
    const myContract = await ethers.getContractAt("LINK2", contractAddress);

    // tokenId - 请替换为你成功 mint 的 NFT 的 tokenId
    const tokenId = 0;

    // 调用 ownerOf 函数来查询 NFT 的所有者
    const owner = await myContract.ownerOf(tokenId);
    console.log(`Owner of tokenId ${tokenId}: ${owner}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
