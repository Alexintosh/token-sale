import React, { Component }     from 'react';
import SignupModal              from '../utils/SignupModal';
import Social                   from '../landing/Social';
import Scroll                   from 'react-scroll';
import consensys                from '../../public/img/consensyslogoblack.png';

export default class Landing extends Component{
    constructor(){
        super();
        this.state={
            display: false,
            months: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
        this.countdown = this.countdown.bind(this);
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
    componentWillMount(){
        this.startTimer();
    }
    startTimer(){
        setInterval(this.countdown, 1000)
    }
    countdown(){
        var oneDay=1000*60*60*24;
        var endDate = new Date(2017,10,12,12);
        var todaysDate = new Date();
        var difference = endDate - todaysDate;
        var time = (difference/oneDay);
        var days = Math.floor(time)
        var hours = Math.floor((time*24)%24);
        var minutes = Math.floor((time*24*60)%60);
        var seconds = Math.floor((time*24*60*60)%60);
        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }
    render(){
        return(
            <section id="landing-registration">
                <div className="container-fluid center-text">
                    <div className="h-85">
                        <h1 className="fs-50 pt-20v lh-70 mt-0">LEV Token Sale Starts: November 12th 12pm EST</h1>
                        <div className="timer">
                            <p className="fs-70">{this.state.days} : {this.state.hours} : {this.state.minutes} : {this.state.seconds}</p>
                            <p>Days Hours Minutes Seconds </p>
                        </div>
                        <button onClick={()=> this.displayModal()} className="btn btn-register mv-20">Register</button>
                        <br />
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-landing mv-20">Read Whitepaper</a>
                        <a href="https://www.youtube.com/watch?v=XKzOqrbvsKQ" target="_blank" rel="noopener noreferrer" className="btn btn-landing mv-20">Watch Video</a>
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