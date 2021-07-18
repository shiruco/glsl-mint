//import { ethers } from "ethers"
import * as admin from "firebase-admin"
import * as functions from "firebase-functions"
const { create } = require('ipfs-http-client')

const PROJECT_ID = functions.config().infura.project_id || process.env.PROJECT_ID
const PROJECT_SECRET = functions.config().infura.project_secret || process.env.PROJECT_SECRET

const auth =
  'Basic ' + Buffer.from(PROJECT_ID + ':' + PROJECT_SECRET).toString('base64')

const ipfsAddOptions = {
  cidVersion: 0,
}

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth
  }
})

const setIpfsUriPrefix = (cidOrURI) => {
  let uri = cidOrURI.toString()
  if (!uri.startsWith('ipfs://')) {
      uri = 'ipfs://' + cidOrURI
  }
  // Avoid the Nyan Cat bug (https://github.com/ipfs/go-ipfs/pull/7930)
  if (uri.startsWith('ipfs://ipfs/')) {
    uri = uri.replace('ipfs://ipfs/', 'ipfs://')
  }
  return uri
}

exports.addIPFS = functions.region("asia-northeast1").https.onCall(async (data, context) => {
  const { contents } = data
  const ipfsPath = '/nft/'

  const { cid } = await client.add(contents, ipfsAddOptions)

  const contentIpfsUri = setIpfsUriPrefix(cid) 

  const metadata = {
    name: "glsl",
    description: "glsl NFT token",
    image: contentIpfsUri,
    animation_url: contentIpfsUri,
  }

  const { cid: metadataCid } = await client.add(JSON.stringify(metadata), ipfsAddOptions)
  const metadataIpfsUri = setIpfsUriPrefix(metadataCid)
  const metadataCidString = metadataCid.toString()

  return {
    metadataCidString,
    metadata,
    metadataIpfsUri
  }
})
