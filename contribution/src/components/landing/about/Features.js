import React, { PureComponent } from 'react';
import Consensys                from '../../../public/img/consensyslogo.png';

export default class Features extends PureComponent{
    render(){
        return(
            <section id="features-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={Consensys} alt="feature-1" />
                                <h4>Decentralized Identity with Hardware Wallet Support</h4>
                                <p>Leverj DApp is designed as a two level tokens. The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={Consensys} alt="feature-1" />
                                <h4>Decentralized Identity with Hardware Wallet Support</h4>
                                <p>Leverj DApp is designed as a two level tokens. The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={Consensys} alt="feature-1" />
                                <h4>Decentralized Identity with Hardware Wallet Support</h4>
                                <p>Leverj DApp is designed as a two level tokens. The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={Consensys} alt="feature-1" />
                                <h4>Decentralized Identity with Hardware Wallet Support</h4>
                                <p>Leverj DApp is designed as a two level tokens. The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="features-card">
                                <img src={Consensys} alt="feature-1" />
                                <h4>Decentralized Identity with Hardware Wallet Support</h4>
                                <p>Leverj DApp is designed as a two level tokens. The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}