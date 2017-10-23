const initialState = {
    displayVideo: false,
    displaySignup: false,
    displayCeoVideo: false
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_VIDEO_MODAL':
            return {
                ...state,
                displayVideo: true
        }
        case 'HIDE_VIDEO_MODAL':
            return {
                ...state,
                displayVideo: false
        }
        case 'SHOW_REGISTRATION_MODAL':
            return {
                ...state,
                displaySignup: true
        }
        case 'HIDE_REGISTRATION_MODAL':
            return {
                ...state,
                displaySignup: false
        }
        case 'SHOW_CEO_MODAL':
            return {
                ...state,
                displayCeoVideo: true
        }
        case 'HIDE_CEO_MODAL':
            return {
                ...state,
                displayCeoVideo: false
            }
        default: {
            return state
        }
    }
}