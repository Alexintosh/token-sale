
var HumanStandardToken = artifacts.require("../installed_contracts/tokens/contracts/HumanStandardToken.sol");

module.exports = function(deployer) {
  deployer.deploy(HumanStandardToken);
};