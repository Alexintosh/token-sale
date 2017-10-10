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
            days1: '',
            days2: '',
            hours1: '',
            hours2: '',
            minutes1: '',
            minutes2: '',
            seconds1: '',
            seconds2: ''
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
        var days = Math.floor(time) + '';
        var hours = Math.floor((time*24)%24) + '';
        var minutes = Math.floor((time*24*60)%60) + '';
        var seconds = Math.floor((time*24*60*60)%60) + '';
        var sec1, sec2;
        if(seconds<10){
            sec1 = 0;
            sec2 = seconds;
        }else{
            var secSplit = seconds.split('');
            sec1 = secSplit[0];
            sec2 = secSplit[1];
        }
        var min1, min2;
        if(minutes<10){
            min1 = 0;
            min2 = minutes;
        }else{
            var minSplit = minutes.split('');
            min1 = minSplit[0];
            min2 = minSplit[1];
        }
        var hour1, hour2;
        if(hours<10){
            hour1 = 0;
            hour2 = hours;
        }else{
            var hourSplit = hours.split('');
            hour1 = hourSplit[0];
            hour2 = hourSplit[1];
        }
        var day1, day2;
        if(days<10){
            day1 = 0;
            day2 = days;
        }else{
            var daySplit = days.split('');
            day1 = daySplit[0];
            day2 = daySplit[1];
        }
        this.setState({
            days1: day1,
            days2: day2,
            hours1: hour1,
            hours2: hour2,
            minutes1: min1,
            minutes2: min2,
            seconds1: sec1,
            seconds2: sec2
        })
    }
    render(){
        return(
            <section id="landing-registration">
                <div className="container-fluid center-text">
                    <div className="landing-container-large">
                        <h1 className="lh-1">LEV Token Sale Starts: </h1>
                        <h2 className="lh-2">November 7th 9am PST</h2>
                        <div className="timer">
                            <div className="center-text">
                                <div className="inline-block">
                                    <div className="inline-block">
                                        <div className="countdown-number">
                                            {this.state.days1}
                                        </div>
                                        <div className="countdown-number">
                                            {this.state.days2}
                                        </div>
                                        <span className="fs-70">:</span>
                                    </div>
                                    <p className="countdown-letter">Days</p>
                                </div>
                                <div className="inline-block">
                                    <div className="inline-block">
                                        <div className="countdown-number">
                                            {this.state.hours1}
                                        </div>
                                        <div className="countdown-number">
                                            {this.state.hours2}
                                        </div>
                                        <span className="fs-70">:</span>
                                    </div>
                                    <p className="countdown-letter">Hours</p>
                                </div>
                                <div className="inline-block">
                                    <div className="inline-block">
                                        <div className="countdown-number">
                                            {this.state.minutes1}
                                        </div>
                                        <div className="countdown-number">
                                            {this.state.minutes2}
                                        </div><span className="fs-70">:</span>
                                    </div>
                                    <p className="countdown-letter">Minutes</p>
                                </div>
                                <div className="inline-block">
                                    <div className="inline-block">
                                        <div className="countdown-number">
                                            {this.state.seconds1}
                                        </div>
                                        <div className="countdown-number">
                                            {this.state.seconds2}
                                        </div><span className="fs-70"></span>
                                    </div>
                                    <p className="countdown-letter">Seconds</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=> this.displayModal()} className="btn btn-register-landing mv-20">REGISTER NOW FOR EARLY ACCESS</div>
                        <br />
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-landing mv-20">READ WHITEPAPER</a>
                        <a href="https://www.youtube.com/watch?v=XKzOqrbvsKQ" target="_blank" rel="noopener noreferrer" className="btn btn-landing mv-20">WATCH THE VIDEO</a>
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
                        <div className="consensys-landing-social">
                            <Social />
                        </div>
                        <div className="learn-more">
                            <p className="fs-20 clickable mb-0" onClick={() => this.scrollDown()}>Learn More</p>
                            <p className="clickable" onClick={() => this.scrollDown()}><i className="fa fa-angle-down fs-70" aria-hidden="true"></i></p>
                        </div>
                        <div className="consensys-landing-img">
                            <img src={consensys} alt="Consensys logo" className="landing-img" />
                            <p className="mb-0">Supported by</p>
                            <p className="fs-25 mb-0">ConsenSys</p>
                        </div>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </section>
        )
    }
}