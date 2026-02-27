import React from 'react'
import jollof from "../assets/jollof.png";
import swallow from "../assets/swallow.png";
import suya from "../assets/suya.png";
import sweet from "../assets/sweet.png";
import jollof2 from "../assets/jollof.png";
import suya2 from "../assets/suya.png";

const PopularCategories = () => {
  const categories = [
  {
    image: jollof,
    name: 'Jollof Delights',
  },
  {
    image: swallow,
    name: 'Swallow & Soups',
  },
  {
    image: suya,
    name: 'Grills & BBQ',
  },
  {
    image: sweet,
    name: 'Sweet Treats',
  },
  {
     image: jollof2,
    name: 'Jollof Delights',
  },
  {
    image: suya2,
    name: 'Grills & BBQ',
  },
  
]

  return (
    <div className='container  mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mt-6 text-center '>Popular Categories</h2>
      <div className=" mt-8 overflow-hidden ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 rounded-xl hover:scale-105 transition duration-500 ease-in-out">
            {categories.map((category,index) => (
              <div key={index} className="bg-white shadow-md rounded-xl text-center ">
                <img className='w-full h-48 object-cover rounded-t-xl mb-6' src={category.image} />
                <h2 className='font-medium mb-10'>{category.name}</h2>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default PopularCategories