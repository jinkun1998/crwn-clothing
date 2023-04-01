import { useEffect, useState } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    return existingProduct ?
        cartItems.map(cartItem => cartItem.id === existingProduct.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem) :
        [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartItemContext = createContext({
    cartItems: [],
    cartItemCount: 0,
    addItemToCart: () => { }
})

export const CartItemProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartItemCount(count)
    }, [cartItems])

    const value = { cartItems, addItemToCart, cartItemCount }
    return <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
}