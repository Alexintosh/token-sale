import React, { PureComponent } from 'react';

export default class ProjectOverview extends PureComponent { 
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header"><span>PROJECT OVERVIEW</span></h2>
                <p>
                    Leverj is a decentralized cryptocurrency derivatives trading platform. Using the Ethereum
                    blockchain, Leverj will provide novice and experienced traders with a more secure and seamless
                    platform for digital currency exchange. The platform will also offer services such as managed and
                    simulated trading, historical data replay, mentorship by experienced traders, and a marketplace for
                    trading indicators and strategies.
                </p>
            </div>
        )
    }
}