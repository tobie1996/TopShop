import { createContext, useContext, useEffect, useState } from "react"
import productsData from './products.json'

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Charger les produits depuis le fichier JSON local
    setProducts(productsData.products);
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider