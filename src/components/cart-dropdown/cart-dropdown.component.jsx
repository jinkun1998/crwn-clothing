import { useContext, u } from "react"
import { useNavigate } from "react-router-dom"
import { CartItemContext } from "../../contexts/cartitem.context"
import { IsCartOpenContext } from "../../contexts/iscartopen.context"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import "./cart-dropdown.style.scss"

const CartDropDown = () => {
    const { cartItems } = useContext(CartItemContext)
    const { isCartOpen, setIsCartOpen } = useContext(IsCartOpenContext)
    const navigation = useNavigate()

    const goToCheckout = () => {
        setIsCartOpen(!isCartOpen)
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