import React from 'react'
import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram} from "react-icons/io"
import {RiTwitterXLine} from "react-icons/ri"


const Topbar_layout = () => {
  return (
    <div className=' bg-[#ea2e0e] text-white'>
        <div className='container mx-auto flex justify-between items-center space-x-4 py-3 px-4'>
            <div className='hidden md:flex items-center space-x-4'>
            <a href="#" className='hover:text-gray-300'>
                <TbBrandMeta className='h5 w-5'/>
            </a>

            <a href="#" className='hover:text-gray-300'>
                <IoLogoInstagram className='h5 w-5'/>
            </a>
            <a href="#" className='hover:text-gray-300'>
                <RiTwitterXLine className='h5 w-5'/>
            </a>

            </div>
            <div className='text-sm text-center flex-grow'>
                <span>We ship world wide - Fast and reliable shipping !!</span>
            </div>
            <div className='text-sm hidden md:block'>
                <a href="tel:+1234567890" className='hover:text-gray-300'>
                    +1 (234) 567-890
                </a>
            </div>
           
        </div>
    </div>
  )
}

export default Topbar_layout