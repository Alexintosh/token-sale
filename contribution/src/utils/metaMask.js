import Web3     from 'web3';
import Promise  from 'bluebird';

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