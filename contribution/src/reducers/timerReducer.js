
    const initialState = { 
        days1: '',
        days2: '',
        hours1: '',
        hours2: '',
        minutes1: '',
        minutes2: '',
        seconds1: '',
        seconds2: ''
    };
    
    export default function saleReducer(state = initialState, action) {
      switch (action.type) {
        case 'START_TIMER':
            return {
                ...state
            }
        case 'UPDATE_TIME':
            return {
                ...state,
                days1: action.payload.days1,
                days2: action.payload.days2,
                hours1: action.payload.hours1,
                hours2: action.payload.hours2,
                minutes1: action.payload.minutes1,
                minutes2: action.payload.minutes2,
                seconds1: action.payload.seconds1,
                seconds2: action.payload.seconds2
            }
        case 'TIMER_ERROR':
            return{
                ...state
            }
        default: {
            return state;
        }
      }
    }
  