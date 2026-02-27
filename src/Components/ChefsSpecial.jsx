import React from 'react'
import tilapa from "../assets/tilapia.png";
import jollof from "../assets/jollof.png";
import jollof2 from "../assets/jollof.png";
import jollof3 from "../assets/jollof.png";
import jollof4 from "../assets/jollof.png";
import swallow4 from "../assets/swallow4.png";

const ChefsSpecial = () => {
    const chefs = [
      {
        image: tilapa,
        name: 'Spicy Tilapia Pepper Soup',
        description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',
        price: 3500,
      },
      {
        image: jollof,
        name: 'Jollof Rice & Fried Chicken',
        description:'Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.',
        price: 3500,
      },
      {
        image: jollof2,
        name: 'Jollof Rice & Fried Chicken',
        description:'Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.',
        price: 3500,
      },
      {
        image: jollof3,
        name: 'Jollof Rice & Fried Chicken',
        description:'Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.',
        price: 3500,
      },
      {
        image: jollof4,
        name: 'Jollof Rice & Fried Chicken',
        description:'Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.',
        price: 3500,
      },
      {
        image: swallow4,
        name: 'Egusi Soup & Pounded Yam',
        description:'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
        price: 3500,
      },
      
    ]
  return (
    <div className='container  mx-auto px-4 py-8'>
         <h2 className='text-2xl font-bold mt-10 text-center'>Chef's Special</h2>
         <div className=" mt-8 overflow-hidden ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 rounded-xl transition duration-500 ease-in-out">
            {chefs.map((chef,index) => (
              <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden ">
                <img className='w-full h-48 object-cover rounded-t-xl hover:scale-105' src={chef.image} />
                <div className="p-5">
                    <h2 className='font-semibold text-[1F2937]'>{chef.name}</h2>
                    <p className='text-[1F2937] text-sm mt-2'> {chef.description} </p>
                </div>
                <div className='flex items-center justify-between px-5 py-3 mb-6'>
                    <span className='text-[#FF7A18] font-normal'>&#8358;{chef.price.toLocaleString()}</span>
                    <button className='bg-[#FF7A18] font-medium text-sm rounded-lg px-4 py-2 hover:bg-orange-600 text-white transition duration-300 ease-in-out'>
                        Add to Cart
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ChefsSpecial