import React, { PureComponent } from 'react';
import metamask                 from '../../public/img/metamask.png';
import mew                      from '../../public/img/mew.png';
import pdf                      from '../../public/documents/LEV_Token_Purchase_Instructions.pdf'

export default class Contribute extends PureComponent {
    render(){
        return(
            <section id="contribute" className="pt-100 about-card">
                <div className="row">
                    <div className="col-sm-10">
                        <h2 className="sub-header-large"><span>HOW TO CONTRIBUTE</span></h2>
                        <p className="font-bold">
                            You can contribute to the LEV token sale using MyEtherWallet or MetaMask. For detailed instructions  
                            <a href={pdf} target="_blank" rel="noopener noreferrer"> click on this PDF <i className="fa fa-file-pdf-o"></i></a></p>
                        <p>
                            To join the Leverj token sale, you can purchase LEV tokens directly from the Token Sale smart contract. Check out this guide to learn how to purchase using MyEtherWallet and MetaMask. 
                        </p>
                        <p className="important-notes">IMPORTANT NOTES</p>
                        <ul>
                            <li>
                                Do not send ETH directly to the LEV token sale contract address. Please follow instruction below on how to properly execute the purchase Tokens() smart contract function in order to purchase LEV tokens.                            
                            </li>
                            <li>
                                DO NOT send funds from exchanges such as Poloniex, Bitfinex, Bittrex, Coinbase, GDAX, etc. Your LEV may be lost if you do.
                            </li>
                            <li>
                                Do not send ether before the specified start block number, which will be announced and published on this page closer to the public sale date. 
                            </li>
                            <li>
                                We recommend using the geth light client to avoid network congestion if you know how to use it. If you are new, read our guide on how to purchase using MyEtherWallet or MetaMask.                            
                            </li>
                            <li>
                                Only ETH is accepted. Do no try sending anything other than ETH. *Always double check addresses you are sending ETH to.
                            </li>
                            <li>
                                By participating in the token sale, you agree to the LEV token sale 
                                <a href="https://leverj.io/tc.html" target="_blank" rel="noopener noreferrer"> terms and conditions.</a>
                            </li>
                            <li>
                                All transactions sent to LEV token sale contract are viewable on etherscan website.
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2 center-text">
                        <div className="contribute-img">
                            <img src={metamask} className="contribute-img" alt="MetaMask" />
                            <p className="fs-20 font-bold pt-10">MetaMask</p>
                            <img src={mew} className="contribute-img" alt="My Ether Wallet" />
                            <p className="fs-20 font-bold pt-10">My Ether Wallet</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}