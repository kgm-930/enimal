const {ABI} = require('./ABI')
const Web3 = require('web3')
const { default: axios } = require('axios')
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

//* 기부금을 % 단위로 받을 때 (20%, 30%)
function calculator(amount, donateRatio=0.1) {
  //* 20% 기부 비율 & amount 100 SSF (100 SSF -> 10 SSF 기부/ 90 SSF-> 1000 SAVE, 기본 기부 비율 10%라 가정)
  const donateAmount = amount * donateRatio
  const profit = amount - donateAmount
  //* 전환된 재화 - 소수점 올림? 내림? 반올림? (80 SSF => 1000 * 80 / 90 => 888.88... SAVE)
  const save = Math.round(profit * 100 / 9)
  
  //* 사용자가 충전 버튼 누르면(onClick) -> 스마트 컨트랙트 호출 -> 성공 시 충전
  ssafyTokenContract.methods.forceToTransfer(userAddress, adminAddress, amount).send({from:userAddress})
    .on(() => {
      charge(donateAmount, save)
    })


//* 기부금을 SAVE 단위로 받을 때
function calculator(amount, save) {
  //* 100 SAVE 기부금 & amount 100 SSF (100 SSF -> 1000 SAVE, 기본 기부 비율 10%라 가정)
  //* 전환된 save - 소수점 올림? 내림? 반올림? (80 SSF => 1000 * 80 / 90 => 888.88... SAVE)
  const chargedSSF = Math.round(save * 9/100)
  const donateAmount = amount - chargedSSF
  
  //* 사용자가 충전 버튼 누르면 -> 스마트 컨트랙트 호출 -> 성공 시 충전
  ssafyTokenContract.methods.forceToTransfer(userAddress, adminAddress, amount).send({from:userAddress})
    .on(() => {
      charge(donateAmount, save)
    })
}


function charge(donateAmount, save) {
  // 스마트 컨트랙트 호출 (연구 필요)
  
      axios({
        url: '/credit',
        method: 'post',
        data: {donateAmount, save},
        headers: {
          
        }
      })
        .then((res) => {
          alert('충전되었습니다')
          // Navbar충전 금액 변경
        })
        .catch((err) => {
          alert('충전에 실패했습니다')
        })
      
    }
}
    

