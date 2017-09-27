import React, { PureComponent } from 'react';
import { price }                from '../../pages.json';
import uuidv4                   from 'uuid/v4';

export default class Price extends PureComponent{
    render(){
        const rows = price.contribute.map((row)=>{
            return <tr key={uuidv4()}><td>{row.commited}</td><td>{row.price}</td></tr>
        })
        return(
            <section id="price">
                <div className="about-card borderless">
                    <div className="center-text">
                        <h2>Sale Price</h2>
                        <p>*minimum {price.minimum} {price.currency}</p>
                    </div>
                    <table className="table sale-table center-text">
                        <thead>
                            <tr>
                                <th className="center-text">Sale Stage</th>
                                <th className="center-text">Price ({price.coin}/{price.currency})</th>
                            </tr>
                        </thead>
                        <tbody>
                           {rows}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}