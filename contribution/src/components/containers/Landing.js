import React, { PureComponent } from 'react';
import { connect }              from 'react-redux';
import Scroll                   from 'react-scroll';
import Timer                    from '../landing/Timer';
import Social                   from '../landing/Social';
import EmailRegistration        from '../landing/EmailRegistration';
import { showVideoModal }       from '../../actions/modalActions';
import consensys                from '../../public/img/consensyslogoblack.png';

class Landing extends PureComponent{
    scrollDown(){
        Scroll.animateScroll.scrollTo(1000);
    }
    render(){
        return(
            <section id="landing-registration">
                <div className="container-fluid center-text">
                    <div className="landing-container-large">
                        <h1 className="lh-1">LEV Token Sale Starts</h1>
                        <h2 className="lh-2">November 7th 9am PST</h2>
                        <Timer />
                        <EmailRegistration />
                        <br />
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-landing">READ WHITEPAPER</a>
                        <div onClick={()=> this.props.displayVideoModal()} className="btn btn-landing">WATCH THE VIDEO</div>
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
            </section>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        displayVideoModal: () => { dispatch(showVideoModal()) }
    }
}
export default connect (
    null,
    mapDispatchToProps
)(Landing);