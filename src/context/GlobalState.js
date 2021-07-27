import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

// Initial state
const initialState = {
    announcements: [],
    // users: [],
    // isLoggedIn: false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for home page
    function deleteAnnouncement(_id) {
        dispatch({
            type: 'DELETE_ANNOUNCEMENT',
            payload: _id
        });
    }

    function addAnnouncement(announcement) {
        dispatch({
            type: 'ADD_ANNOUNCEMENT',
            payload: announcement
        });
    }

    // function negateLoggedIn() {
    //     dispatch({
    //         type: "NEGATE_LOGGED_IN"
    //     });
    // }

    // Actions for users
    // function deleteUser(id) {
    //     dispatch({
    //         type: 'DELETE_USER',
    //         payload: id
    //     });
    // }

    // function addUser(user) {
    //     dispatch({
    //         type: 'ADD_USER',
    //         payload: user
    //     });
    // }

    return (<GlobalContext.Provider value={{
        // users: state.users,
        announcements: state.announcements,
        seenHome: state.seenHome,
        // isLoggedIn: state.isLoggedIn,
        deleteAnnouncement,
        addAnnouncement,
        // deleteUser,
        // addUser,
        // negateLoggedIn
    }}>
        {children}
    </GlobalContext.Provider>);
}