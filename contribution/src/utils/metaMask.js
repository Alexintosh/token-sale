import Web3     from 'web3';
import Promise  from 'bluebird';
import { contracts }    from '../contracts/contracts.json';

var web3;
var registerContract;

//// Ropsten network 
//// 0xa85af9d9a994a27d85837e91ca71a152bf8c9d4a

export const getMetaMask = (callback) => {
    if(typeof window.web3 !== "undefined" && typeof window.web3.currentProvider !== "undefined") {
        var web3 = new Web3(window.web3.currentProvider);
        Promise.all([web3.eth.getAccounts(), web3.eth.getBlockNumber()]).then((res)=>{
            if(res[0].length > 0){
                Promise.all([web3.eth.getBalance(res[0][0],res[1])]).then((accountBalance)=>{
                    callback({error: null, address: res[0], balance: accountBalance});
                })
            }else{
                callback({error: null, address: null});
            }
        })
    }
    else{
        callback({error: "no web3"});
    }
}

export const getWeb3 = (callback) => {
    if(typeof window.web3 !== "undefined" && typeof window.web3.currentProvider !== "undefined") {
        web3 = new Web3(window.web3.currentProvider);
        Object.keys(contracts).forEach((contract) => {
        if (contract.split(':').length > 1)
            contracts[contract.split(':')[1]] = contracts[contract]
        })
        registerContract = web3.eth.contract(JSON.parse(contracts.Register.abi));
        callback({error: null});
    }
    else{
        callback({error: "no web3"});
    }
}

export const deployContract = (callback) => {
    getWeb3((provider)=>{
        if(provider.error === null){
            web3.eth.getAccounts((err, addresses) => {
                if(addresses.length > 0){
                    var bin = contracts.Register.bin;
                    var options = {from: addresses[0], data: "0x" + bin, gas: 4465034};
                    
                    registerContract.new(options, (error, contract) => {
                        if(!error){
                            if(!contract.address){
                                console.log(`Transaction hash: ${contract.transactionHash}`);
                            }else{
                                console.log(`Contract Mined: ${contract.address}`);
                                callback({error: "null"});
                            }
                        }else{
                            console.log("Error:",err);
                            callback({error: "error"});
                        }
                    })
                }
            })
        }
    })    
}

export const registerUser = (name, email, address, country, amount, countryCheck, callback) => {
    getWeb3((provider)=>{
        if(provider.error === null){
            web3.eth.getAccounts((err, addresses) => {
                if(addresses.length > 0){
                    var options = {from: addresses[0], gas: 4476768};
                    var hash = web3.sha3(name + email + address + country + amount + countryCheck)
                    console.log(hash);
                    registerContract.at("0xa85af9d9a994a27d85837e91ca71a152bf8c9d4a").addUser(
                    hash, 
                    options, (error, txHash) => {
                        if(!error){
                            console.log(`Transaction hash: ${txHash}`);
                            callback({error: null})
                        }else{
                            console.log("Error:",err);
                            callback({error: "error"});
                        }
                    })
                }
            })
        }
    })
}

export const signTransaction = (name, email, address, country, amount, countryCheck, callback) => {
    getWeb3((provider)=>{
        if(provider.error === null){
            web3.eth.getAccounts((err, addresses) => {
                if(addresses.length > 0){
                    var hash = web3.sha3(name + email + address + country + amount + countryCheck)
                    
                    web3.eth.sign(addresses[0], hash, (err, txHash)=>{
                        console.log(txHash);
                    })
                }
            })
        }
    })
}