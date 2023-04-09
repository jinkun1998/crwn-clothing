import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../../utils/firebase.utils"
import { useDispatch } from "react-redux"
import { setCategories } from "../../store/category/category.action"
import Category from "../category/category.component"
import ShopPreview from "../../components/shop-preview/shop-preview.component"
import SHOP_DATA from "../../shop-data"

import "./shop.style.scss"

const Shop = () => {
    const CATEGORIES = "categories"

    const dispatch = useDispatch()

    useEffect(() => {
        addCollectionAndDocuments(CATEGORIES, SHOP_DATA)
    }, [])

    useEffect(() => {
        const getCaterories = async () => {
            const categoriesSnapshot = await getCollectionAndDocuments(CATEGORIES)
            dispatch(setCategories(categoriesSnapshot))
        }

        getCaterories();
    }, [dispatch])

    return (
        <Routes>
            <Route index element={<ShopPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop