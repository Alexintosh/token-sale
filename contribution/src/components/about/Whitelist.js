import React, { PureComponent } from 'react';

export default class Whitelist extends PureComponent{
    render(){
        return(
            <section id="whitelist" className="pt-100 about-card center-mobile-h left-mobile">
                <h2 className="sub-header-large"><span>WHITELIST INFO</span></h2>
                <p>
                    The purpose of the whitelist is to give Leverj supporters and followers early access to the public sale to ensure everyone gets a fair chance to participate. 
                </p>
                <ul>
                    <li>
                        <span className="bold-font">Whitelist Registration Period:</span> October 10th - November 1st
                    </li>
                    <li>
                        <span className="bold-font">Tokens Available for Sale:</span> 250,000,000 LEV 
                    </li>
                    <li>
                        <span className="bold-font">Min/Max Contribution Amount:</span> 25 - 100 ETH
                    </li>
                    <li>
                        <span className="bold-font">Geographic Restriction:</span> Only non-residents of USA and China and sanctioned countries are allowed to take part in the token sale
                    </li>
                </ul>
                <p className="p-header">How to Register:</p>
                <ol>
                    <li>Click Register</li>
                    <li>Provide All Required Information</li>
                    <li>You will be sent an email confirming your registration (if successful)</li>
                </ol>
                <p className="p-header">How to Contribute:</p>
                <ol>
                    <li>You will receive access to the public sale 72 hours before it starts</li>
                    <li>You will need to provide the email, ETH wallet address, and contribution amount from your whitelist confirmation in order to access the sale early.</li>
                    <li>Follow the normal contribution steps (link to pdf)</li>
                </ol>
                <a href="#contribute">See More Info Below</a>
            </section>
        )
    }
}