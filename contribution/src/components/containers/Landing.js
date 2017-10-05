import React, { Component } from 'react';
import SignupModal              from '../utils/SignupModal';
import Social                   from '../landing/Social';
import Scroll                   from 'react-scroll';
import consensys                from '../../public/img/consensyslogoblack.png';

export default class Landing extends Component{
    constructor(){
        super();
        this.state={
            display: false
        }
    }
    displayModal() {
        this.setState({
            display: true
        });
    }
    hideModal() {
        this.setState({
            display: false
        });
    }
    scrollDown(){
        Scroll.animateScroll.scrollTo(1000);
    }
    createstructuredselector
    render(){
        return(
            <section id="landing-registration">
                <div className="container-fluid center-text">
                    <div className="h-85">
                        <h1 className="fs-90 pt-20v fw-200 lh-70 mt-0">DECENTRALIZED</h1>
                        <h1 className="fs-70 fw-200 lh-70">LEVERAGD FUTURES EXCHANGE</h1>
                        <p className="fs-30 pt-40 p-dull">TOKEN SALE COMING SOON</p>
                        <button onClick={()=> this.displayModal()} className="btn btn-register mv-20">Register</button>
                    </div>
                    <div className="h-15">
                        <div className="row">
                            <div className="col-sm-4">
                                <Social />
                            </div>
                            <div className="col-sm-4">
                                <div><span className="fs-20 clickable" onClick={() => this.scrollDown()}>Learn More</span></div>
                                <div><span className="clickable" onClick={() => this.scrollDown()}><i className="fa fa-angle-down fs-70" aria-hidden="true"></i></span></div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-6 text-right">
                                        <img src={consensys} alt="Consensys logo" className="landing-img" />
                                    </div>
                                    <div className="col-sm-6 text-left">
                                        <p className="mb-0">Supported by</p>
                                        <p className="fs-25">ConsenSys</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </section>
        )
    }
}