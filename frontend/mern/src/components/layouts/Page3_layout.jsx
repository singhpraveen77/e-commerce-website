import React from 'react'
import women from '../../assets/womens-collection.webp'
import men from '../../assets/mens-collection.webp'

const Page3_layout = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-[10vh]'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to Our Collection</h1>
      <p className='text-lg mb-6'>Explore our exclusive range of products.</p>
      <div className='flex gap-5 overflow-x-auto w-[70vw] h-auto '>
        <div className='flex-shrink-0 w-[15vw] h-[50vh] rounded-xl bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${women})` }}></div>
        <div className='flex-shrink-0 w-[15vw] h-[50vh] rounded-xl bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${men})` }}></div>
        <div className='flex-shrink-0 w-[15vw] h-[50vh] rounded-xl bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${women})` }}></div>
        <div className='flex-shrink-0 w-[15vw] h-[50vh] rounded-xl bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${men})` }}></div>
        <div className='flex-shrink-0 w-[15vw] h-[50vh] rounded-xl bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${women})` }}></div>
        <div className='flex-shrink-0 w-[15vw] h-[50vh] rounded-xl bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${men})` }}></div>
      </div>
    </div>
  )

    
}

export default Page3_layout