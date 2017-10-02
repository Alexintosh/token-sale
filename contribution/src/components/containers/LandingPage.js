import React, { Component } from 'react';
import Header               from './Header';
import TokenInformation     from './TokenInformation';
import About                from './About';
import Landing              from './Landing';

export default class LandingPage extends Component {
    render(){
        return(
            <section id="single-page">
                <Landing history={this.props.history} />
                <Header history={this.props.history} />
                <TokenInformation />
                <About />
            </section>
        )
    }
}