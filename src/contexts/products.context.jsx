import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json"

export const ProductContext = createContext({
    products: []
})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS)
    return <ProductContext.Provider value={children} />
}