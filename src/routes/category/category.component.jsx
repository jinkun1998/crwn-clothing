import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCategories } from "../../store/category/category.selector"
import ProductCard from "../../components/product-card/product-card.component"

import "./category.style.scss"

const Category = () => {
    const { category } = useParams()
    const categories = useSelector(selectCategories)
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