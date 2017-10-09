import React, { PureComponent } from 'react';

export default class Supply extends PureComponent {
    render(){
        return(
            <section id="supply" className="supply-component">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>250,000 ETH</h3>
                        <p>Contribution cap</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>3,000 TOKENS/1 ETH</h3>
                        <p>Conversion Ratio</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>1,000,000,000</h3>
                        <p>Total Tokens Supply</p>
                    </div>
                </div>
            </section>
        )
    }
}