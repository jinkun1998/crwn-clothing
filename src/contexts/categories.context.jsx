import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data.js"
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase.utils.js";

export const CategoriesContext = createContext({
    categories: {}
})

export const CategoriesProvider = ({ children }) => {
    const CATEGORIES = "categories"
    const [categories, setCategories] = useState({})

    useEffect(() => {
        addCollectionAndDocuments(CATEGORIES, SHOP_DATA)
    }, [])

    useEffect(() => {
        const getCaterories = async () => {
            const categories = await getCollectionAndDocuments(CATEGORIES)
            setCategories(categories)
        }

        getCaterories();
    }, [])

    const value = { categories }
    return <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
}