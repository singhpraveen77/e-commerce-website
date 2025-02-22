import React from 'react'
import women from '../assets/womens-collection.webp'


const Wear_comp = () => {
  return (
    <div className="bg-white shadow-md rounded-lg  flex flex-col h-[50vh] w-[20vw]">
        <img src={women} alt="Women's Collection" className="w-[20vw] h-[40vh] rounded-lg object-cover rounded-t-lg" />
        <div className="text-center h-[10vh]">
            <h2 className="text-xl font-semibold mt-2 ">Elegant Dress</h2>
            <p className="text-gray-700">$49.99</p>
        </div>
    </div>
  )
}

export default Wear_comp