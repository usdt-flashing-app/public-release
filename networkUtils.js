
// networkUtils.js
const validNetworks = ['ERC20', 'TRC20', 'BEP20'];

function validateNetwork(network) {
    return validNetworks.includes(network);
}

async function sendTransaction(signedTx) {
    console.log(`Broadcasting transaction to ${signedTx.network} network...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Transaction successfully sent: ${JSON.stringify(signedTx)}`);
            resolve({ status: 'success', txHash: `0x${Math.random().toString(36).substr(2, 64)}` });
        }, 3000);
    });
}

module.exports = { validateNetwork, sendTransaction };
