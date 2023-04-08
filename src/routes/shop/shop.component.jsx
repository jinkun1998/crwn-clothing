import { Routes, Route } from "react-router-dom"
import Category from "../category/category.component"
import ShopPreview from "../../components/shop-preview/shop-preview.component"

import "./shop.style.scss"

const Shop = () => {
    return (
        <Routes>
            <Route index element={<ShopPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop