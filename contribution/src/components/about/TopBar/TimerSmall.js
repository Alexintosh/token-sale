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
            selectSeconds2 }         from '../../../selectors';

class TimerSmall extends PureComponent {
    render(){
        return(
            <div className="topbar-date pull-left">
                <div className="center-text">
                    <div className="inline-block">
                        <div className="inline-block">
                            <div className="countdown-number-stuck">
                                {this.props.days1}
                            </div>
                            <div className="countdown-number-stuck">
                                {this.props.days2}
                            </div>
                            <span className="fs-40">:</span>
                        </div>
                        <p className="fs-15">Days</p>
                    </div>

                    <div className="inline-block">
                        <div className="inline-block">
                            <div className="countdown-number-stuck">
                                {this.props.hours1}
                            </div>
                            <div className="countdown-number-stuck">
                                {this.props.hours2}
                            </div>
                            <span className="fs-40">:</span>
                        </div>
                        <p>Hours</p>
                    </div>

                    <div className="inline-block">
                        <div className="inline-block">
                            <div className="countdown-number-stuck">
                                {this.props.minutes1}
                            </div>
                            <div className="countdown-number-stuck">
                                {this.props.minutes2}
                            </div>
                            <span className="fs-40">:</span>
                        </div>
                        <p>Minutes</p>
                    </div>

                    <div className="inline-block">
                        <div className="inline-block">
                        <div className="countdown-number-stuck">
                            {this.props.seconds1}
                        </div>
                        <div className="countdown-number-stuck">
                            {this.props.seconds2}
                        </div>
                            <span className="fs-40"></span>
                        </div>
                        <p>Seconds</p>
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
export default connect(
    structuredSelector
)(TimerSmall)