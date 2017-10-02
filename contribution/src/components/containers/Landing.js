import React, { PureComponent } from 'react';
import SignupModal              from '../utils/SignupModal';
import Social                   from '../landing/Social';
import Scroll                   from 'react-scroll';
import consensys                from '../../public/img/consensyslogoblack.png';

export default class Landing extends PureComponent{
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
    render(){
        return(
            <section id="landing-registration">
                <div className="container center-text">
                    <div className="h-20">
                        <h4 className="pt-40">COINPIT.IO PRESENTS</h4>
                        <h1 className="fs-60">LEVER<span className="color-text">J</span></h1>
                    </div>
                    <div className="h-70">
                        <p className="fs-90 pt-20 fw-200 lh-80">DECENTRALIZED</p>
                        <p className="fs-70 fw-200 lh-20">LEVERAGED TRADING</p>
                        <p className="fs-30 pt-40 p-dull">TOKEN SALE COMING SOON</p>
                        <button onClick={()=> this.displayModal()} className="btn btn-register mv-20">Register</button>
                        <Social />
                        <div>Supported by</div>
                        <div className="fs-25">ConsenSys</div>
                        <img src={consensys} alt="Consensys logo" className="landing-img" />
                    </div>
                    <div className="h-10">
                        <div><span className="fs-20 clickable" onClick={() => this.scrollDown()}>Learn More</span></div>
                        <div><span className="clickable" onClick={() => this.scrollDown()}><i className="fa fa-angle-down fs-70" aria-hidden="true"></i></span></div>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </section>
        )
    }
}