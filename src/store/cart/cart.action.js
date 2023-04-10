import { createReducerAction } from "../../utils/reducer.utils"
import { CART_ACTION_TYPE } from "./cart.reducer"

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
        ...cartItems,
        cartItems: cartItems,
        cartTotal: newCartTotal,
        cartItemCount: newCartItemCount
    }
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createReducerAction(CART_ACTION_TYPE.SET_CART_ITEMS, calculateCartItem(newCartItems))
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return createReducerAction(CART_ACTION_TYPE.SET_CART_ITEMS, calculateCartItem(newCartItems))
}

export const deleteItemFromCart = (cartItems, productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete)
    return createReducerAction(CART_ACTION_TYPE.SET_CART_ITEMS, calculateCartItem(newCartItems))
}

export const setIsCartOpen = (bool) => createReducerAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool)