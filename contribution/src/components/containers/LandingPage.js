import React, { Component } from 'react';
import Header               from './Header';
import TokenInformation     from './TokenInformation';
import About                from './About';

export default class LandingPage extends Component {
    render(){
        return(
            <section id="single-page">
                <Header history={this.props.history} />
                <TokenInformation />
                <About />
            </section>
        )
    }
}