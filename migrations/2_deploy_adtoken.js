/* global artifacts */

const Sale = artifacts.require('./Sale.sol');
const fs = require('fs');
const BN = require('bn.js');

module.exports = (deployer, network, accounts) => {
  let saleConf;
  let tokenConf;
  let preBuyersConf;
  let foundersConf;

  if (network === 'development') {
    saleConf = JSON.parse(fs.readFileSync('./conf/testSale.json'));
    tokenConf = JSON.parse(fs.readFileSync('./conf/testToken.json'));
    preBuyersConf = JSON.parse(fs.readFileSync('./conf/testPreBuyers.json'));
    foundersConf = JSON.parse(fs.readFileSync('./conf/testFounders.json'));

    saleConf.owner = accounts[0];
    fs.writeFileSync('./conf/testSale.json', JSON.stringify(saleConf, null, '  '));

    const pad = 10; // We use addresses from 0-3 for actors in the tests.
    Object.keys(foundersConf.founders).map((curr, i) => {
      foundersConf.founders[curr].address = accounts[i + pad];
      return undefined;
    });
    fs.writeFileSync('./conf/testFounders.json', JSON.stringify(foundersConf, null, '  '));
  } else {
    saleConf = JSON.parse(fs.readFileSync('./conf/sale.json'));
    tokenConf = JSON.parse(fs.readFileSync('./conf/token.json'));
    preBuyersConf = JSON.parse(fs.readFileSync('./conf/preBuyers.json'));
    foundersConf = JSON.parse(fs.readFileSync('./conf/founders.json'));
  }

  const preBuyers = [];
  const preBuyersTokens = [];
  Object.keys(preBuyersConf).map((curr) => {
    preBuyers.push(preBuyersConf[curr].address);
    preBuyersTokens.push(new BN(preBuyersConf[curr].amount, 10));
    return undefined;
  });

  const founders = [];
  const foundersTokens = [];

  Object.keys(foundersConf.founders).map((recipient) => {
    founders.push(foundersConf.founders[recipient].address);
    foundersTokens.push(new BN(foundersConf.founders[recipient].amount, 10));
    return undefined;
  });

  const vestingDates = [];
  Object.keys(foundersConf.vestingDates).map((date) => {
    vestingDates.push(foundersConf.vestingDates[date]);
    return undefined;
  });

  return deployer.deploy(Sale,
    saleConf.owner,
    saleConf.wallet,
    tokenConf.initialAmount,
    tokenConf.tokenName,
    tokenConf.decimalUnits,
    tokenConf.tokenSymbol,
    saleConf.price,
    saleConf.startBlock,
    saleConf.freezeBlock,
  )
    .then(() => Sale.deployed())
    .then(sale => sale.distributePreBuyersRewards(
      preBuyers,
      preBuyersTokens,
    ))
    .then(() => Sale.deployed())
    .then(sale => sale.distributeFoundersRewards(
      founders,
      foundersTokens,
      vestingDates,
    ));
};
