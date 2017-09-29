import React, { PureComponent } from 'react';
import cogs                     from '../../public/img/cogs.png';
import controls                 from '../../public/img/controls.png';
import stockgraph               from '../../public/img/stockgraph.png';
import globe                    from '../../public/img/globe.png';
import p2p                      from '../../public/img/peer2peer.png';

export default class Features extends PureComponent{
    render(){
        return(
            <section id="features-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={globe} alt="feature-1" />
                                <h5>Decentralized Identity with Hardware Wallet Support</h5>
                                <p>A decentralized identity can be used to authenticate, sign contracts, atleast documents, message other traders and selectively share media. Coinpit is the first and only exchange to support multi signature wallets where your private key can be held on a hardware wallet. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={p2p} alt="feature-1" />
                                <h5>Decentralized Identity with Hardware Wallet Support</h5>
                                <p>A decentralized identity can be used to authenticate, sign contracts, atleast documents, message other traders and selectively share media. Coinpit is the first and only exchange to support multi signature wallets where your private key can be held on a hardware wallet. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={cogs} alt="feature-1" />
                                <h5>Decentralized Identity with Hardware Wallet Support</h5>
                                <p>Discretionary entry and mechanical trade management enables traders to focus on market opportunities, eliminating trade management errosr. Since exchange funds are held-on-chain in segregated accounts, settlement is and withdrawal are immediate subject to blockchain latencies. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={stockgraph} alt="feature-1" />
                                <h5>Decentralized Identity with Hardware Wallet Support</h5>
                                <p>The plans and designs are already in place to build the next generation decentralized trading platform with advance features like Price Action Entries, Trade Replay Video, Simulated Trading, Historical Data Replay and Trading, Plugin framework and Zero-knowledge API keys. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={controls} alt="feature-1" />
                                <h5>Decentralized Identity with Hardware Wallet Support</h5>
                                <p>A marketplace for decentralized trading services is essential to a rich ecosystem of traders. Source indicators and strategies from fellow-senior traders to build, integrate and share your automated strategies. We provide you a plug-in framework and the market place. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}