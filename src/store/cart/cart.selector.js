import { createSelector } from "reselect"

const selectCartReducer = (state) => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectCartTotal = createSelector(
    [selectCartReducer],
    (cart) => cart.cartTotal
)

export const selectCartCount = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItemCount
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

