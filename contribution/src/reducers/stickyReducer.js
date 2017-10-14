const initialState = {
    bottom: false,
    stuck: false
}

export default function stickyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_BOTTOM_LOGO':
            return {
                ...state,
                bottom: true
        }
        case 'HIDE_BOTTOM_LOGO':
            return {
                ...state,
                bottom: false
        }
        case 'STICK_PAGE':
            return {
                ...state,
                stuck: true
        }
        case 'UNSTICK_PAGE':
            return {
                ...state,
                stuck: false
        }
        default: {
            return state
        }
    }
}