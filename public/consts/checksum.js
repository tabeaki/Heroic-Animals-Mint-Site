// ethers.js をインポート
const ethers = require('ethers');
const { fstat } = require('fs');
let {allowlistAddresses} = require ("./main1.js")
const fs = require("fs");

console.log(allowlistAddresses.length);
//first check
for(let i = 0; i < allowlistAddresses.length; i++){
    if (allowlistAddresses[i][0] != ethers.utils.getAddress(allowlistAddresses[i][0])){
        console.log(allowlistAddresses[i][0])
    }
}
//restructure
allowlistAddresses = allowlistAddresses.map(item => [ethers.utils.getAddress(item[0]), item[1]])
//check again and make output
let data = "[\n";
for(let i = 0; i < allowlistAddresses.length; i++){
    if (allowlistAddresses[i][0] != ethers.utils.getAddress(allowlistAddresses[i][0])){
        console.log(allowlistAddresses[i][0])
    }
    data = data + '    ' + JSON.stringify(allowlistAddresses[i]) + ',\n'
}
data = data + ']'


fs.writeFileSync("./newal.js", data);