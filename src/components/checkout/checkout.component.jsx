

import { useContext } from "react"
import { CartItemContext } from "../../contexts/cartitem.context"
import CheckoutItem from "../checkout-item/checkout-item.component"
import "./checkout.style.scss"

const Checkout = () => {

    const { cartItems, cartItemCount, cartTotal } = useContext(CartItemContext)
    const headers = ["Product", "Description", "Quantity", "Price", "Remove"]

    return (
        <div className="checkout-item-container" >
            <div className="checkout-item-header">
                {
                    headers.map(header => {
                        return (
                            <div key={header} className="header-block">
                                <span>{header}</span>
                            </div>
                        )
                    })
                }
            </div>
            {
                cartItemCount > 0 ?
                    cartItems.map(cartItem => {
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )
                    }) :
                    <div className="empty-item">There is no item</div>
            }
            <div className="total">
                <span>Total: ${cartTotal}</span>
            </div>
        </div>
    )
}

export default Checkout