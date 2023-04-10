import { useDispatch, useSelector } from "react-redux"
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.action"
import { ReactComponent as ShoppingIcon } from "../../shopping-bag.svg"

import "./cart-icon.style.scss"

const CartIcon = () => {

    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartItemCount = useSelector(selectCartCount)

    const onClickCartIconHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return (
        <div className="cart-icon-container" onClick={onClickCartIconHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItemCount}</span>
        </div>
    )
}

export default CartIcon