const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("http://20.196.209.2:8545/"));
// const Tx = require('ethereumjs-tx');

export default async function sendTx(data, value, from, to, privateKey) {
  // from은 userAddress, to는 contractAddress
  // privateKey 입력 받게 해야?
  const txObject = {
    nonce: await web3.eth.getTransactionCount(from, 'pending'),
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    from,
    to,
    data,
    value : web3.utils.toHex(value),
  };
  const convertedKey = Buffer.from(privateKey, 'hex');
  const tx = new Tx(txObject);
  tx.sign(convertedKey);

  const serializedTx = tx.serialize();
  const raw = '0x'.concat(serializedTx.toString('hex'));

  web3.eth.sendSignedTransaction(raw)
    .once('transactionHash', (hash) => {
      console.info('transactionHash', hash);
    })
    .once('receipt', (receipt) => {
      console.info('receipt', receipt);
  }).on('error', console.error);
}
