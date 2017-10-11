import { createLogic }  from 'redux-logic';
import { timerError, 
         updateTimer }  from '../actions/timerActions';

const startTimer = createLogic({
  type: 'START_TIMER',
  async process({ getState, action, APIEndpoint }, dispatch, done) {
    try {
        setInterval(function() {
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
            var timer = {
                days1: day1,
                days2: day2,
                hours1: hour1,
                hours2: hour2,
                minutes1: min1,
                minutes2: min2,
                seconds1: sec1,
                seconds2: sec2
            }
            dispatch(updateTimer(timer));
        }, 1000)
    } catch (err) {
      dispatch(timerError(err));
    }
  }
});

export default [
    startTimer
]