import React, { PureComponent } from 'react';

export default class TokenSupply extends PureComponent{
    render(){
        return(
            <section id="token-supply" className="about-card">
                <h2 className="sub-header"><span>TOKEN SUPPLY</span></h2>
                <ul>
                    <li><span className="bold-font">1000</span> million Token Created</li>
                    <li><span className="bold-font">400</span> million Available for purchase*</li>
                    <li><span className="bold-font">200</span> million Founders</li>
                    <li><span className="bold-font">300</span> million Liquidity and Operations</li>
                    <li><span className="bold-font">100</span> million Partners</li>
                </ul>
                <p>*Unsold tokens will be locked for 12 months and be used for future marketing and partnerships</p>
            </section>
        )
    }
}