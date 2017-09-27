import React, { PureComponent } from 'react';
import { information }          from '../../pages.json';

export default class Supply extends PureComponent {
    render(){
        return(
            <section id="supply" className="supply-component">
                <h3>{information.contributionCap} Ether</h3>
                <p>Contribution cap</p>
                <h3>32,500 Ether</h3>
                <p>Presale Contribution cap</p>
                <h3>83,333 Ether</h3>
                <p>Public Sale Contribution cap</p>
                <h3>{information.totalTokenSupply} LEV</h3>
                <p>Total Tokens Supply</p>
            </section>
        )
    }
}