/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import productsData from '../source/products.json'


export const ProductContext = createContext()

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState(productsData)
    const [cat, setCat] = useState(null);
    const cats = new Set(products.products.map((p) => {
        return p.category
      }))
      const currentCategories = Array.from(cats)
    const brands = new Set(products.products.map((p) => {
        return p.brand
      }))
      const currentBrands = Array.from(brands)
    return (
        <ProductContext.Provider value={{products, currentCategories, cat,setCat, currentBrands}}>
            {children}
        </ProductContext.Provider>
    )   
}

export default ProductContext;