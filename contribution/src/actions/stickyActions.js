export const showBottomImage = () => {
    return {
        type: 'SHOW_BOTTOM_LOGO'
    }
} 
export const hideBottomImage = () => {
    return {
        type: 'HIDE_BOTTOM_LOGO'
    }
}
export const pageStuck = () => {
    return {
        type: 'STICK_PAGE'
    }
}
export const pageUnstuck = () => {
    return {
        type: 'UNSTICK_PAGE'
    }
}