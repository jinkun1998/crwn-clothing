import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.action"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import "./cart-dropdown.style.scss"

const CartDropDown = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const isCartOpen = useSelector(selectIsCartOpen)
    const navigation = useNavigate()

    const goToCheckout = () => {
        dispatch(setIsCartOpen(!isCartOpen))
        navigation("checkout")
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
                }
            </div>
            <Button buttonType="submit" type="submit" onClick={() => goToCheckout()}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown