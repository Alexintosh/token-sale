import React, { PureComponent }     from 'react';
import Supply                   from '../header/Supply';
import Price                    from '../header/Price';
import Countdown                from '../header/Countdown';
import LandingVideo             from '../utils/LandingVideo';
import Register                 from '../../stage/Register';

export default class Header extends PureComponent {
    render(){
        return(
            <section id="header">
                <div className="container">
                    <div className="row pv-40">
                        <div className="col-md-7">
                            <Countdown  history={this.props.history} />
                        </div>
                        <div className="col-md-5">
                            <Price />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <LandingVideo />
                        </div>
                        <div className="col-md-5">
                            <Supply />
                        </div>
                    </div>
                    <div className="row pb-40">                        
                        <div className="col-md-5 col-md-offset-7">
                            <Register   history={this.props.history} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}