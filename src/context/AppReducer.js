export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_ANNOUNCEMENT':
            return {
                ...state,
                announcements: state.announcements.filter(announcement => announcement._id !== action.payload)
            }
        case 'ADD_ANNOUNCEMENT':
            return {
                ...state,
                announcements: [action.payload, ...state.announcements]
            }
        // case 'DELETE_USER':
        //     return {
        //         ...state,
        //         users: state.users.filter(user => user.id !== action.payload)
        //     }
        // case 'ADD_USER':
        //     return {
        //         ...state,
        //         users: [action.payload, ...state.users]
        //     }
        // case 'NEGATE_LOGGED_IN':
        //     return {
        //         ...state,
        //         isLoggedIn: !state.isLoggedIn
        //     }
        default:
            return state;
    }
}