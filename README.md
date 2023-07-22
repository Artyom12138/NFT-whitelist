# NFT-whitelist

Implementing NFT whitelist minting functionality through Merkle trees or off-chain signatures.

# environment

npm install hardhat
npm install
npx hardhat compile


# MerkleTree-whitelist
1.Put the whitelist into file WhiteList.json
2.The running order is:     generateMerkleTree.js => MerkleTree_deploy.js => MerkleTree_mint.js

# Signature-whitelist
1.Put the whitelist into file WhiteList.json
2.The running order is:    Signature_deploy.js => Signature_mint.js