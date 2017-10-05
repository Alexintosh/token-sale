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
            <section id="faq">
                <h2 className="sub-header fs-50"><span>FAQ</span></h2>
                <div id="define" className="accordian-header" onClick={() => this.displayAccordian('define',this.state.define)}>
                    What is Leverj?
                    <div className={"accordian-container" + (this.state.define ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What is Leverj?</p>
                        <p><span className="font-bold">A:</span> Leverj is a decentralized leveraged crypto exchange that provides solutions to the inherent risks seen in centralized trading platforms.</p>
                        <p><span className="font-bold">Q:</span> Why does Leverj use Ethereum as a base platform instead of Bitcoin?</p>
                        <p><span className="font-bold">A:</span> In the current state of the bitcoin network, the decentralized model has become prohibitively expensive. Ethereum transactions are faster and cheaper, making it the natural step forward for further developing a decentralized trading platform.</p>
                    </div>
                </div>
                <div id="exchange" className="accordian-header" onClick={() => this.displayAccordian('exchange',this.state.exchange)}>
                Decentralized Exchange
                    <div className={"accordian-container" + (this.state.exchange ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What risks are associated with centralized exchanges?</p>
                        <p><span className="font-bold">A:</span> The exposure of three core pieces of user information are inevitable in centralized exchanges. They include the identity of the user, user funds and user transaction history. In a traditional centralized exchange, this valuable information is at the mercy and competence of the exchange operators. The centralization of these valuables in the custody of an exchange are an attractive target for hackers, lawsuits and state actors. As seen over and over again, the risks and losses can be substantial.</p>
                        <p><span className="font-bold">Q:</span> How does Leverj avoid these risks?</p>
                        <p><span className="font-bold">A:</span> Leverj provides decentralized identity to avoid identity leaks and multi-signature accounts to provide complete user control over account funds. We also give the user complete control of funds by fully decentralizing the back-end.</p>
                    </div>
                </div>
                <div id="identity" className="accordian-header" onClick={() => this.displayAccordian('identity',this.state.identity)}>
                Decentralized Identity
                    <div className={"accordian-container" + (this.state.identity ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> What is decentralized identity?</p>
                        <p><span className="font-bold">A:</span> The user’s identity for any trade is simply a public key that controls the user’s coins. This brings financial privacy to trades that would be otherwise exposed on the blockchain. Given the ability to create identities at will, users are able to decentralize transaction histories. This works to further obfuscate the identity of the user and the amount of funds held by the user.</p>
                    </div>
                </div>
                <div id="ux" className="accordian-header" onClick={() => this.displayAccordian('ux',this.state.ux)}>
                UX
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
                New Features
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
                
                    <div className={"accordian-container" + (this.state.account ? '' : ' hide' )}>
                        <p><span className="font-bold">Q:</span> </p>
                        <p><span className="font-bold">A:</span> </p>
                        <p><span className="font-bold">Q:</span> </p>
                        <p><span className="font-bold">A:</span> </p>
                    </div>
                </div>
            </section>
        )
    }
}