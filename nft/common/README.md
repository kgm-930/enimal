## 환경 변수 추가 설정

### SSAFY 네트워크 주소
REACT_APP_ETHEREUM_RPC_URL

### 각 컨트랙트의 CA
REACT_APP_NFT_CA
REACT_APP_ERC20_CA

### ipfs 설정
REACT_APP_IPFS_IP
REACT_APP_IPFS_PORT

### 추가 설정 (필요한 요소라고 생각되는 부분)

REACT_APP_ADMIN_ADDRESS

---
## 환경 변수 불러오기



---
## CA 값 불러오기
```
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
const CounterContract = require('./contracts/Counter.json');
const networkId = await web3.eth.net.getId();
const CA = CounterContract.networks[networkId].address;
const abi = CounterContract.abi;

```
