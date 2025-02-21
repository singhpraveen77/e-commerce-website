import React from 'react'
import men from '../../assets/mens-collection.webp'

const Page4_layout = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-[5vh]">
        <h1 className="text-3xl font-bold text-center mb-6">Best Seller</h1>

        <div className="flex flex-col md:flex-row items-center">
            <img src={men} alt="Product Image" className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-6">
                <h2 className="text-2xl font-semibold mb-2">Slim-Fit Easy-Iron Shirt</h2>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error suscipit sit repellat expedita quaerat, dolor amet dolores esse eum impedit voluptatem ab dignissimos libero ex sunt. Eum, ad beatae?</p>

                <div className="mb-4">
                    <h1 className="text-lg font-medium mb-2">Color</h1>
                    <div className="flex space-x-2">
                        <button className='w-6 h-6 rounded-full border-2 border-amber-50 bg-amber-50 hover:border-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200'></button>
                        <button className='w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400'></button>
                    </div>
                </div>

                <div className="mb-4">
                    <h1 className="text-lg font-medium mb-2">Size</h1>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">S</button>
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">M</button>
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">L</button>
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">XL</button>
                    </div>
                </div>

                <div className="mb-4">
                    <h1 className="text-lg font-medium mb-2">Quantity</h1>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">-</button>
                        <div className="px-3 py-1 border rounded-md">1</div>
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">+</button>
                    </div>
                </div>

                <div className="mb-4">
                    <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">Add to Cart</button>
                </div>

                <div>
                    <h1 className="text-lg font-medium mb-2">Characteristics:</h1>
                    <div className="flex justify-between mb-1">
                        <p className="font-medium">Brand</p>
                        <p>Urban Chic</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium">Material</p>
                        <p>Cotton</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4_layout