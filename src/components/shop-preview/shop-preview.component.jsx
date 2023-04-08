import { Fragment, useContext } from "react"
import ProductCard from "../product-card/product-card.component"

import "./shop-preview.style.scss"
import { CategoriesContext } from "../../contexts/categories.context"
import { Link } from "react-router-dom"

const ShopPreview = () => {
    const { categories } = useContext(CategoriesContext)

    return (
        <Fragment>
            {
                Object.keys(categories).map(title => {
                    return (
                        <Fragment key={title}>
                            <Link to={title}>
                                <h2>{title.toUpperCase()}</h2>
                            </Link>
                            <div className="products-container">
                                {
                                    categories[title].filter((_, index) => {
                                        return index < 4
                                    }).map(product => {
                                        return <ProductCard key={product.id} product={product} />
                                    })
                                }
                            </div>
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

export default ShopPreview