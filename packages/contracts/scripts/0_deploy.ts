const { ethers, upgrades } = require("hardhat")

const ownerAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

async function main() {
  const ShaderMint = await ethers.getContractFactory("ShaderMint")
  const instance = await upgrades.deployProxy(ShaderMint, [ownerAddress, "ShaderMint", "SHADERMINT"])
  await instance.deployed()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
