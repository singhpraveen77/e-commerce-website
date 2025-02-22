import React from 'react'
import contributors from '../../assets/featured.webp'

const Page6_layout = () => {
  return (
    <div className="flex   gap-[20vh] justify-center items-center pl-[5vw]  h-screen ">
      <div className="flex flex-col items-start ml-10">
        <h1 className="text-4xl font-bold ">Meet Our Contributors</h1>
        <p className="text-lg mb-6">Our team of contributors are passionate about fashion and dedicated to bringing you the latest trends.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
          Shop Now
        </button>
      </div>
      <div className="mr-5">
        <img src={contributors} alt="Contributors" className="w-3/4 border h-auto object-cover rounded-lg" />
      </div>
    </div>
  )
}

export default Page6_layout