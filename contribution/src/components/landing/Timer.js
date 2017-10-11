import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {    selectDays1,
            selectDays2,
            selectHours1,
            selectHours2,
            selectMinutes1,
            selectMinutes2,
            selectSeconds1,
            selectSeconds2 }         from '../../selectors';
import { startTimer }                from '../../actions/timerActions';

class Timer extends PureComponent{
    render(){
        return(            
            <div className="timer">
                <div className="center-text">
                    <div className="inline-block">
                        <div className="inline-block">
                            <div className="countdown-number">
                                {this.props.days1}
                            </div>
                            <div className="countdown-number">
                                {this.props.days2}
                            </div>
                            <span className="fs-70">:</span>
                        </div>
                        <p className="countdown-letter">Days</p>
                    </div>
                    <div className="inline-block">
                        <div className="inline-block">
                            <div className="countdown-number">
                                {this.props.hours1}
                            </div>
                            <div className="countdown-number">
                                {this.props.hours2}
                            </div>
                            <span className="fs-70">:</span>
                        </div>
                        <p className="countdown-letter">Hours</p>
                    </div>
                    <div className="inline-block">
                        <div className="inline-block">
                            <div className="countdown-number">
                                {this.props.minutes1}
                            </div>
                            <div className="countdown-number">
                                {this.props.minutes2}
                            </div><span className="fs-70">:</span>
                        </div>
                        <p className="countdown-letter">Minutes</p>
                    </div>
                    <div className="inline-block">
                        <div className="inline-block">
                            <div className="countdown-number">
                                {this.props.seconds1}
                            </div>
                            <div className="countdown-number">
                                {this.props.seconds2}
                            </div><span className="fs-70"></span>
                        </div>
                        <p className="countdown-letter">Seconds</p>
                    </div>
                </div>
            </div>
        )
    }
}

const structuredSelector = createStructuredSelector({
    days1: selectDays1,
    days2: selectDays2,
    hours1: selectHours1,
    hours2: selectHours2,
    minutes1: selectMinutes1,
    minutes2: selectMinutes2,
    seconds1: selectSeconds1,
    seconds2: selectSeconds2
})

const mapDipatchToProps = dispatch => {
    return {
        startTimer: () => {
            dispatch(startTimer())
        }
    }
}

export default connect(
    structuredSelector,
    mapDipatchToProps
)(Timer)