import React, { PureComponent } from 'react';

export default class Whitepaper extends PureComponent {
    render(){
        return (
            <section id="whitepaper" className="pv-20">
                <h2 className="sub-header fs-50 pt-30"><span>WHITEPAPER</span></h2>
                <h4 className="font-bold fs-20">SECURE/ TRANSPARENT/ DECENTRALIZED</h4>
                <p>
                    LeverJ decentralizes the most desirable features of derivatives trading by implementing them in cryptocurrencies and eliminating points of friction. 
                    With a tight focus on derivatives trading and the supporting ecosystem, LeverJ has taken the approach of defining the product frst. 
                    We have built a functioning exchange with a usable UI (user interface), decentralized identity, and provable audit. 
                    We plan to decentralize the back-end and add ecosystem features that will enable large players to move into the cryptocurrency world.
                </p>
                <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-file-pdf-o pr-20"></i>
                    Read Whitepaper
                </a>
                <h4 className="font-bold fs-20">CUSTODIAL DECENTRALIZATION/FRAUD-PROOFS</h4>
                <p>
                    While centralized exchanges are very responsive, they are highly susceptible to custodial risk. 
                    Fully decentralized exchanges (DEX) suffer from high latency and high cost, making them impractical for high volume use. 
                    Using the on-chain order books and order matching introduce a variety of performance and economic issues that make current DEX unusable. 
                    Leverj resolves the trade-offs between centralized and decentralized options by decentralizing safety-critical functions such as custody and centralizing the speed-critical functions such as order matching. 
                    Custodial decentralization is done cheaply taking into account blockchain limitations such as congestion and probabilistic finality.
                </p>
                <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-file-pdf-o pr-20"></i>
                    Read Yellowpaper
                </a>
            </section>
        )
    }
}