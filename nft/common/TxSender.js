const Web3 = require('web3')
const CryptoJS = require('crypto-js')
const Tx = require('ethereumjs-tx')
const coder = require('web3/lib/solidity/coder')

const CHAIN_ID = 31221
// Web3
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETHEREUM_RPC_URL));
const enimalContract = new web3.eth.Contract(ABI.ABI.CONTRACT_ABI.ENIMAL_ABI, '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A')

let adminAddress
let userAddress

let nonce = web3.eth.getTransactionCount(userAddress)
let gasPrice = web3.eth.gasPrice
let value = web3.toWei(amount, 'ether')
let gasLimit = web3.eth.estimateGas({
  to: adminAddress,
  from: userAddress,
  value,
})

// signature + parameter
function contractData (functionName, types, args) {
  let fullName = functionName + '(' + types.join() + ')'  
  let signature = CryptoJS.SHA3(fullName, {outputLength:256}).toString(CryptoJS.enc.Hex).slice(0, 8)  //  The first 32 bit
  let dataHex = signature + coder.encodeParams(types, args)
  return '0x'+dataHex;
}

function callFunction(functionName, types, args) {

  const txData = contractData(functionName,types, args);
  console.log(tx)
  const rawTx = {
      nonce: web3.toHex(nonce),
      gasPrice: web3.toHex(gasPrice),
      gasLimit: web3.toHex(gasLimit),
      to: adminAddress,
      from: userAddress,
      data: txData,
  };
  
  let tx = new Tx(rawTx);
  tx.sign(privateKey);
  
  const serializedTx = tx.serialize();
  const transactionHash = web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'));

}

callFunction('create', ['address', 'string'], [userAddress, 'kfjslfjlsdjlfjsl'])

const signature = web3.sha3(fullName).replace('0x', '').slice(0,8)
const data = coder.encodeParams(types, args)











// /**
//  * 트랜잭션 전송을 위한 공통 로직
//  * 전달받은 개인키로 서명한 트랜잭션을 전송합니다. 
//  * @param {*} fromAddr 보내는 주소
//  * @param {*} privKey 보내는 주소의 개인키
//  * @param {*} toAddr 받는 주소
//  * @param {*} data 입력 데이터
//  * @returns 트랜잭션의 결과 
//  */
// export default async function sendTransaction(fromAddr, privKey, toAddr, data) {
//   try {
//     // 직접 구현해야 함
//     // 
//     const common = new Common({ chain: CHAIN_ID, hardfork: Hardfork.London})
//     if (getAddress(privKey) === userAddress) {
//       web3.eth.sendTransaction({
//         from : fromAddr,
//         to : toAddr,
//         data,
//       })
//         .then((response) => response.data)
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

