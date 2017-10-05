import React, { PureComponent } from 'react';

export default class Supply extends PureComponent {
    render(){
        return(
            <section id="supply" className="supply-component">
                <div className="row">
                    <div className="col-md-4">
                        <h3>10,000 ETH</h3>
                        <p>Contribution cap (about $20M)</p>
                    </div>
                    <div className="col-md-4">
                        <h3>2,000 TOKENS/1 ETH</h3>
                        <p>Conversion Ratio</p>
                    </div>
                    <div className="col-md-4">
                        <h3>100,000</h3>
                        <p>Total Tokens Supply</p>
                    </div>
                </div>
            </section>
        )
    }
}