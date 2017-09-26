import React, { Component } from 'react';
import Header              from './Header';
import About                from './About';

export default class SinglePage extends Component {
    render(){
        return(
            <section id="single-page">
                <Header history={this.props.history} />
                <About />
            </section>
        )
    }
}