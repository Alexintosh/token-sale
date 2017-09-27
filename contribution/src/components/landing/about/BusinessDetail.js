import React, { PureComponent } from 'react';
import BusinessDetailVideo      from '../utils/BusinessDetailVideo';

export default class BusinessDetail extends PureComponent{
    render(){
        return (
            <section id="details">
                <div className="about-card">
                    <h2><span>Business Detail</span></h2>
                    <BusinessDetailVideo />    
                </div>
            </section>
        )
    }
}