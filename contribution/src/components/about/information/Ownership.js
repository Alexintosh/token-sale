import React, { PureComponent } from 'react';
import ownership                from '../../../public/img/token_ownership.png';

export default class Ownership extends PureComponent{
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header"><span>BREAKDOWN OF OWNERSHIP</span></h2>
                <p>
                    The following pie chart provides the breakup of the token distribution. All tokens including pre-sale tokens are distributed via smart contract, which will be audited by Consensys Diligence before the public sale, and managed by the independent escrow providers BraveNewCoin.com(BNC)
                </p>
                <div className="center-text">
                    <img src={ownership} alt="Token Ownership" className="info-graph" />
                </div>
            </div>
        )
    }
}