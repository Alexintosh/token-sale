import React, { PureComponent } from 'react';

export default class TokenInformation extends PureComponent{
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header"><span>TOKEN DESCRIPTION</span></h2>
                <p>
                    Leverj DApp is designed as a two level token. 
                    The primary token LEV is of fixed supply and represents a license to transact on the platform proportional to the percentage ownership of the token supply. 
                    The secondary token FEE is the accounting mechanism to ensure the right of FEE can be exercised fully in a decentralized manner. 
                    LEV can be utilized to stake and receive the FEE created proportional to platform volume.
                </p>
            </div>
        )
    }
}