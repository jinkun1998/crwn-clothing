import { Fragment, useContext, useEffect, useState } from "react"
import ProductCard from "../../components/product-card/product-card.component"
import { CategoriesContext } from "../../contexts/categories.context"
import { useParams } from "react-router-dom"

import "./category.style.scss"

const Category = () => {
    const { category } = useParams()
    const { categories } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categories[category])

    useEffect(() => {
        setProducts(categories[category])
    }, [categories, category])

    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-products-container">
                {
                    products &&
                    products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
        </Fragment>
    )
}

export default Category