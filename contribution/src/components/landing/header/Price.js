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
                <div className="about-card">
                    <div className="center-text">
                        <h2>Sale Price</h2>
                        <p>*minimum {price.minimum} {price.currency}</p>
                    </div>
                    <table className="table sale-table">
                        <thead>
                            <tr>
                                <th>Amount Committed (${price.currency})</th>
                                <th>Price (${price.currency}/{price.coin})</th>
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