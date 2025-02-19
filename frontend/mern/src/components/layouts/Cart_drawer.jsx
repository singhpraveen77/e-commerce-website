import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartDrawer } from '../../redux/cartSlice'
import { HiMiniXMark } from 'react-icons/hi2' // Assuming this is the correct import for HiMiniXMark

export const Cart_drawer = () => {
  const isOpen = useSelector(state => state.cart.isOpen);
  console.log("cvbvghjk");
  const dispatch = useDispatch();
  
  function toggle_cart() {
    dispatch(toggleCartDrawer());
  }
  
  return (
    (
      <div className={`fixed top-0 right-0 w-1/4 h-full flex flex-col text-center bg-white shadow-lg transition-transform transform duration-3000 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-center items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Your Cart</h2>
          <button onClick={toggle_cart} className="absolute right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {/* Cart items will be listed here */}
        </div>
      </div>
      
    )
  );
}
