const HumanStandardToken = artifacts.require("../contracts/HumanStandardToken");

contract('HumanStandardToken', function(accounts) {
    it("Verifying that the HumanStandardToken can be initialized", async () => {
        let contract = await HumanStandardToken.new(100,'ConsenSys',10,'CS','0x5b1869d9a4c187f2eaa108f3062412ecf0526b24',20);
        let name = await contract.name();
        let symbol = await contract.symbol();
        let decimals = await contract.decimals();
        let endBlock = await contract.endBlock();
        assert(name === 'ConsenSys', "Token Name not being set properly");
        assert(symbol === 'CS', "Token Symbol not being set properly");
        assert(JSON.parse(decimals) === 10, "Token Decimal not being set properly");
        assert(JSON.parse(endBlock) === 20, "endBlock not being set properly");
    });
    
    it("Verifying the balanceOf function call works correctly", async () => {
        let contract = await HumanStandardToken.new(100,'ConsenSys',10,'CS','0x5b1869d9a4c187f2eaa108f3062412ecf0526b24',20);
        let balance  = await contract.balanceOf(accounts[0]);
        assert(JSON.parse(balance) === 100, "Balances not being set properly");
    });

    it("Verifying the transfer function call works correctly", async () => {
        let contract = await HumanStandardToken.new(100,'ConsenSys',10,'CS','0x5b1869d9a4c187f2eaa108f3062412ecf0526b24',20);
        let balance  = await contract.balanceOf(accounts[0]);
        assert(JSON.parse(balance) === 100, "Balances not being set properly");
        let transfer  = await contract.transfer(accounts[1], 50);
        let balance0  = await contract.balanceOf(accounts[0]);
        let balance1  = await contract.balanceOf(accounts[1]);
        assert(JSON.parse(balance0) === 50, "Balances not being transfered properly from account[0]");
        assert(JSON.parse(balance1) === 50, "Balances not being transfered properly from account[1]");
    });

    it("Verifying the approve/allowance from function works correct", async () => {
        let contract = await HumanStandardToken.new(100,'ConsenSys',10,'CS','0x5b1869d9a4c187f2eaa108f3062412ecf0526b24',20);
        let balance  = await contract.balanceOf(accounts[0]);
        assert(JSON.parse(balance) === 100, "Balances not being set properly");
        let approve = await contract.approve(accounts[2], 60);
        let amount = await contract.allowance(accounts[0], accounts[2]);
        assert(JSON.parse(amount) === 60);
    })

    it("Verifying the approve from/ transfer from function works correctly", async () => {
        let contract = await HumanStandardToken.new(100,'ConsenSys',10,'CS','0x5b1869d9a4c187f2eaa108f3062412ecf0526b24',20);
        let balance  = await contract.balanceOf(accounts[0]);
        assert(JSON.parse(balance) === 100, "Balances not being set properly");
        let approve = await contract.approve(accounts[2], 60);
        let amount = await contract.allowance(accounts[0], accounts[2]);
        assert(JSON.parse(amount) === 60);
        let transferFrom = await contract.transferFrom(accounts[0], accounts[1], 60,{ from: accounts[2] });
        let postAmount = await contract.allowance(accounts[0], accounts[2]);
        let postBalance1 = await contract.balanceOf(accounts[1]);
        let postBalance0 = await contract.balanceOf(accounts[0]);
        assert(JSON.parse(postAmount) === 0);
        assert(JSON.parse(postBalance1) === 60);
        assert(JSON.parse(postBalance0) === 40)
    })
})
