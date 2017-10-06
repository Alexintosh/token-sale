import React, { PureComponent } from 'react';

export default class TokenSupply extends PureComponent{
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header"><span>TOKEN SUPPLY/ BREAKDOWN OF OWNERSHIP</span></h2>
                <div className="row">
                    <div className="col-md-5">
                        <p>
                            The following pie chart provides the breakup of the tokens
                            distribution. All Tokens including pre-sale tokens are distributed
                            via smart contract, audited by Consensys and managed by the
                            independent escrow providers BraveNewCoin.com(BNC)
                        </p>
                    </div>
                    <div className="col-md-7">

                    </div>
                </div>
            </div>
        )
    }
}