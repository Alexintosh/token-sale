import React, { PureComponent } from 'react';
import { price }                from '../../pages.json';

export default class Price extends PureComponent{
    render(){
        const rows = price.contribute.map((row)=>{
            return <tr><td>{row.commited}</td><td>{row.price}</td></tr>
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