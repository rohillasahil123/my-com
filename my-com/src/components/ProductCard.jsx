  import React, { useContext, useState } from 'react'
  import Button from './Button'
  import {CartContext} from "../context/CartContex"
  import { useNavigate, useParams } from 'react-router-dom'

 
const ProductCard = ({ products }) => {
  const navigate = useNavigate(); // ✅ yaha hook call karo

  const { handleAddToCart, handleImageClick } = useContext(CartContext);

  const handleImageClickAndNavigate = (product) => {
    handleImageClick(product);
    navigate(`/single/${product.id}`);
  };


    return (
    <div className="pt-16 text-center">
    <h2 className="text-2xl font-bold mb-4">ProductCard</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.isArray(products) &&
        products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-md shadow-md flex flex-col items-center"
          >
            <img
              src={item.images}
              alt={item.title}
              onClick={()=>handleImageClickAndNavigate(item)} 
              className="h-40 w-full object-contain mb-2 hover:cursor-pointer"/>
            <h3 className="font-semibold text-lg text-center">{item.title}</h3>
            <p className="text-gray-600">{item.brand}</p>
            <p className="text-green-700 font-bold">₹{item.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="text-yellow-600">⭐ {item.discountPercentage}</p>
              <Button text="Add to cart" color="bg-blue-600 text-white text-center" onClick={()=>handleAddToCart(item)}  />
          </div>
      
        ))}
    </div>
  </div>

    )
  }

  export default ProductCard