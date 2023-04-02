import { useEffect, useState } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    return existingProduct ?
        cartItems.map(cartItem => cartItem.id === existingProduct.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem) :
        [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === productToRemove.id)
    if (existingProduct) {
        if (existingProduct.quantity > 1) {
            return cartItems.map(cartItem => cartItem.id === existingProduct.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
        }
        return cartItems.filter(cartItem => cartItem.id !== existingProduct.id)
    }
    return cartItems
}

const deleteCartItem = (cartItems, productToDelete) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === productToDelete.id)
    return existingProduct ?
        cartItems.filter(cartItem => cartItem.id !== existingProduct.id) :
        cartItems
}

export const CartItemContext = createContext({
    cartItems: [],
    cartItemCount: 0,
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { }
})

export const CartItemProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete))
    }

    useEffect(() => {
        const count = cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
        setCartItemCount(count)
    }, [cartItems])

    useEffect(() => {
        const total = cartItems.reduce((price, cartItem) => price + (cartItem.price * cartItem.quantity), 0)
        setCartTotal(total)
    }, [cartItems])

    const value = { cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart, cartItemCount, cartTotal }
    return <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
}