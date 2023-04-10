import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"

import "./checkout-item.style.scss"

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price, quantity } = cartItem

    return (
        <div className="checkout-item">
            <img src={imageUrl} alt={name} />
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}>&#60;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>&#62;</span>
            </span>
            <span className="price">${price}</span>
            <span className="remove" onClick={() => dispatch(deleteItemFromCart(cartItems, cartItem))}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem