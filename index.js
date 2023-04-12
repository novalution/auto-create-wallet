const { Wallet, ethers } = require("ethers");
const moment = require('moment-timezone');
const fetch = require('node-fetch');
const fs = require('fs');
const figlet = require('figlet')
const chalk = require('chalk');
const FormData = require('form-data')
const readline = require("readline-sync");
const color = (text, color) => {
    return !color ? chalk.blueBright(text) : chalk.keyword(color)(text)
}
function createAccountEth() {
    const wallet = ethers.Wallet.createRandom();
    const privateKey = wallet.privateKey;
    const publicKey = wallet.publicKey;
    const mnemonic = wallet.mnemonic;
    return {
        privateKey,
        publicKey,
        mnemonic
    };
}


(async () => {
    console.log(color(figlet.textSync('=============', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('W A L L E T  C R E A T O R', { horizontalLayout: 'fullt' })))
    console.log(color(figlet.textSync('=============', { horizontalLayout: 'default' })))
    console.log(color('[DEV]'), color('novalution', 'yellow'))
    console.log(color('[~>>]'), color('BOT Started!', 'green'))
    const jumlah = readline.question(color('Jumlah akun : ', 'cyan'))

    for (let i = 0; i < jumlah; i++) {
        const createAccountEthResult = createAccountEth();

        const privateKey = createAccountEthResult.privateKey;
        const mnemonic = createAccountEthResult.mnemonic.phrase;
        const wallet = new Wallet(privateKey);
        const address = wallet.address;
        const data = `\n${address}\n${privateKey}\n${mnemonic}`;

        const fs = require('fs');


        // The path and filename of the text file that you want to save the data to
        const filename = 'result.txt';

        // Write the data to the text file
        console.log(chalk.blue(address));
        console.log(chalk.blue(privateKey));
        console.log(chalk.blue(mnemonic));
        fs.appendFile(filename, `${data}\n`, (err) => {
            if (err) throw err;
        });
        console.log(chalk.green.bold('Data saved to file.\n'));
    }
})();