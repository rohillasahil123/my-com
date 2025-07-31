  import React, { createContext , useEffect, useState } from 'react'

  export const CartContext = createContext()

  export const CartProvider = ({children}) => {
  const [cartProduct, setCartProduct] = useState([])

    const handleAddToCart = (item) => {
      setCartProduct(prev =>[...prev, item])
    }





    useEffect(()=>{
      const storeCart = localStorage.getItem("cart")
      if(storeCart){
        setCartProduct(JSON.parse(storeCart))
      }

    },[])

useEffect(() => {
  if (cartProduct.length === 0) return; // don't save empty array
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}, [cartProduct]);



  return(
      <CartContext.Provider value={{handleAddToCart , cartProduct}}>
          {children}
      </CartContext.Provider>
  )
      
  
  }