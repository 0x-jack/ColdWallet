var ethers = require("ethers");
var fs = require("fs");

const myWallet = ethers.Wallet.createRandom();

var coldWallet = {
    address: myWallet.address,
    publicKey: myWallet.publicKey,
    privateKey: myWallet.privateKey,
    mnemonic: myWallet.mnemonic,
}

fs.writeFile("privateWallet.json",JSON.stringify(coldWallet),
  function(err) {  
    if (err) throw err; 
    console.log("ColdWallet successfully.") 
});
