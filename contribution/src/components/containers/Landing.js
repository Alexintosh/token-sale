import React, { Component }     from 'react';
import SignupModal              from '../utils/SignupModal';
import Social                   from '../landing/Social';
import Scroll                   from 'react-scroll';
import consensys                from '../../public/img/consensyslogoblack.png';
import PopupVideo               from '../utils/PopupVideo';
import Timer                    from '../landing/Timer';

export default class Landing extends Component{
    constructor(){
        super();
        this.state={
            display: false,
            displayVideo: false
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
    displayVideoModal() {
        this.setState({
            displayVideo: true
        });
    }
    hideVideoModal() {
        this.setState({
            displayVideo: false
        });
    }
    scrollDown(){
        Scroll.animateScroll.scrollTo(1000);
    }
    render(){
        return(
            <section id="landing-registration">
                <div className="container-fluid center-text">
                    <div className="landing-container-large">
                        <h1 className="lh-1">LEV Token Sale Starts: </h1>
                        <h2 className="lh-2">November 7th 9am PST</h2>
                        <Timer />
                        <div onClick={()=> this.displayModal()} className="btn btn-register-landing mv-20">REGISTER NOW FOR EARLY ACCESS</div>
                        <br />
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-landing mv-20">READ WHITEPAPER</a>
                        <div onClick={()=> this.displayVideoModal()} className="btn btn-landing mv-20">WATCH THE VIDEO</div>
                        <div className="show-on-xs">
                            <div className="center-text">
                                <Social />
                            </div>
                            <div className="pv-20">
                                <img src={consensys} alt="Consensys logo" className="landing-img" />
                                <p className="mb-0">Supported by</p>
                                <p className="fs-25 mb-0">ConsenSys</p>
                            </div>
                            <div className="pv-20"> 
                                <p className="fs-20 clickable mb-0" onClick={() => this.scrollDown()}>Learn More</p>
                                <p className="clickable" onClick={() => this.scrollDown()}><i className="fa fa-angle-down fs-70" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>
                    <div className="landing-container-small">
                        <div className="col-container">
                            <div className="col-sm-h-5 v-align-bottom">
                                <Social />
                            </div>
                            <div className="col-md-h-2 v-align-bottom">
                                <p className="fs-20 clickable mb-0" onClick={() => this.scrollDown()}>Learn More</p>
                                <p className="clickable" onClick={() => this.scrollDown()}><i className="fa fa-angle-down fs-70" aria-hidden="true"></i></p>
                            </div>
                            <div className="col-md-h-5 v-align-bottom">
                                <div className="pull-right pr-20">
                                    <img src={consensys} alt="Consensys logo" className="landing-img" />
                                    <p className="mb-0">Supported by</p>
                                    <p className="fs-25 mb-0">ConsenSys</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
                <PopupVideo display={ this.state.displayVideo } hide={() => this.hideVideoModal()} />
            </section>
        )
    }
}