import React, { Component } from 'react';

export default class FAQ extends Component {
    constructor(){
        super();
        this.state={
            define: false,
            exchange: false,
            identity: false,
            ux: false,
            features: false,
            account: false,
            withdrawals: false,
            token: false,
            tokenSystem: false,
            fee: false
        }
    }
    displayAccordian(name, current){
        this.setState({
            [name]: !current
        })
    }
    render(){
        return(
            <section id="faq" className="pv-20">
                <h2 className="sub-header fs-50 pt-30"><span>FAQ</span></h2>
                <div id="define" className="accordian-header" onClick={() => this.displayAccordian('define',this.state.define)}>
                    What is Leverj?<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.define ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What is Leverj?</p>
                        <p><span className="font-bold">A:</span> Leverj is a decentralized leveraged crypto exchange that provides solutions to the inherent risks seen in centralized trading platforms.</p>
                        <p><span className="font-bold">Q:</span> Why does Leverj use Ethereum as a base platform instead of Bitcoin?</p>
                        <p><span className="font-bold">A:</span> In the current state of the bitcoin network, the decentralized model has become prohibitively expensive. Ethereum transactions are faster and cheaper, making it the natural step forward for further developing a decentralized trading platform.</p>
                    </div>
                </div>
                <div id="exchange" className="accordian-header" onClick={() => this.displayAccordian('exchange',this.state.exchange)}>
                    Decentralized Exchange<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.exchange ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What risks are associated with centralized exchanges?</p>
                        <p><span className="font-bold">A:</span> The exposure of three core pieces of user information are inevitable in centralized exchanges. They include the identity of the user, user funds and user transaction history. In a traditional centralized exchange, this valuable information is at the mercy and competence of the exchange operators. The centralization of these valuables in the custody of an exchange are an attractive target for hackers, lawsuits and state actors. As seen over and over again, the risks and losses can be substantial.</p>
                        <p><span className="font-bold">Q:</span> How does Leverj avoid these risks?</p>
                        <p><span className="font-bold">A:</span> Leverj provides decentralized identity to avoid identity leaks and multi-signature accounts to provide complete user control over account funds. We also give the user complete control of funds by fully decentralizing the back-end.</p>
                    </div>
                </div>
                <div id="identity" className="accordian-header" onClick={() => this.displayAccordian('identity',this.state.identity)}>
                    Decentralized Identity<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.identity ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What is decentralized identity?</p>
                        <p><span className="font-bold">A:</span> The user’s identity for any trade is simply a public key that controls the user’s coins. This brings financial privacy to trades that would be otherwise exposed on the blockchain. Given the ability to create identities at will, users are able to decentralize transaction histories. This works to further obfuscate the identity of the user and the amount of funds held by the user.</p>
                    </div>
                </div>
                <div id="ux" className="accordian-header" onClick={() => this.displayAccordian('ux',this.state.ux)}>
                    UX<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.ux ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> How does the UX of Leverj compare to the UX of a centralized exchange?</p>
                        <p><span className="font-bold">A:</span> The UX of Leverj will be every bit as seamless as the top centralized exchanges, as while we refuse to compromise on security, we likewise refuse to compromise on usability.</p>
                        <p><span className="font-bold">Q:</span> How does the UX of Leverj compare to the UX of other decentralized exchange?</p>
                        <p><span className="font-bold">A:</span> There are many decentralized exchanges, but none offer leveraged trading. There are many high speed exchanges, but none are non-custodial. We offer the user a high-speed non-custodial leveraged exchange, complete with all of the usability features seen in the top centralized exchanges.</p>
                        <p><span className="font-bold">Q:</span> What features can the user expect on Leverj?</p>
                        <p><span className="font-bold">A:</span> High liquidity, tight spreads, low slippage, atomic stops, hardware key authentication, near-instant settlement, proof-of-audit embedded in blockchain, zero-knowledge API keys, and into the near-future, price action entries, trade replay videos, managed trading and simulated trading.</p>
                    </div>
                </div>
                <div id="features" className="accordian-header" onClick={() => this.displayAccordian('features',this.state.features)}>
                    New Features<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.features ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What are price action entries?</p>
                        <p><span className="font-bold">A:</span> Price action entries are intended to give traders the opportunity to steer clear of FOMO-driven trades. Hesitation from a trader reacting too late once the price moves with unexpected strength can lead to entries too close to the top or bottom of a move, and exits that often leave the trader’s PNL at a loss. Price action entries allow the trader to quickly build a position free from absolute price levels and remain focused on the unfolding market structure. This allows for ease of entries and exits, reducing unexpected losses and suboptimal exits.</p>
                        <p><span className="font-bold">Q:</span> How are trade replay videos used?</p>
                        <p><span className="font-bold">A:</span> The best way to improve trading is for the trader to observe his or her own trades. Trade replay videos allow the trader to view how a trade was planned and executed, from placing the entry order, to stop management to eventual exit. Video replay can be used to document trading, share with and teach other traders or simply to keep an archive of one’s greatest trading moments.</p>
                        <p><span className="font-bold">Q:</span> What is managed trading?</p>
                        <p><span className="font-bold">A:</span> Managed trading presents an attractive alternative to those who have the capital but not the skill to trade. Simply “follow” or replicate trades of highly skilled traders automatically in exchange for a percentage of the profits.</p>
                        <p><span className="font-bold">Q:</span> What is simulated trading?</p>
                        <p><span className="font-bold">A:</span> Simulated trading enables testing out ideas and fine tuning trading techniques with real-time market data while avoiding market risk</p>
                    </div>
                </div>
                <div id="account" className="accordian-header" onClick={() => this.displayAccordian('account',this.state.account)}>
                    Accessing Your Account <i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.account ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> How do logins work without username/password?</p>
                        <p><span className="font-bold">A:</span> The UX is loginless. Accounts are created simply by generating a private key. This private key will be downloadable to your computer via JSON file for ease of access to your account from different browsers.</p>
                        <p><span className="font-bold">Q:</span> Will you also be able to access the account with a JSON file? Or will you have to paste the private key each time?</p>
                        <p><span className="font-bold">A:</span> The UX is loginless. The user only need to use the JSON when accessing from a new browser. Zero-knowledge API keys are also available, which allows the user to trade without private key. This allows for trading without the ability to move coins.</p>
                        <p><span className="font-bold">Q:</span> What is a Zero-knowledge API key?</p>
                        <p><span className="font-bold">A:</span> Zero-knowledge API keys (ZKA) enable integration with vendors and partners without relying on transport and storage secrecy.</p>
                    </div>
                </div>
                <div id="withdrawals" className="accordian-header" onClick={() => this.displayAccordian('withdrawals',this.state.withdrawals)}>
                    Deposits/ Withdrawals<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.withdrawals ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What currencies will I be able to deposit to trade on Leverj?</p>
                        <p><span className="font-bold">A:</span> Leverj uses ETH as the sole currency of the base platform. Deposits will only be made available in ETH as well as listed ERC20 tokens.</p>
                        <p><span className="font-bold">Q:</span> Is there a plan for minimizing slow withdrawal risks if/when the ETH blockchain gets congested, as has happened on other exchanges?</p>
                        <p><span className="font-bold">A:</span> Withdrawal delays will depend on the blockchain congestion. By treading lightly on the blockchain, an increase in exchange volume will not cause a proportional increase in our blockchain footprint. Since blockchain congestion does not impact trading but only withdrawals, we are able to be responsive and scale the trading part of it in the case of severe blockchain congestion.</p>
                    </div>
                </div>
                <div id="token" className="accordian-header" onClick={() => this.displayAccordian('token',this.state.token)}>
                    LEV Token<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.token ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What is the utility of the LEV token?</p>
                        <p><span className="font-bold">A:</span> LEV is the primary token in our two-level token system. It is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply</p>
                        <p><span className="font-bold">Q:</span> When will tokens be distributed?</p>
                        <p><span className="font-bold">A:</span> Within one month of the end of the token sale. Ideally tokens will be distributed within the first week following the token sale, but at most it will be no longer than one month.</p>
                        <p><span className="font-bold">Q:</span> Immediately following distribution, where can I trade my LEV token?</p>
                        <p><span className="font-bold">A:</span> A centralized trading exchange will be created for our tokens to start with.</p>
                    </div>
                </div>
                <div id="tokenSystem" className="accordian-header" onClick={() => this.displayAccordian('tokenSystem',this.state.tokenSystem)}>
                    2-Level Token System<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.tokenSystem ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What is a 2-level token system?</p>
                        <p><span className="font-bold">A:</span> Many DApps use bi-level tokens to separate value from utility. The two level token system has been carefully crafted using economics and game theory to incentivize liquidity and to quickly grow a rich ecosystem.</p>
                        <p><span className="font-bold">Q:</span> What is the 2nd level token?</p>
                        <p><span className="font-bold">A:</span> The secondary token is the FEE token. It is the accounting mechanism to ensure the rights of LEV can be exercised fully in a decentralized manner.</p>
                    </div>
                </div>
                <div id="fee" className="accordian-header" onClick={() => this.displayAccordian('fee',this.state.fee)}>
                    FEE Token<i className="fa fa-plus pull-right fs-25 pt-8 pr-20" aria-hidden="true"></i>
                    <div className={"accordian-container" + (this.state.fee ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> Will FEE tokens be distributed along with LEV tokens?</p>
                        <p><span className="font-bold">A:</span> No. Unlike the LEV token which is created only on the ICO issuance with a permanently fixed supply, FEE tokens can be generated by LEV token holders by freezing the LEV token in a smart contract for a fixed duration. The amount of FEE generated is determined by the amount of LEV being frozen, as well as the exchange’s trading volume at the time that the LEV tokens are frozen.</p>
                        <p><span className="font-bold">Q:</span> What value do I gain from acquiring FEE tokens?</p>
                        <p><span className="font-bold">A:</span> By staking LEV tokens and ultimately acquiring FEE tokens, a trader is able to trade on the Leverj platform without having to pay fees in ETH. The benefit of paying fees in FEE tokens instead of ETH comes into play when the FEE/ETH market is trading below the face FEE price of 0.0001 ETH. Since some LEV stakers will sell FEE on the market, it will provide sell pressure for traders to buy FEE with ETH at a discount to save money on trading fees.</p>
                        <p><span className="font-bold">Q:</span> Can I buy FEE tokens if I don’t have any LEV to stake?</p>
                        <p><span className="font-bold">A:</span> Yes. There will be a FEE/ETH spot market for traders interested in paying trading fees in FEE to purchase the token using ETH.</p>
                    </div>
                </div>
            </section>
        )
    }
}