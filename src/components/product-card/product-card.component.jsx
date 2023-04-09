import { useDispatch, useSelector } from "react-redux"
import { addItemToCart } from "../../store/cart/cart.action"
import Button from "../button/button.component"

import "./product-card.style.scss"
import { selectCartItems } from "../../store/cart/cart.selector"

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price } = product

    return (
        <div className="product-card-container">
            <img alt={name} src={imageUrl} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="submit" type="submit" onClick={() => dispatch(addItemToCart(cartItems, product))}>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard