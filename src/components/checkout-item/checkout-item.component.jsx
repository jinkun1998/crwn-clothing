

import { useContext } from "react"
import { CartItemContext } from "../../contexts/cartitem.context"
import "./checkout-item.style.scss"

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartItemContext)

    return (
        <div className="checkout-item">
            <img src={imageUrl} alt={name} />
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#60;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => addItemToCart(cartItem)}>&#62;</span>
            </span>
            <span className="price">${price}</span>
            <span className="remove" onClick={() => deleteItemFromCart(cartItem)}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem