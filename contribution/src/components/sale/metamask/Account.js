import React, { PureComponent } from 'react';

export default class Account extends PureComponent {
    render(){
        return(
            <section id="user-account">
                <div className="center-text">
                    <h4>Your Account</h4>
                    <p><span>Address: </span>{this.props.address}</p>
                    <p><span>Balance: </span>{this.props.balance} Ether</p>
                </div>
            </section>
        )
    }
}