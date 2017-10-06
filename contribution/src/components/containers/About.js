import React, { PureComponent } from 'react';
import Overview                 from '../about/Overview';
import Information              from '../about/Information';
import Contribute               from '../about/Contribute';
import Whitepaper               from '../about/Whitepaper';
import FAQ                      from '../about/FAQ';
import StickyNavigation         from '../about/StickyNavigation';

export default class About extends PureComponent {
    render(){
        return(
            <section id="about" className="about-background">
                <div className="container-fluid">
                    <StickyNavigation history={this.props.history} />
                    <div className="row">
                        <div className="col-md-9 col-md-offset-3">
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