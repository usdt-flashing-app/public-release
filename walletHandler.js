
// walletHandler.js
const crypto = require('crypto');

function generateWallet() {
    return {
        address: `0x${crypto.randomBytes(20).toString('hex')}`,
        privateKey: crypto.randomBytes(32).toString('hex')
    };
}

function signTransaction(transaction, privateKey) {
    const hash = crypto.createHash('sha256').update(JSON.stringify(transaction)).digest('hex');
    return {
        ...transaction,
        signature: `${hash}:${privateKey}`
    };
}

module.exports = { generateWallet, signTransaction };
