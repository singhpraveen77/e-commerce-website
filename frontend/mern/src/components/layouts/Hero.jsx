import React from 'react'
import image from '../../assets/rabbit-hero.webp'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen rounded-[1vw] bg-cover bg-center text-center text-white" id="simg" style={{ backgroundImage: `url(${image})` }}>
        <h1 className="font-bold text-9xl ">
          VACATION <br /> READY
        </h1>
        <p className="text-sm mt-2">explore our vacation ready outfits with fast world wide shopping</p>
        <button className='mt-4 bg-red-500 text-black font-bold py-2 px-4 rounded'>sign-up</button>
    </div>
  )
}

export default Hero

