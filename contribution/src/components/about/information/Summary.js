import React, { PureComponent } from 'react';

export default class Summary extends PureComponent{
    render(){
        return(
            <section id="summary" className="about-card">
                <h2 className="sub-header"><span>Summary</span></h2>
                <p>The following are some useful highlights for the LEV token sale</p>
                <div className="row center-text">
                    <div className="col-sm-4">
                        <div className="token-info-background">
                            <h3>250M Tokens</h3>
                            <p>Total Available for Sale</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="token-info-background">
                            <h3>1ETH/ 3,000 LEV</h3>
                            <p>Conversion Ratio</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="token-info-background">
                            <h3>83,333 ETH</h3>
                            <p>Contribution Cap</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}