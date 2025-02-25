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
                <Search />
                <Link to="/profile" className="hover:text-black">
                    <HiOutlineUser className="h-6 w-6 text-gray-700" />
                </Link>
                <button onClick={handleCartToggle} className="relative flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                    <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
                    <span className='absolute top-[-10px] right-[-10px] bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>4</span>
                </button>
                {isOpen && <Cart_drawer />}
                <button className='md:hidden flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300'>
                    <HiOutlineBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>
                <Link to="/login" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    Login
                </Link>
                <Link to="/register" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    Register
                </Link>
            </div>
        </nav>
    )
}

export default Navbar