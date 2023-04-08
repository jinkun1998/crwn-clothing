import { createContext, useEffect, useReducer, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

const USER_ACTION_TYPE = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const INIT_USER = { currentUser: null }

const userReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            break
    }
}

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INIT_USER)

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user })
    }

    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListner((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubcribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}