import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <div className='h-16 w-full text-center flex justify-between shadow-xl items-center'>
            <div className='px-[3%] font-bold text-2xl'> Logo</div>
            <div className='flex space-x-4'>
                <div> <Link to='/'> Home </Link>  </div>
                <div> <Link to='/shop'> Shop </Link>  </div>
                <div> <Link to='/about'> AboutUS </Link>  </div>

            </div>
            <div className='flex space-x-3 px-[3%]'>
                <div> <Link to='/cart'> Cart </Link>  </div>
                <div> <Link to='/login'> Login </Link>  </div>
                <div> <Link to='/signup'> signUp </Link>  </div>
            </div>
        </div>
    )
}

export default Navbar