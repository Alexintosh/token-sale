import React, { PureComponent } from 'react';
import About                    from './About';
import Landing                  from './Landing';

export default class LandingPage extends PureComponent {
    render(){
        return(
            <section id="single-page">
                <Landing history={this.props.history} />
                <About />
            </section>
        )
    }
}