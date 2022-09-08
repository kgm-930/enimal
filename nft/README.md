# NFT

## File Tree (임시)

📦nft-contracts
 ┣ 📂contracts
 ┃ ┣ 📂access
 ┃ ┃ ┗ 📜Ownable.sol
 ┃ ┣ 📂token
 ┃ ┃ ┣ 📂ERC20
 ┃ ┃ ┃ ┣ 📂extensions
 ┃ ┃ ┃ ┃ ┗ 📜IERC20Metadata.sol
 ┃ ┃ ┃ ┣ 📜ERC20.sol
 ┃ ┃ ┃ ┗ 📜IERC20.sol
 ┃ ┃ ┗ 📂ERC721
 ┃ ┃ ┃ ┣ 📂extensions
 ┃ ┃ ┃ ┃ ┗ 📜IERC721Metadata.sol
 ┃ ┃ ┃ ┣ 📜ERC721.sol
 ┃ ┃ ┃ ┣ [📜IERC721.sol](#IERC721)
 ┃ ┃ ┃ ┗ 📜IERC721Receiver.sol
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂introspection
 ┃ ┃ ┃ ┣ 📜ERC165.sol
 ┃ ┃ ┃ ┗ 📜IERC165.sol
 ┃ ┃ ┣ 📂math
 ┃ ┃ ┃ ┗ 📜SafeMath.sol
 ┃ ┃ ┣ 📜Address.sol
 ┃ ┃ ┣ 📜Context.sol
 ┃ ┃ ┗ 📜Strings.sol
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜Migrations.sol
 ┃ ┣ 📜SaleFactory.sol
 ┃ ┣ 📜SsafyNFT.sol
 ┃ ┗ 📜SsafyToken.sol
 ┣ 📂migrations
 ┃ ┗ 📜.gitkeep
 ┣ 📂test
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜NftContractTest.js
 ┃ ┗ 📜SaleContractTest.js
 ┗ 📜truffle-config.js



## 용어 설명







## 함수

### **IERC721** : NFT 표준

### event, interface 목록

|        함수/이벤트        |                             인자                             |        반환값        |                             설명                             |     속성      |                             조건                             |
| :-----------------------: | :----------------------------------------------------------: | :------------------: | :----------------------------------------------------------: | :-----------: | :----------------------------------------------------------: |
|      event Transfer       | address indexed : `from`,<br />address indexed : `to`,<br />uint256 indexed : `tokenId` |          -           |             `tokenId`를 `from`에서 `to` 로 전송              |       -       |                              -                               |
|      event Approval       | address indexed : `owner`,<br />address indexed : `approved`,<br />uint256 indexed :  `tokenId` |          -           |     `owner`가 `approved`에 `tokenId`에 대한 권한을 부여      |       -       |                              -                               |
|   event ApprovalForAll    | address indexed : `owner`,<br />address indexed : `operator`,<br />bool : `approved` |          -           | `owner`가 `operator`에 자신이 가진 모든 자산에 대한 권한을 부여 |       -       |                              -                               |
|    function balanceOf     |                      address : `owner`                       | uint256 : `balance`  |                     `owner`의 잔액 반환                      | external view |                              -                               |
|     function ownerOf      |                     uint256 : `tokenId`                      |  address : `owner`   |               `tokenId`를 소유한 `owner` 반환                | external view |                       `tokenId`가 존재                       |
| function safeTransferFrom |   address : `from`,  address : `to`,  uint256 : `tokenId`    |          -           | contract를 수신인이, 토큰이 영원히 잠기는 것을 방지하는  ERC721에  대해 인식하는지를 확인<br />Transfer event를 emit |   external    | `from`, `to`가 0 주소가 아님<br />`tokenId`를 가진 자산이 `from`의 소유여야 함<br /> 호출한 사람이 `from`이 아닐 경우, `approve`나 `approvalForAll`로 이 토큰을 움직이는 것이 허용되어야 함<br />`to`가 smart contract를 참고한다면, `IERC721Receiver-onERC721Received`를 주입해야 함 |
|   function transferFrom   |    address : `from`, address : `to`,  uint256 : `tokenId`    |          -           | `tokenId`를 `from`에서 `to`로 전송<br />Transfer event를 emit |   external    | `from`, `to`가 0 주소가 아님<br />`tokenId`를 가진 자산이 `from`의 소유여야 함<br /> 호출한 사람이 `from`이 아닐 경우, `approve`나 `approvalForAll`로 이 토큰을 움직이는 것이 허용되어야 함 |
|          approve          |             address : `to`, uint256 : `tokenId`              |          -           | `to`로 `tokenId` 자산을 보내는 것을 허용<br />`Approval event`를 emit |   external    | `tokenId`가 존재<br />호출자가 token 소유자거나, 승인된 operator여야 함 |
|        getApproved        |                     uint256 : `tokenId`                      | address : `operator` |                 `tokenId`에 승인된 계정 반환                 | external view |                       `tokenId`가 존재                       |
|     setApprovedForAll     |        address : `operator`,<br />bool : `_approved`         |          -           | 호출자에 대한 `operator`를 설정하거나 제거<br />`operator`는 `transferFrom`이나 `safeTransferFrom` 호출할 수 있음 |   external    |              `operator`가 호출자가 아니어야 함               |
|     isApprovedForAll      |         address : `owner`,<br />address : `operator`         |         bool         |   `owner`의 모든 자산을 관리하는 `operator`가 있는지 반환    | external view |                              -                               |
|     safeTransferFrom      | address : `from`,  address : `to`,   uint256 :  `tokenId`, bytes calldata :  `data` |          -           | `from`에서 `to`로 `tokenId`를 안전하게 전송<br />Transfer event를 emit |   external    | `from`, `to`가 0 주소가 아님<br />`tokenId`를 가진 자산이 `from`의 소유여야 함<br /> 호출한 사람이 `from`이 아닐 경우, `approve`나 `approvalForAll`로 이 토큰을 움직이는 것이 허용되어야 함 |