const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETHEREUM_RPC_URL));
let userAddress

// 연결할 contract
let enimalContract

// 개인키에서 주소를 추출
function getAddress(privateKey) {
  if (privateKey.length === 66 && privateKey.startsWith('0x')) {
    const pubKey = web3.eth.accounts.privateKeyToAccount(privateKey);
    return pubKey.address;
  } else alert('유효한 개인키를 입력해주세요.');
}

function login(privateKey) {
  try {
    userAddress = getAddress(privateKey)
    enimalContract = new web3.eth.Contract(ABI, CA)
    web3.eth.accounts.wallet.add({
      privateKey,
      address: userAddress
    });
    // 스마트 컨트랙트에서 보유 토큰 가져오기
    const userToken = enimalContract.methods.balanceOf(userAddress).send({from : userAddress})
    return userToken
  }
  catch {
    // 에러 처리
  }
}
console.log(getAddress("0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001"))

exports.getAddress = getAddress
exports.login = login