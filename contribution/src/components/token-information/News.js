import React, { PureComponent } from 'react';
import bcn                      from '../../public/img/BCN.png';
import nasdaq                   from '../../public/img/nasdaq.jpg';
import merkle                   from '../../public/img/merkle.jpg';

export default class News extends PureComponent{
    render(){
        return(
            <section id="news-container">
                <div className="container">
                    <h2>News</h2>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={bcn} alt="Blockchain News Logo" className="news-image" />
                        </div>
                        <div className="col-sm-10">
                            <h3>Non-Custodial Derivatives Platform</h3>
                            <p>Leverj, a decentralized platform for cryptocurrency derivatives trading, which is supported by ConsenSys, the world’s largest Blockchain venture studio – plans to unveil its highly anticipated platform to traders interested in leveraged cryptocurrency trading.</p>
                            <p>The Seychelles-based project will enable users to place and manage positions on digital currencies, as well as futures on major equities indices and single stock futures, all in a decentralized way.</p>
                            <a href="http://www.the-blockchain.com/2017/09/19/leverj-announcesfully-functional-non-custodial-cryptocurrency-derivatives-trading-platform/" target="_blank" rel="noopener noreferrer">Read More</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={nasdaq} alt="Nasdaq Logo" className="news-image" />
                        </div>
                        <div className="col-sm-10">
                            <h3>First Steps Toward Trustless Bitcoin Futures Exchange</h3>
                            <p>Coinpit is taking significant and innovative steps to offer a safer alternative to Bitcoin's custodial futures exchanges. Thanks to Bitcoin's multi-signature technology, users that store bitcoins on Coinpit remain in complete control of their funds. Even if the exchange is hacked, goes bankrupt, or disappears completely, customers can in most cases still retrieve their money.</p>
                            <a href="http://www.nasdaq.com/article/coinpit-takes-first-steps-toward-trustless-bitcoin-futures-exchange-cm679644" target="_blank" rel="noopener noreferrer">Read More</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={merkle} alt="Merkle Logo" className="news-image" />
                        </div>
                        <div className="col-sm-10">
                            <h3>Blockchain & Bitcoin Conference Prague 2016</h3>
                            <p>Coinpit is a futures exchange which offers futures contracts denominated in Bitcoin. Currently, they offer inverse USD/BTC contracts. More contracts will be added based on demand. Furthermore, Coinpit is a pure Bitcoin in/out exchange and does not deal with any fiat, which eliminates any exchange rate risk. When it comes to security, Coinpit uses multi-sig addresses where a user’s private key is never transmitted to the exchange.</p>
                            <a href="http://themerkle.com/new-conference-speaker-bharath-rao-founder-of-coinpit-inc/" target="_blank" rel="noopener noreferrer">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}