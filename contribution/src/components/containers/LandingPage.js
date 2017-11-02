import React, { PureComponent } from 'react';
import About                    from './About';
import Landing                  from './Landing';
import MobileNav                from '../utils/Mobile';
import PopupVideo               from '../utils/PopupVideo';
import CeoVideo                 from '../utils/CeoVideo';

export default class LandingPage extends PureComponent {
    render(){
        return(
            <section id="single-page" className="center-mobile">
                <MobileNav />
                <Landing />
                <About />
                <PopupVideo />
                <CeoVideo />
            </section>
        )
    }
}