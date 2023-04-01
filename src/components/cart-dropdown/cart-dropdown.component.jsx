import { useContext } from "react"
import { CartItemContext } from "../../contexts/cartitem.context"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import "./cart-dropdown.style.scss"

const CartDropDown = () => {
    const { cartItems } = useContext(CartItemContext)

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
                }
            </div>
            <Button buttonType="submit" type="submit">GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown