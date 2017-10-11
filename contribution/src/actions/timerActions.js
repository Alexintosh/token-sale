export const startTimer = () => {
    return {
        type: 'START_TIMER'
    }
}

export const updateTimer = (time) => {
    return {
        type: 'UPDATE_TIME',
        payload: time
    }
}

export const timerError = (err) => {
    return {
        type: 'TIMER_ERROR'
    }
}