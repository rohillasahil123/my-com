import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
    return (
    <div className='h-16 w-full text-center flex justify-between shadow-xl items-center fixed bg-red-50'>
            <div className='px-[3%] font-bold text-2xl'> Logo</div>
            <div className='flex space-x-4'>
                <div> <Link to='/'> Home </Link>  </div>
                <div> <Link to='/shop'> Shop </Link>  </div>
                <div> <Link to='/about'> About </Link>  </div>
                <div><Link to='/product' >All Product</Link></div> 

            </div>
            <div className='flex space-x-3 px-[3%]'>
                <div> <Link to='/cart'> <FaCartArrowDown size={20} color='red'  /></Link>  </div>
                <div> <Link to='/login'> <MdLogin size={20} color='red' /> </Link>  </div>
                {/* <div> <Link to='/signup'> signUp </Link>  </div> */}
            </div>
        </div>
    )
}

export default Navbar