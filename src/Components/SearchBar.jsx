import React from 'react'
import {FiSearch} from "react-icons/fi";
const SearchBar = () => {
  return (
    <div>
        <div className="relative z-20 -mt-6 flex justify-center px-4">
      <div className="flex items-center w-full max-w-3xl bg-gray-50 shadow-lg rounded-md px-4 py-3">
        <FiSearch className="text-gray-700 text-xl mr-3" />
        <input
          type="text"
          placeholder="What are you craving for today?"
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-900"
        />
      </div>
    </div>
    </div>
  )
}

export default SearchBar