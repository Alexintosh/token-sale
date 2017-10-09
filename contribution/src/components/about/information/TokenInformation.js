import React, { PureComponent } from 'react';

export default class TokenInformation extends PureComponent{
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header-large"><span>TOKEN INFORMATION</span></h2>
                <p>
                    Leverj App is designed as a two level token. The primary token LEV is of fixed supply and
                    represents a license to transact on the platform proportional to the percentage ownership of the
                    token supply. The secondary token FEE is the accounting mechanism to ensure the right of FEE
                    can be exercised fully in a decentralized manner. The LEV can be utilized to stake and receive the
                    FEE created proportional to platform volume.
                </p>
                <div className="row center-text">
                    <div className="col-sm-4">
                        <div className="token-info-background">
                            <h3>250,000 ETH</h3>
                            <p>Contribution cap</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="token-info-background">
                            <h3>3,000 TOKENS/1 ETH</h3>
                            <p>Conversion Ratio</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="token-info-background">
                            <h3>1,000,000,000</h3>
                            <p>Total Tokens Supply</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}