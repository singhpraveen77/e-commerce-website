import React from 'react'
import women from '../../assets/womens-collection.webp'
import men from '../../assets/mens-collection.webp'

const Page2_layout = () => {
  return (
    <div className='flex gap-5 mt-[10vh] w-full justify-center'>
        <div className="relative flex flex-col items-center justify-center w-2/5 h-[90vh] rounded-xl bg-contain bg-no-repeat text-center text-white" id="simg" style={{ backgroundImage: `url(${women})` }}>
            <div className="absolute bottom-1 p-2 rounded-2xl bg-white text-black bg-opacity-30">
                <h2 className="text-xl font-bold  mb-2">Women's Collection</h2>
                <a href="#" className="text-lg underline">Shop Now</a>
            </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-2/5 h-[90vh] rounded-xl bg-contain bg-no-repeat bg-center text-center text-white" id="simg" style={{ backgroundImage: `url(${men})` }}>
            <div className="absolute bottom-1 right-15 p-2 rounded-2xl bg-white text-black bg-opacity-30">
                <h2 className="text-xl font-bold  mb-2">men's Collection</h2>
                <a href="#" className="text-lg underline">Shop Now</a>
            </div>
        </div>
    </div>
  )
}

export default Page2_layout