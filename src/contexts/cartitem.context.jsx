import { useReducer } from "react";
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

const calculateCartItem = (cartItems) => {
    const newCartTotal = cartItems.reduce((price, cartItem) => price + (cartItem.price * cartItem.quantity), 0)
    const newCartItemCount = cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
    return {
        cartItems: cartItems,
        cartTotal: newCartTotal,
        cartItemCount: newCartItemCount
    }
}

const CART_ACTION_TYPE = {
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    DELETE_ITEM: " DELETE_ITEM"
}

const INIT_CART = {
    cartItems: [],
    cartTotal: 0,
    cartItemCount: 0
}

const cartItemProducer = (state, action) => {
    const { type, payload } = action
    let newCartItems = []
    switch (type) {
        case CART_ACTION_TYPE.ADD_ITEM:
            newCartItems = addCartItem(state.cartItems, payload)
            return calculateCartItem(newCartItems)
        case CART_ACTION_TYPE.REMOVE_ITEM:
            newCartItems = removeCartItem(state.cartItems, payload)
            return calculateCartItem(newCartItems)
        case CART_ACTION_TYPE.DELETE_ITEM:
            newCartItems = deleteCartItem(state.cartItems, payload)
            return calculateCartItem(newCartItems)
        default:
            break
    }
}

const CartItemContext = createContext({
    cartItems: [],
    cartItemCount: 0,
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { }
})

export const CartItemProvider = ({ children }) => {

    const [{ cartItems, cartTotal, cartItemCount }, dispatch] = useReducer(cartItemProducer, INIT_CART)

    const addItemToCart = (productToAdd) => {
        dispatch({ type: CART_ACTION_TYPE.ADD_ITEM, payload: productToAdd })
    }

    const removeItemFromCart = (productToRemove) => {
        dispatch({ type: CART_ACTION_TYPE.REMOVE_ITEM, payload: productToRemove })
    }

    const deleteItemFromCart = (productToDelete) => {
        dispatch({ type: CART_ACTION_TYPE.DELETE_ITEM, payload: productToDelete })
    }

    const value = { cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart, cartItemCount, cartTotal }
    return <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
}