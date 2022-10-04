import { ABI } from './ABI'

const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("http://20.196.209.2:8545/"));

async function sendTx(from, to, data, privateKey) {
  let nonce
  web3.eth.getTransactionCount(from, 'pending')
    .then(res => {
      nonce = res
    })
  const txObject = {
    nonce,
    gas: web3.utils.toHex(web3.utils.toWei('1', 'gwei')),
    from,
    to,
    data,
  }
  let result
  await web3.eth.accounts.signTransaction(txObject, privateKey)
    .then(async res => {
      const raw = res.rawTransaction
      await web3.eth.sendSignedTransaction(raw)
        .once('receipt', (receipt) => {
          console.log(receipt)
          console.log(parseInt(receipt.logs[0]?.topics[3], 16))
          result = receipt.logs[0]?.address
        })
        // .once('transactionHash', (hash) => {
        //   result = hash
        // })
        .on('error', console.error)
    })
  return result
}

export async function create(userAddress, tokenURI) {
  const ENIMAL_CA = '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A'
  // const ENIMAL_CA = process.env.REACT_APP_ENIMAL_CA
  const { ENIMAL_ABI } = ABI.CONTRACT_ABI
  const enimalContract = new web3.eth.Contract(ENIMAL_ABI, ENIMAL_CA)
  const ownerAddress = '0x6EcEdE1866CBA0aecFaE9ac37839a40E444a4Da3'
  // const ownerAddress = process.env.REACT_APP_OWNER_PUBLIC_KEY
  const data = enimalContract.methods.create(userAddress, tokenURI)
  const encodedData = data.encodeABI()
  const privateKey = '0x5d45d001c03e63a1af780053a19de13630f4c960132f9d3952ceed2f95c7b2c6'
  // const privateKey = process.env.REACT_APP_OWNER_PRIVATE_KEY
  let tokenId
  // let transactionHash
  await sendTx(userAddress, ENIMAL_CA, encodedData, privateKey)
    .then(async () => {
      // hash 필요 없을 것 같음
      // transactionHash = res
      await data.call({ from: ownerAddress })
        .then(async result => {
          tokenId = await result
        })
    })
  return tokenId
}

export async function ownerOf(tokenId) {
  const ENIMAL_CA = '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A'
  // const ENIMAL_CA = process.env.REACT_APP_ENIMAL_CA
  const { ENIMAL_ABI } = ABI.CONTRACT_ABI
  const enimalContract = new web3.eth.Contract(ENIMAL_ABI, ENIMAL_CA)
  // const ownerAddress = '0x6EcEdE1866CBA0aecFaE9ac37839a40E444a4Da3'
  // const ownerAddress = process.env.REACT_APP_OWNER_PUBLIC_KEY
  // const encodedData = data.encodeABI()
  // const privateKey = '0x5d45d001c03e63a1af780053a19de13630f4c960132f9d3952ceed2f95c7b2c6'
  // const privateKey = process.env.REACT_APP_OWNER_PRIVATE_KEY

  // enimalContract.methods.balanceOf('0x7edc38F3511F13100AdcC4c16Ba14eC475C00776').call({from: ownerAddress})
  //   .then(console.log)
  enimalContract.methods.ownerOf(tokenId).call()
    .then(res => {
      console.log(res)
    })
  // enimalContract.methods.tokenURI(1).call()
  //   .then(console.log)

}

export async function charge(userAddress, amount, privateKey) {
  const adminAddress = "0x01E04dfC7240B86D115Ed2C232953B0E71333290"
  const ERC20_CA = '0x0c54E456CE9E4501D2c43C38796ce3F06846C966'
  // const adminAddress = process.eventNames.REACT_APP_ADMIN_PUBLIC_KEY
  // const ERC20_CA = process.eventNames.REACT_APP_ERC20_CA
  const { ERC20_ABI } = ABI.CONTRACT_ABI
  const ssafyToken = new web3.eth.Contract(ERC20_ABI, ERC20_CA)
  const data = ssafyToken.methods.transfer(adminAddress, amount).encodeABI()
  let result
  sendTx(userAddress, ERC20_CA, data, privateKey)

  // console.log(result)
}

export async function revertCharge(userAddress, amount) {
  const adminAddress = "0x01E04dfC7240B86D115Ed2C232953B0E71333290"
  const ERC20_CA = '0x0c54E456CE9E4501D2c43C38796ce3F06846C966'
  // const adminAddress = process.env.REACT_APP_ADMIN_PUBLIC_KEY
  // const ERC20_CA = process.env.REACT_APP_ERC20_CA
  const privateKey = '0x9633ab4de4f165c90a031af88a8d5608dcadd2ab99599834c94fab3d77db87cf'
  // const privateKey = process.env.REACT_APP_ADMIN_PRIVATE_KEY
  const { ERC20_ABI } = ABI.CONTRACT_ABI
  const ssafyToken = new web3.eth.Contract(ERC20_ABI, ERC20_CA)
  const data = ssafyToken.methods.transfer(userAddress, amount).encodeABI()
  sendTx(adminAddress, ERC20_CA, data, privateKey)
}
