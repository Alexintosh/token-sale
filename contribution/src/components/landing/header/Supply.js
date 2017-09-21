import React, { PureComponent } from 'react';
import { information }          from '../../pages.json';

export default class Supply extends PureComponent {
    render(){
        return(
            <section id="supply" className="supply-component">
                <h3>{information.contributionCap} {information.coin}</h3>
                <p>Contribution cap (around $20 M)</p>
                <h3>{information.conversionRatio} <span>Tokens/1 {information.coin}</span></h3>
                <p>Conversion Ratio</p>
                <h3>{information.totalTokenSupply}</h3>
                <p>Total Tokens Supply</p>
            </section>
        )
    }
}