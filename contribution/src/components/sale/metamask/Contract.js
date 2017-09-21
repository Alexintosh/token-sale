import React, { PureComponent } from 'react';

export default class Contract extends PureComponent{
    render(){
        return(
            <section id="contract-container">                
                <div className="center-text">
                    <h4>Contract</h4>
                    <p><span>Address: </span>{this.props.address}</p>
                    <p><span>View Online: </span><a href="https://github.com" target="_blank" rel="noopener noreferrer">View on Etherscan</a></p>
                </div>
            </section>
        )
    }
}