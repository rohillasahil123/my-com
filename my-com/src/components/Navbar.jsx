import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { CartContext } from '../context/CartContex';

const Navbar = () => {

    const {cartItemLength} = useContext(CartContext)

    return (
    <div className='h-16 w-full text-center flex justify-between shadow-xl items-center fixed bg-red-50'>
            <div className='px-[3%] font-bold text-2xl'> Logo</div>
            <div className='flex space-x-4'>
                <div> <Link to='/'> Home </Link>  </div>
                <div> <Link to='/shop'> Shop </Link>  </div>
                <div> <Link to='/about'> About </Link>  </div>
                <div><Link to='/product' >All Product</Link></div> 

            </div>
            <div className='flex space-x-3 px-[3%] '>
                <div className='bg-red-600 h-5 w-5 rounded-full items-center text-center absolute ml-[1%] mt-[-1.2%]'>
                <h1 className='text-white font-bold text-[12px] '>{cartItemLength}</h1>
                </div>
                <div> <Link to='/cart'> <FaCartArrowDown size={20} color='red'  /></Link>  </div>
                <div> <Link to='/login'> <MdLogin size={20} color='red' /> </Link>  </div>
                {/* <div> <Link to='/signup'> signUp </Link>  </div> */}
            </div>
        </div>
    )
}

export default Navbar