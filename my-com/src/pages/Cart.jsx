import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { CartContext } from '../context/CartContex';
import Button from '../components/Button';

const Cart = () => {
  const { cartProduct , handleDelete } = useContext(CartContext);

  return (
    <section className="w-full min-h-screen bg-white dark:bg-[#0A2025] pt-16">
      <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
        My Shopping Cart
      </h1>

      <table className="w-[90%] mx-auto mt-6 border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Qty</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(cartProduct) &&
            cartProduct.map((item) => (
              <tr key={item.id} className="text-center border-t min-h-screen">
                <td className="px-2 py-2 flex items-center gap-3">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-[70px] h-[70px] object-contain"
                  />
                  <span>{item.title}</span>
                </td>
                <td className="px-2 py-2">₹{item.price}</td>
                <td className="px-2 py-2">1</td>
                <td className="px-2 py-2">₹{item.price}</td>
                <td className="px-2 py-2">
                  <Button  text="delete" color='bg-red-600 text-white hover:bg-red-900' onClick={()=>handleDelete(item.id)} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Coupon Box */}
      <div className="mt-6 p-5 w-[90%] mx-auto bg-white rounded-lg border border-[#e6e6e6] flex items-center gap-6">
        <h3 className="text-[#191919] w-1/4 text-xl font-medium leading-[30px]">
          Coupon Code
        </h3>
        <div className="w-full flex gap-2">
          <input
            placeholder="Enter code"
            type="text"
            className="w-2/3 px-6 py-3.5 outline-none bg-white rounded-[46px] text-[#999999] text-base font-normal leading-normal border"
          />
          <button className="px-10 py-4 bg-[#333333] rounded-[43px] text-white text-base font-semibold leading-tight">
            Apply Coupon
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
