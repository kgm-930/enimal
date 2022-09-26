const {ABI} = require('./ABI')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://20.196.209.2:8545/'))
// const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETHEREUM_RPC_URL))
const abi = ABI.CONTRACT_ABI.SSAFY_TOKEN_ABI
// 임시로 하드코딩
const CA = '0xb09d0879D6F9f48FFb09a4B0001c351dF6e1f2Ca'
let adminAddress


// https://bitkunst.tistory.com/entry/Ethereum%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80-%EC%8A%A4%EB%A7%88%ED%8A%B8-%EC%BB%A8%ED%8A%B8%EB%9E%99%ED%8A%B8-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%93%B1%EB%A1%9D-%EB%B0%8F-%EB%B0%B1%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0
// const ssafyToken = require('../build/contracts/ssafyToken.json')
// const networkId = await web3.eth.net.getId()
// const CA = enimal.networks[networkId].address

const ssafyTokenContract = new web3.eth.Contract(abi, CA)

function charge(amount, donateRatio=0.1) {

  ssafyTokenContract.methods.forceToTransfer(userAddress, adminAddress, amount).send({from:userAddress})
    .on(() => {
      // 성공 시 백에 기부비율과 기부자 알림
    })


  // 기부금 프론트에서 계산?
  // let domateAmount = amount * 0.1
  // if (donateRatio !== 0,1) {
  //   domateAmount += amount*(donateRatio - 0.1)
  // }
  
  
}
