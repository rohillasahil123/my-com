import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContex";

const SinglePage = () => {
  const { id } = useParams();
  const { imagehandle, setImagehandle, handleAddToCart } = useContext(CartContext);

  useEffect(() => {
    if (!imagehandle) {
      const stored = localStorage.getItem("selectedProduct");
      if (stored) {
        setImagehandle(JSON.parse(stored));
      }
    }
  }, []);

  const product = imagehandle;

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-2xl font-semibold text-gray-500">❌ Product Not Found</p>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left - Product Image */}
        <div className="bg-white rounded-2xl shadow-xl flex justify-center items-center p-8 w-full lg:w-[50%] hover:shadow-2xl transition-all duration-300">
          <img
            src={product.images}
            alt={product.title}
            className="max-h-[500px] object-contain transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right - Product Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-[50%] flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all duration-300">
          
          {/* Title + Brand */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">{product.title}</h1>
            <p className="text-gray-500 text-lg mt-1">by {product.brand}</p>
          </div>

          {/* Price + Discount */}
          <div className="flex items-center gap-4">
            <p className="text-4xl font-bold text-green-700">₹{product.price}</p>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Category */}
          <p className="text-sm text-gray-500">📦 Category: {product.category}</p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed border-t pt-4">{product.description}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={() => handleAddToCart(product)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300"
            >
              🛒 Add to Cart
            </button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300">
              ⚡ Buy Now
            </button>
          </div>

          {/* Delivery & Info */}
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>🚚 Free delivery within 4-6 business days</p>
            <p>🔄 7 Days Replacement Policy</p>
            <p>✅ Cash on Delivery Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
