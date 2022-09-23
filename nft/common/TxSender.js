import Web3 from 'web3';
import Tx from 'ethereumjs-tx';

const CHAIN_ID = 31221
// Web3
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETHEREUM_RPC_URL));

/**
 * 트랜잭션 전송을 위한 공통 로직
 * 전달받은 개인키로 서명한 트랜잭션을 전송합니다. 
 * @param {*} fromAddr 보내는 주소
 * @param {*} privKey 보내는 주소의 개인키
 * @param {*} toAddr 받는 주소
 * @param {*} data 입력 데이터
 * @returns 트랜잭션의 결과 
 */
export default async function sendTransaction(fromAddr, privKey, toAddr, data) {
  try {
    // 직접 구현해야 함
    // 
    const common = new Common({ chain: CHAIN_ID, hardfork: Hardfork.London})
    if (getAddress(privKey) === userAddress) {
      web3.eth.sendTransaction({
        from : fromAddr,
        to : toAddr,
        data,
      })
        .then((response) => response.data)
    }
  } catch (error) {
    console.log(error);
  }
}

