import { ethers } from "ethers"
import * as admin from "firebase-admin"
import * as functions from "firebase-functions"
import { create } from "ipfs-http-client"

// ipfs.add parameters for more deterministic CIDs
const ipfsAddOptions = {
  cidVersion: 1,
  hashAlg: 'sha2-256'
}

const ipfsApiUrl = "http://localhost:5001"

const ipfs = create({ url: ipfsApiUrl })

exports.addIPFS = functions.https.onCall(async (req, res) => {

})
