import React, { PureComponent } from 'react';
import SignupModal              from '../utils/SignupModal';
import leverjlogo               from '../../public/img/leverjlogo.svg';

export default class TopBar extends PureComponent{
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
            <section id="topbar" className={(this.props.stuck ? 'topbar-stuck' : 'topbar-top')}>
                <img src={ leverjlogo } alt="Leverj Logo" className="nav-logo" />
                <div className="nav-header">LEVER<span className="color-text">J</span></div>
                <div className="pull-right">
                    <div className="topbar-date pull-left">
                        <p className="fs-30 mb-0 pt-10">{this.state.days} : {this.state.hours} : {this.state.minutes} : {this.state.seconds}</p>
                        <p className="fs-15">Days Hours Minutes Seconds </p>
                    </div>
                    <div className="topbar-register pull-right">
                        <button onClick={()=> this.displayModal()} className="btn btn-register-sm">REGISTER</button>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </section>
        )
    }
}