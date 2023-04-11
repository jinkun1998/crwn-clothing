

export const CART_ACTION_TYPE = {
    SET_CART_ITEMS: "cart/SET_CART_ITEMS",
    SET_IS_CART_OPEN: "cart/SET_IS_CART_OPEN"
}

const INIT_CART = {
    cartItems: [],
    cartTotal: 0,
    cartItemCount: 0,
    isCartOpen: false
}

export const cartProducer = (state = INIT_CART, action) => {
    const { type, payload } = action
    switch (type) {
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return {
                ...payload
            }
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            return state
    }
}