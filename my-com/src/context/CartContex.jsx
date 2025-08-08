import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);
  const [cartItemLength, setCartItemLength] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [imagehandle , setImagehandle] = useState("")

  const handleAddToCart = (item) => {
    const isExist = cartProduct.find(product => product.id === item.id);

    if (isExist) {
      const updatedCart = cartProduct.map(product =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : { ...product }
      );
      setCartProduct(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartProduct(prev => [...prev, newItem]);
    }
  };



  // decrese Button 

  const decreaseQuantity = (id) => {
    const updatedCart = cartProduct.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    setCartProduct(updatedCart)
  }

  // incress Button 

  const increaseQuantity =(id)=>{
    const upadetdCart = cartProduct.map(item=>{
      if(item.id === id ){
        return { ...item , quantity : item.quantity + 1 }
      }
      return item
    })
    setCartProduct(upadetdCart)
  }

  useEffect(()=>{
   const total = cartProduct.reduce((acc , item)=>acc + item.price , 0 )
   setTotalPrice(total)
  },[cartProduct])


  useEffect(() => {
    const totalquantity = cartProduct.reduce((sum, item) => sum + item.quantity, 0)
    setItemQuantity(totalquantity)
  }, [cartProduct])

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


 const handleImageClick = (id)=>{
  const imageClick = cartProduct.find((photo ,item) => photo.id === id )
  setImagehandle(imageClick)
  console.log(imagehandle,"ttry")
 }

  useEffect(() => {
    if (cartProduct.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProduct));
    } else {
      localStorage.removeItem("cart");
    }
    setCartItemLength(cartProduct.length);
  }, [cartProduct]);

  return (
    <CartContext.Provider value={{ handleAddToCart, cartProduct, cartItemLength, handleDelete, itemQuantity, setItemQuantity , decreaseQuantity , increaseQuantity, totalPrice , handleImageClick }}>
      {children}
    </CartContext.Provider>
  );
};
