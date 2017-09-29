import React, { Component } from 'react';
import Header               from './Header';
import About                from './About';
import WhitePaper           from '../about/WhitePaper';
import Icons                from '../about/Icons';
import News                 from '../about/News';
import Features             from '../about/Features';

export default class SinglePage extends Component {
    render(){
        return(
            <section id="single-page">
                <Header history={this.props.history} />
                <Features />
                <News />
                <WhitePaper />
                <Icons />
                <About />
            </section>
        )
    }
}