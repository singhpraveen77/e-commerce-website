import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Implement search functionality here
        console.log("Searching for:", searchTerm);
    }

    return (
        <div className={`flex items-center justify-center  transition-all duration-300
            ${isOpen ? "absolute top-12  left-1/2 transform -translate-x-1/2 bg-white h-12 w-[40vw] z-50" : "w-auto"}`}>
            {isOpen ? (
                <form onSubmit={handleFormSubmit} className='relative items-center justify-center w-full'>
                    <div className='relative w-full flex items-center'>
                        <input
                            type="text"
                            placeholder='Search'
                            value={searchTerm}
                            onChange={handleInputChange}
                            className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'
                        />
                        <button type='submit' onClick={handleSearchToggle} className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                            <HiMagnifyingGlass className='h-6 w-6' />
                        </button>
                        <button type='button' onClick={handleSearchToggle} className='absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                            <HiMiniXMark className='h-6 w-6' />
                        </button>
                    </div>
                </form>
            ) : (
                <button onClick={handleSearchToggle}>
                    <HiMagnifyingGlass className='h-6 w-6' />
                </button>
            )}
        </div>
    )
}

export default Search