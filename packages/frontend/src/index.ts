import firebase from "firebase/app"
import "firebase/functions"
import Web3 from 'web3'
import { firebaseConfig } from "./config"
import { INFURA_PROJECT_ID } from "./constants"
import { htmlTemplate } from "./template"
import { AbiItem } from "web3-utils"

import { abi } from "../../contracts/contracts/artifacts/GLSLMint.json"

// contract address
const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

const env = process.env.NODE_ENV
const app = firebase.initializeApp(firebaseConfig)
const functions = app.functions("asia-northeast1")

interface FirebaseFunctionResponse
  extends firebase.functions.HttpsCallableResult {
  readonly data: {
    metadataCidString: string,
    metadata: string,
    metadataIpfsUri: string
  };
}

// rinkeby testnet 
let PROVIDER = `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`

if (env === "development") {
  functions.useEmulator("localhost", 5001)
  PROVIDER = "http://localhost:8545"
}

let currentWeb3: Web3 = new Web3(PROVIDER)

if (window.ethereum) {
  let instance = new Web3(window.ethereum)
  try {
    window.ethereum.enable()
    currentWeb3 = instance
  } catch (error) {
    alert('Please allow access for the app to work')
  }
}

const getAccount = async () => {
  const account = await currentWeb3.eth.getAccounts()
  return account[0]
}

// TODO: open metadata input form
const handleClickMintButton = async () => {
  const source = window.editor.getContent()
  const htmlContents = htmlTemplate.replace(/\$source/g, source)

  const res: FirebaseFunctionResponse = await functions.httpsCallable('addIPFS')({
    contents: htmlContents
  })

  const account = await getAccount()

  const GLSLMintContract = new currentWeb3.eth.Contract(abi as AbiItem[], address, {
    from: account,
    gasPrice: '20000000000'
  })

  const id = await GLSLMintContract.methods.mint(
    account,
    res.data.metadataCidString
  ).send({
    from: account
  })
  console.log(`ipfs cid: ${res.data.metadataCidString}`)
}

document.addEventListener("DOMContentLoaded", () => {
  const mintButton = document.querySelector(".mint-button")
  mintButton?.addEventListener("click", handleClickMintButton)
})


