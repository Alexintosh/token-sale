import React, { PureComponent } from 'react';
import AboutNavigation          from '../about/AboutNavigation';
import Overview                 from '../about/Overview';
import Information              from '../about/Information';
import Contribute               from '../about/Contribute';
import Whitepaper               from '../about/Whitepaper';
import FAQ                      from '../about/FAQ';

export default class About extends PureComponent {
    render(){
        return(
            <section id="about" className="about-background pv-20">
                <div className="container-fluid">
                    <div className="col-container">
                        <div className="col-md-h-3">
                            <AboutNavigation />
                        </div>
                        <div className="col-md-h-9">
                            <div className="row">
                                <div className="col-md-11">
                                    <Overview />
                                    <Information />
                                    <Contribute />
                                    <Whitepaper />
                                    <FAQ />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}