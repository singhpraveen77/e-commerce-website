import React from 'react'
import {HiOutlineUser, HiOutlineShoppingBag, HiOutlineShoppingCart,HiOutlineBars3BottomRight} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import Search from './Search'


const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between py-4 px-5 '>
        <div className='flex-none text-left'>
            <Link to="/" className="text-2xl font-medium">
                Rabbit
            </Link>
        </div>
        <div className='hidden md:flex flex-1 justify-center space-x-6'>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Men
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Women
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                top wear
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                bottom wear
            </Link>
        </div>
        <div className='flex text-right gap-1'>
            <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
            </Link>
            
            <button className="relative ">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className='absolute top-[-10px] right-[-10px] bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>4</span>
            </button>
            <Search className="h-6 w-6 text-gray-700"/>
            <button className='md:hidden'>
            <HiOutlineBars3BottomRight className="h-6 w-6 text-gray-700" />
            </button>
        </div>
    </nav>
  )
}

export default Navbar