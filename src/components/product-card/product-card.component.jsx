import { useContext } from "react"
import { CartItemContext } from "../../contexts/cartitem.context"
import Button from "../button/button.component"

import "./product-card.style.scss"

const ProductCard = ({ product }) => {

    const { addItemToCart } = useContext(CartItemContext)
    const { name, imageUrl, price } = product

    return (
        <div className="product-card-container">
            <img alt={name} src={imageUrl} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="submit" type="submit" onClick={() => addItemToCart(product)}>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard