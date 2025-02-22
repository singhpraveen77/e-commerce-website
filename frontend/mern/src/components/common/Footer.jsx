import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-200 p-4 text-center text-gray-600">
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <div className="md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Shop Support</h2>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Return Policy</a></li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Newsletter</h2>
            <p>Stay up to date with the latest news and promotions</p>
            <input type="email" placeholder="Enter your email" className="w-full p-2 mb-2" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">Subscribe</button>
          </div>
        </div>
        <p>Copyright 2023 E-Commerce Web. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
    </div>
  )
}

export default Footer