import React, { PureComponent } from 'react';

export default class TokenSupply extends PureComponent{
    render(){
        return(
            <section id="token-supply" className="about-card">
                <h2 className="sub-header"><span>TOKEN SUPPLY</span></h2>
                <ul>
                    <li><b>1000</b> million Token Created</li>
                    <li><b>400</b> million Available for purchase*</li>
                    <li><b>200</b> million Founders</li>
                    <li><b>300</b> million Liquidity and Operations</li>
                    <li><b>100</b> million Partners</li>
                </ul>
                <p>*Unsold tokens will be locked for 12 months and be used for future marketing and partnerships</p>
            </section>
        )
    }
}