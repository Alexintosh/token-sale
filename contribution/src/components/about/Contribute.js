import React, { PureComponent } from 'react';
import metamask                 from '../../public/img/metamask.png';
import mew                      from '../../public/img/mew.png';

export default class Contribute extends PureComponent {
    render(){
        return(
            <section id="contribute" className="about-card pv-20">
                <div className="row">
                    <div className="col-md-10">
                        <h2 className="sub-header fs-50"><span>HOW TO CONTRIBUTE</span></h2>
                        <p className="font-bold">You can participate to the token sale through MyEtherWallet or MetaMask for detailed instructions click on this PDF.</p>
                        <p>To join the GRID token sale, you can purchase GRID tokens directly from the Token Sale smart contract. Check out this guide to
                            learn how to purchase using MyEtherWallet, Mist, Parity and MetaMask. To view the GRID token sale smart contract address,
                            click the Reveal Smart Contract Address button above, and accept GRID token purchase agreement . The button will remain
                            disabled until shortly before the token launch goes live.
                        </p>
                        <p>IMPORTANT NOTES</p>
                        <ul>
                            <li>
                                Do not send ETH directly to the GRID token sale contract address. Please follow instruction below on how to properly execute
                                the purchaseTokens() smart contract function in order to purchase GRID tokens.
                            </li>
                            <li>
                                DO NOT send funds from exchanges such as Poloniex, Bitfinex, Bittrex, Coinbase, GDAX, etc. Your GRID may be lost if you do.
                            </li>
                            <li>
                            Do not send ether before the specified start block number found above. You can view the last block number on etherscan.
                            </li>
                            <li>
                                We recommend using the geth light client to avoid network congestion if you know how to use it. If you are new, read our guide
                                on how to purchase using MyEtherWallet, Mist, Parity or MetaMask.
                            </li>
                            <li>
                                Only ETH is accepted. Do no try sending anything other than ETH. *Always double check addresses you are sending ETH to.
                            </li>
                            <li>
                                By participating in the token sale, you agree to the GRID token purchase agreement.
                            </li>
                            <li>
                                All transactions sent to GRID token sale contract are viewable on etherscan website.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 center-text">
                        <div className="pt-80">
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