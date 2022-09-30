import {ABI} from './ABI'

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
  };
  web3.eth.accounts.signTransaction(txObject, privateKey)
  .then(res => {
    const raw = res.rawTransaction
    console.log('res', raw)
    web3.eth.sendSignedTransaction(raw)
    .once('receipt', (receipt) => {
      console.info('receipt', receipt)
    })
    .once('transactionHash', (hash) => {
      console.info('transactionHash', hash);
    }).on('error', console.error)
  })
}

export async function create(userAddress, tokenURI) {
  const ENIMAL_CA = '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A'
  const {ENIMAL_ABI} = ABI.CONTRACT_ABI
  const enimalContract = new web3.eth.Contract(ENIMAL_ABI, ENIMAL_CA)
  const ownerAddress = '0x6EcEdE1866CBA0aecFaE9ac37839a40E444a4Da3'
  const data = enimalContract.methods.create(userAddress, tokenURI)
  const encodedData = data.encodeABI()
  const privateKey = '0x5d45d001c03e63a1af780053a19de13630f4c960132f9d3952ceed2f95c7b2c6'
  let tokenId
  let transactionHash
  sendTx(userAddress, ENIMAL_CA, encodedData, privateKey)
    .then(async (res) => {
      transactionHash = res.transactionHash
      tokenId = await data.call({from: ownerAddress})
    })
  return (tokenId, transactionHash)
}


export async function charge(userAddress, amount, privateKey) {
  // privateKey 입력 받음? 따로 저장?
  const adminAddress = "0x01E04dfC7240B86D115Ed2C232953B0E71333290"
  const ERC20_CA = '0x0c54E456CE9E4501D2c43C38796ce3F06846C966'
  const {ERC20_ABI} = ABI.CONTRACT_ABI
  const ssafyToken = new web3.eth.Contract(ERC20_ABI, ERC20_CA)
  const data = ssafyToken.methods.transfer(adminAddress, amount).encodeABI()
  sendTx(userAddress, ERC20_CA, data, privateKey)
}
