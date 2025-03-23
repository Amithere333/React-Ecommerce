import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between py-4  px-8 bg-white  w-full shadow-md">
        <div className="logo">
            <h1 className='text-2xl font-bold text-pink-700'>Ecodewear</h1>
        </div>


        <div className="navLink ">
            <ul className='flex items-center space-x-8'>
                <li className='text-md hover:text-pink-700 transition-colors'><Link to='/'>Home</Link></li>
                <li className='text-md hover:text-pink-700 transition-colors'><Link to='/'>About Us</Link></li>
                <li className='text-md hover:text-pink-700 transition-colors'><Link to='/products'>Products</Link></li>
                <li className='text-md hover:text-pink-700 transition-colors'><Link to='/'>Contact Us</Link></li>

            </ul>
        </div>

        {/* cart icons */}

        <div className="cartIcon flex items-center space-x-4">
            <Link to='/'>
            <ShoppingCart/>
            </Link>


            {/* Login button */}
            <button className='bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors'>
                <Link to ='/login'>Login</Link>
            </button>


        </div>


    </div>
   
  )
}

export default Navbar