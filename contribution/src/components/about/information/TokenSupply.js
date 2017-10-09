import React, { PureComponent } from 'react';
import ownership                from '../../../public/img/token_ownership.png';

export default class TokenSupply extends PureComponent{
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header"><span>TOKEN SUPPLY/ BREAKDOWN OF OWNERSHIP</span></h2>
                <div className="row">
                    <div className="col-sm-5">
                        <p>
                            The following pie chart provides the breakup of the tokens
                            distribution. All Tokens including pre-sale tokens are distributed
                            via smart contract, audited by Consensys and managed by the
                            independent escrow providers BraveNewCoin.com(BNC)
                        </p>
                    </div>
                    <div className="col-sm-7">
                        <img src={ownership} alt="Token Ownership" className="info-graph" />
                    </div>
                </div>
            </div>
        )
    }
}