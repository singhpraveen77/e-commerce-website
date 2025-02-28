import React from 'react'
import { HiOutlineUser, HiOutlineShoppingBag, HiOutlineBars3BottomRight, HiMiniXMark } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartDrawer } from '../../redux/cartSlice'
import { Cart_drawer } from '../layouts/Cart_drawer'

const Navbar = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.cart.isOpen);
    const handleCartToggle = () => {
        dispatch(toggleCartDrawer());
    }

    return (
        <nav className='w-full flex items-center justify-between py-4 px-5 bg-white'>
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
                    Top Wear
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    Bottom Wear
                </Link>
            </div>
            <div className='flex text-right gap-1'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded uppercase text-sm">
                    <Link to="/login" className="no-underline text-white">Login</Link>
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded uppercase text-sm">
                    <Link to="/register" className="no-underline text-white">Register</Link>
                </button>
                <button className='md:hidden flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300'>
                    <HiOutlineBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>

                {isOpen && <Cart_drawer />}

                <button onClick={handleCartToggle} className="relative" >
                    <HiOutlineShoppingBag className=" text-gray-700 h-8 w-8 " />
                    <span className='absolute top-[-10px] right-[-10px] bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>4</span>
                </button>

                <Link to="/profile" className="hover:text-black">
                    <HiOutlineUser className="h-7 w-7 mt-1.5  text-gray-700" />
                </Link>
                <Search />
            </div>
        </nav>
    )
}

export default Navbar