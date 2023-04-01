import { createContext, useState } from "react";


export const IsCartOpenContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { }
})

export const IsCartOpenProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = { isCartOpen, setIsCartOpen }
    return <IsCartOpenContext.Provider value={value}>{children}</IsCartOpenContext.Provider>
}