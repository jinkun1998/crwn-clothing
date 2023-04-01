import { useContext } from "react"
import { CartItemContext } from "../../contexts/cartitem.context"
import { IsCartOpenContext } from "../../contexts/iscartopen.context"
import { ReactComponent as ShoppingIcon } from "../../shopping-bag.svg"

import "./cart-icon.style.scss"

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen } = useContext(IsCartOpenContext)
    const { cartItemCount } = useContext(CartItemContext)

    const onClickCartIconHandler = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className="cart-icon-container" onClick={onClickCartIconHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItemCount}</span>
        </div>
    )
}

export default CartIcon