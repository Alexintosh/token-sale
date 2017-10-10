import React, { PureComponent } from 'react';
import SignupModal              from '../utils/SignupModal';

export default class TopBar extends PureComponent{
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
    componentWillMount(){
        this.startTimer();
    }
    startTimer(){
        setInterval(this.countdown, 1000)
    }
    countdown(){
        var oneDay=1000*60*60*24;
        var endDate = new Date(2017,10,7,12);
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
            <section id="topbar" className={(this.props.stuck ? 'topbar-stuck' : 'topbar-top')}>
                <div className="nav-header-stuck">LEVER<span className="color-text">J</span></div>
                <div className="pull-right">
                    <div className="topbar-date pull-left">
                        <div className="center-text">
                            <div className="inline-block">
                                <div className="inline-block">
                                    <div className="countdown-number-stuck">
                                        {this.state.days1}
                                    </div>
                                    <div className="countdown-number-stuck">
                                        {this.state.days2}
                                    </div>
                                    <span className="fs-40">:</span>
                                </div>
                                <p className="fs-15">Days</p>
                            </div>

                            <div className="inline-block">
                                <div className="inline-block">
                                    <div className="countdown-number-stuck">
                                        {this.state.hours1}
                                    </div>
                                    <div className="countdown-number-stuck">
                                        {this.state.hours2}
                                    </div>
                                    <span className="fs-40">:</span>
                                </div>
                                <p>Hours</p>
                            </div>

                            <div className="inline-block">
                                <div className="inline-block">
                                    <div className="countdown-number-stuck">
                                        {this.state.minutes1}
                                    </div>
                                    <div className="countdown-number-stuck">
                                        {this.state.minutes2}
                                    </div>
                                    <span className="fs-40">:</span>
                                </div>
                                <p>Minutes</p>
                            </div>

                            <div className="inline-block">
                                <div className="inline-block">
                                <div className="countdown-number-stuck">
                                    {this.state.seconds1}
                                </div>
                                <div className="countdown-number-stuck">
                                    {this.state.seconds2}
                                </div>
                                    <span className="fs-40"></span>
                                </div>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className="topbar-register pull-right">
                        <div onClick={()=> this.displayModal()} className="btn btn-register-sm">REGISTER</div>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </section>
        )
    }
}