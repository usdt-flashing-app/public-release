
// flashUSDT.js
const { generateWallet, signTransaction } = require('./walletHandler');
const { sendTransaction, validateNetwork } = require('./networkUtils');

class FlashUSDT {
    constructor(amount, recipient, network) {
        this.amount = amount;
        this.recipient = recipient;
        this.network = network;
        this.wallet = generateWallet();
    }

    async executeFlashTransaction() {
        if (!validateNetwork(this.network)) {
            throw new Error('Invalid network selected.');
        }
        
        console.log(`Generating FlashUSDT transaction for ${this.amount} USDT to ${this.recipient}...`);
        const transaction = {
            from: this.wallet.address,
            to: this.recipient,
            value: this.amount,
            network: this.network,
            timestamp: Date.now()
        };
        
        const signedTx = signTransaction(transaction, this.wallet.privateKey);
        return await sendTransaction(signedTx);
    }
}

module.exports = FlashUSDT;
