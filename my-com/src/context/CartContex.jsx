import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);
  const [cartItemLength, setCartItemLength] = useState(0);
  const [itemQuantity , setItemQuantity] = useState(0)

  const handleAddToCart = (item) => {
   const res = cartProduct.find(product => product.id === item.id)
   console.log(res)
   
 
//     if(cartProduct.id === item.id){ 
// setItemQuantity(itemQuantity =+1 )
//     }else{
//          setCartProduct(prev => [...prev, item]);
//     }
  };

  const handleDelete = (id) => {
    const updatedCart = cartProduct.filter(item => item.id !== id);
    setCartProduct(updatedCart);
  };

  // 👇 Load cart from localStorage when app starts
  useEffect(() => {
    const storeCart = localStorage.getItem("cart");
    if (storeCart) {
      try {
        const parsed = JSON.parse(storeCart);
        setCartProduct(parsed);
      } catch {
        localStorage.removeItem("cart");
      }
    }
  }, []);

 
  useEffect(() => {
    if (cartProduct.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProduct));
    } else {
      localStorage.removeItem("cart"); 
    }
    setCartItemLength(cartProduct.length);
  }, [cartProduct]);

  return (
    <CartContext.Provider value={{ handleAddToCart, cartProduct, cartItemLength, handleDelete }}>
      {children}
    </CartContext.Provider>
  );
};
