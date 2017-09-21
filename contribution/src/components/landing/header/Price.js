import React, { PureComponent } from 'react';

export default class Price extends PureComponent{
    render(){
        return(
            <section id="price">
                <div className="about-card">
                    <div className="center-text">
                        <h2>Sale Price</h2>
                        <p>*minimum $20,000 USD</p>
                    </div>
                    <table className="table sale-table">
                        <thead>
                            <tr>
                                <th>Amount Committed ($USD)</th>
                                <th>Price ($USD/GRID)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>$50,000</td>
                                <td>$0.90</td>
                            </tr>
                            <tr>
                                <td>$250,000</td>
                                <td>$0.85</td>
                            </tr>
                            <tr>
                                <td>$1,000,000</td>
                                <td>$0.80</td>
                            </tr>
                            <tr>
                                <td>$3,000,000+</td>
                                <td>$0.75</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}