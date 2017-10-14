
pragma solidity ^0.4.11;

import "tokens/HumanStandardToken.sol";
import "./Disbursement.sol";
import "./SafeMath.sol";

contract Sale {

    /*
     * Events
     */

    event PurchasedTokens(address indexed purchaser, uint amount);
    event TransferredFoundersTokens(address beneficiary, address disburser, uint amount);
    event TransferredPreSaleTokens(address beneficiary, address disburser, uint amount);
    event LockUnsoldTokens(address msgsender, uint numTokensLocked, address disburser);

    /*
     * Storage
     */

    address public owner;
    address[2] public wallets;
    address public unsoldTokensWallet;
    uint[2] public splitRatios;
    HumanStandardToken public token;

    uint public freezeBlock;
    uint public whitelistSaleStartBlock;
    uint public publicSaleStartBlock;
    uint public endBlock;

    uint public foundersTokenCap;
    uint public foundersTokenAllocated = 0;

    uint public presaleTokenCap;
    uint public presaleTokenAllocated = 0;

    uint public whitelistTokenCap;
    uint public publicTokensSold = 0;

    bool public emergencyFlag = false;

    uint[2] public prices;

    mapping(address => uint) public whitelistRegistrants;
    bytes32 public termsAndConditionsIPFS;

    /*
     * Public functions
     */

    /// @dev Sale(): constructor for Sale contract
    /// @param _wallets list of wallets to split ETH raised
    /// @param _tokenName the token's human-readable name
    /// @param _tokenDecimals the number of display decimals in token balances
    /// @param _tokenSymbol the token's human-readable asset symbol
    /// @param _prices list of prices for each of the price levels (i.e., tokens sold thresholds)
    /// @param _whitelistSaleStartBlock block that the whitelist sale starts
    function Sale(
        address _owner,
        address[2] _wallets,
        uint[2] _splitRatios,
        uint256 _tokenSupply,
        string _tokenName,
        uint8 _tokenDecimals,
        string _tokenSymbol,
        uint _freezeBlock,
        uint _whitelistSaleStartBlock,
        uint _publicSaleStartBlock,
        uint _endBlock,
        uint _foundersTokenCap,
        uint _presaleTokenCap,
        uint _whitelistTokenCap,
        address _unsoldTokensWallet,
        uint[2] _prices)
        // TO-DO: re-enable these modifiers once constructor is adjusted for "stack too deep" error  
        //checkBlockNumberInputs(_freezeBlock, _whitelistSaleStartBlock, _publicSaleStartBlock, _endBlock)
        //validPrices(_prices)
    {
        owner = _owner;
        wallets = _wallets;
        splitRatios = _splitRatios;
        unsoldTokensWallet = _unsoldTokensWallet;

        token = new HumanStandardToken(_tokenSupply, _tokenName, _tokenDecimals, _tokenSymbol);
        
        freezeBlock = _freezeBlock;
        whitelistSaleStartBlock = _whitelistSaleStartBlock;
        publicSaleStartBlock = _publicSaleStartBlock;
        endBlock = _endBlock;

        foundersTokenCap = _foundersTokenCap;
        presaleTokenCap = _presaleTokenCap;
        whitelistTokenCap = _whitelistTokenCap;

        prices = _prices;

        wallets =  _wallets;
        splitRatios = _splitRatios;

        token.transfer(this, token.totalSupply());

        assert(token.balanceOf(this) == token.totalSupply());
        assert(token.balanceOf(this) == _tokenSupply);
    }

    function distributeFoundersTokens(
        address[] _founders,
        uint[] _foundersTokens,
        uint[] _vestingStartDates,
        uint[] _vestingDurations
    )
        public
        onlyOwner
        saleNotEnded
    {

        for(uint i = 0; i < _founders.length; i++) {
          if(foundersTokenAllocated + _foundersTokens[i] > foundersTokenCap){ break;}

          address founder = _founders[i];
          uint founderTokens = _foundersTokens[i];

          Disbursement disbursement = new Disbursement(
            founder,
            _vestingDurations[i],
            _vestingStartDates[i]
          );

          disbursement.setup(token);
          token.transfer(disbursement, founderTokens);
          foundersTokenAllocated += founderTokens;
          TransferredFoundersTokens(founder, disbursement, founderTokens);
        }

    }

    function distributePresaleTokens(
        address[] presaleBuyers,
        uint[] _presaleBuyersTokens,
        uint[] _vestingStartDates,
        uint[] _vestingDurations
    )
        public
        onlyOwner
        saleNotEnded
    {

        for(uint i = 0; i < presaleBuyers.length; i++) {
          if(presaleTokenAllocated + _presaleBuyersTokens[i] > presaleTokenCap){ break;}

          address presaleBuyer = presaleBuyers[i];
          uint presaleBuyerTokens = _presaleBuyersTokens[i];

          Disbursement disbursement = new Disbursement(
            presaleBuyer,
            _vestingDurations[i],
            _vestingStartDates[i]
          );

          disbursement.setup(token);
          token.transfer(disbursement, presaleBuyerTokens);
          presaleTokenAllocated += presaleBuyerTokens;
          TransferredPreSaleTokens(presaleBuyer, disbursement, presaleBuyerTokens);
        }

    }

    /// @dev purchaseToken(): function that exchanges ETH for tokens (main sale function)
    /// @notice You're about to purchase the equivalent of `msg.value` Wei in tokens
    function purchaseTokens()
        payable
        setupComplete
        notInEmergency
        saleInProgress
    {
        /* Calculate whether any of the msg.value needs to be returned to
           the sender. The purchaseAmount is the actual number of tokens which
           will be purchased. */
        uint purchaseAmount = msg.value / getCurrentPrice();
        uint excessAmount = msg.value % getCurrentPrice();

        if(publicTokensSold < whitelistTokenCap && block.number < whitelistSaleStartBlock){
            require(whitelistRegistrants[msg.sender] >= (msg.value - excessAmount));
            whitelistRegistrants[msg.sender] -= (msg.value-excessAmount);
        }

        // Cannot purchase more tokens than this contract has available to sell
        require(purchaseAmount <= token.balanceOf(this));

        // Return any excess msg.value
        if (excessAmount > 0) {
            msg.sender.transfer(excessAmount);
        }

        // Forward received ether minus any excessAmount to the wallet
        wallets[0].transfer(this.balance); //TODO split as per the ratios

        publicTokensSold += purchaseAmount;

        // Transfer the sum of tokens tokenPurchase to the msg.sender
        token.transfer(msg.sender, purchaseAmount);
        PurchasedTokens(msg.sender, purchaseAmount);
    }

    // this is made public so that anyone can call it since it's the communicated mechanism for handling unsold tokens
    function lockUnsoldTokens()
        saleEnded
    {
        //unsoldTokensWallet
        Disbursement disbursement = new Disbursement(
            unsoldTokensWallet,
            1*365*24*60*60,
            block.timestamp
        );

        disbursement.setup(token);
        uint amountToLock = token.balanceOf(this);
        token.transfer(disbursement, amountToLock);
        LockUnsoldTokens(msg.sender, amountToLock, disbursement);
    }

    /*
     * Private helper functions
     */ 

    function getCurrentPrice()
        private
        returns (uint)
    {
        //nice-to-have-update: make more generic
        if(publicTokensSold < whitelistTokenCap && block.number <= publicSaleStartBlock){
            return prices[0];
        }else{
            return prices[1];
        }
    }


    /*
     * Owner-only functions
     */

    function changeOwner(address _newOwner)
        onlyOwner
    {
        require(_newOwner != 0);
        owner = _newOwner;
    }

    function changePrices(uint[2] _newPrices)
        onlyOwner
        notFrozen
        validPrices(_newPrices)
    {
        prices = _newPrices;
    }

    function changeWallet(address[2] _wallets)
        onlyOwner
        notFrozen
    {
        for(uint i=0; i < _wallets.length; i++){
            require(_wallets[i] != 0);
        }

        wallets = _wallets;
    }

    function changeWhitelistStartBlock(uint _newBlock)
        onlyOwner
        notFrozen
    {
        require(block.number <= _newBlock && _newBlock < publicSaleStartBlock);

        freezeBlock = _newBlock - (whitelistSaleStartBlock - freezeBlock);
        whitelistSaleStartBlock = _newBlock;
    }

    function emergencyToggle()
        onlyOwner
    {
        emergencyFlag = !emergencyFlag;
    }
    
    // not a public function because we will call this based on off-chain data of already registered folks 
    function addWhitelistSignature(address _purchaser, uint _amount, uint8 _v, bytes32 _r, bytes32 _s){
        if(ecrecover(termsAndConditionsIPFS, _v, _r, _s) == _purchaser){
            whitelistRegistrants[_purchaser] = _amount;
        }
    }

    /*
     * Modifiers
     */
    modifier saleNotEnded {
        require(block.number < endBlock);
        _;
    }

    modifier saleEnded {
        require(block.number >= endBlock);
        _;
    }

    modifier saleStarted {
        require(block.number >= whitelistSaleStartBlock);
        _;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    modifier notFrozen {
        require(block.number < freezeBlock);
        _;
    }

    modifier frozen {
        require(block.number >= freezeBlock);
        _;
    }

    modifier saleInProgress {
        require(block.number >= whitelistSaleStartBlock && block.number < endBlock);
    _;
    }

    modifier setupComplete {
        assert((foundersTokenAllocated == foundersTokenCap) && (presaleTokenAllocated == presaleTokenCap));
        _;
    }

    modifier notInEmergency {
        assert(emergencyFlag == false);
        _;
    }

    modifier checkBlockNumberInputs(uint _freeze, uint _whitelistStart, uint _publicStart, uint _end) {
        require(_freeze >= block.number
        && _whitelistStart >= _freeze
        && _publicStart >= _whitelistStart
        && _end >= _publicStart);
    _;
    }

    modifier ownerOrSender(address _recipient){
        require(msg.sender == owner || msg.sender == _recipient);
        _;
    }

    modifier hasTokens(address _investor){
        require(token.balanceOf(_investor) > 0 );
        _;
    }

    modifier validPrices(uint[2] _prices){
        require(_prices.length > 0);

        for(uint i=0; i < _prices.length; i++){
            require(_prices[i] > 0);
        }

        _;
    }

}