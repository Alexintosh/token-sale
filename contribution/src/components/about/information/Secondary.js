import React, { PureComponent } from 'react';

export default class Secondary extends PureComponent{
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header"><span>SECONDARY SALE OF TOKENS POLICY/PLAN</span></h2>
                <p>
                    Leverj will hold the 30% of tokens for liquidity and operations. Leverj will stake most of these tokens in order to get FEE tokens. 
                    Leverj is therefore economically incentivized to hold on to these tokens and has no plans at present to sell large portions of these tokens on secondary market. 
                    As part of business development, some tokens may be given to financial institutions as part of partnership agreements that are likely to increase the net value of the system. Some may be given to incentivize new employees. 
                    In such cases, we will require lockout periods of sufficient length to ensure there is no major disruption in market value.
                </p> 
                <p>
                    Liquidity operations require that a portion (up to 2% of supply) of the tokens will be made available on the orderbook. 
                    Traders can buy from or sell into the book and this means our share of tokens will vary slightly based on market activity.
                </p>
            </div>
        )
    }
}