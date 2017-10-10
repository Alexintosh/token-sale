import React, { PureComponent } from 'react';

export default class Escrow extends PureComponent {
    render(){
        return (
            <div className="about-card">
                <h2 className="sub-header"><span>ESCROW MULTI-SIG DETAILS</span></h2>
                <h4 className="center-mobile-h">Multisig Key Setup - 3 of 5</h4>
                <p># Keys Key Holder</p>
                <ol>
                    <li>ConsenSys</li>
                    <li>BraveNewCoin</li>
                    <li>Leverj</li>
                </ol>
            </div>
        )
    }
}