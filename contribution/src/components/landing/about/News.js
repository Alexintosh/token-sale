import React, { PureComponent } from 'react';
import bharath                  from '../../../public/img/bharath.jpg';

export default class News extends PureComponent{
    render(){
        return(
            <section id="news-container">
                <div className="container">
                    <h2>News</h2>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={bharath} alt="news1" />
                        </div>
                        <div className="col-sm-10">
                            <h3>News headline tag number 1</h3>
                            <p>Leverj DApp is designed as a two level tokens. The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. The secondary token FEE is the accounting mechanism to ensure the rights of FEE can be exercised fully in a decentralized manner. The LEV can be utilized to stake and receive the FEE created proportional to platform volume.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={bharath} alt="news1" />
                        </div>
                        <div className="col-sm-10">
                            <h3>News headline tag number 1</h3>
                            <p>Leverj DApp is designed as a two level tokens. The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. The secondary token FEE is the accounting mechanism to ensure the rights of FEE can be exercised fully in a decentralized manner. The LEV can be utilized to stake and receive the FEE created proportional to platform volume.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={bharath} alt="news1" />
                        </div>
                        <div className="col-sm-10">
                            <h3>News headline tag number 1</h3>
                            <p>Leverj DApp is designed as a two level tokens. The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. The secondary token FEE is the accounting mechanism to ensure the rights of FEE can be exercised fully in a decentralized manner. The LEV can be utilized to stake and receive the FEE created proportional to platform volume.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}