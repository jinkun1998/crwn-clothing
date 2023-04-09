import { createContext, useReducer } from "react";

const IS_CART_OPEN_TYPE = {
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const INIT_IS_CART_OPEN = {
    isCartOpen: false
}

const IsCartOpenReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case IS_CART_OPEN_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            break
    }
}

const IsCartOpenContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { }
})

export const IsCartOpenProvider = ({ children }) => {
    const [{ isCartOpen }, dispatch] = useReducer(IsCartOpenReducer, INIT_IS_CART_OPEN)

    const setIsCartOpen = (bool) => {
        dispatch({ type: IS_CART_OPEN_TYPE.SET_IS_CART_OPEN, payload: bool })
    }

    const value = { isCartOpen, setIsCartOpen }
    return <IsCartOpenContext.Provider value={value}>{children}</IsCartOpenContext.Provider>
}