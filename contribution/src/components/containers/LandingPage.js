import React, { PureComponent } from 'react';
import About                    from './About';
import Landing                  from './Landing';
import MobileNav                   from '../utils/Mobile';

export default class LandingPage extends PureComponent {
    render(){
        return(
            <section id="single-page">
                <MobileNav />
                <Landing history={this.props.history} />
                <About history={this.props.history} />
            </section>
        )
    }
}