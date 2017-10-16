var assert = require('assert');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var MultiSigWallet = require('../lib/MultiSigWallet');

const signers = [web3.eth.accounts[0], web3.eth.accounts[1], web3.eth.accounts[2]];
const required = 3;

const wallet = MultiSigWallet(signers, required);