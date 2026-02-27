import React, { useState } from 'react'
import Tilapia from "../assets/grilledTilapia.png";
import jollof from "../assets/jollof.png";
import jollof2 from "../assets/jollof2.png";
import okro from "../assets/okroSwallow.png";
import amala from "../assets/swallow3.png";
import swallow2 from "../assets/swallow2.png";
import iyan from "../assets/iyan.png";
import snail from "../assets/pepperedSnail.png";
import suya from "../assets/suya.png";
import { HiPlusCircle } from "react-icons/hi2";

const MenuCategories = () => {
  const meals = [
  {
    id: 1,
    category: "Popular",
    image: jollof,
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature jollof rice, served with cripsy fried chicken and plaintain.",
    price: 3500,
  },
  {
    id: 2,
    category: "Popular",
    image: swallow2,
    name: "Eba & Egusi Soup (Goat Meat)",
    description:"Hearty Egusi soup with tender goat meat, served with soft Eba.",
    price: 3500,
  },
  {
    id: 3,
    category: "Popular",
    image: iyan,
    name: "Pounded Yam & Edikaikong",
    description:"Traditional pounded yam with rich, leafy Edikaikong soup.",
    price: 3800,
  },
  {
    id: 4,
    category: "Popular",
    image: snail,
    name: "Peppered Snail",
    description:"Spicy and savory peppered snail, perfect as a starter.",
    price: 2500,
  },
  {
    id: 5,
    category: "Popular",
    image: Tilapia,
    name: "Grilled Tilapia Fish",
    description:"Whole grilled tilapia seasoned with our special spices.",
    price: 4500,
  },
  {
    id: 6,
    category: "Popular",
    image: jollof,
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature jollof rice, served with cripsy fried chicken and plaintain.",
    price: 3500,
  },
  {
    id: 7,
    category: "Jollof Rice & Entrees",
    image: jollof2,
    name: "Jollof Rice & Smoked Fish",
    description: "Flavorful jollof served with perfectly smoked fish.",
    price: 3500,
  },
  {
    id: 8,
    category: "Jollof Rice & Entrees",
    image: jollof,
    name: "Party Jollof Rice (Veg)",
    description: "Our signature jollof rice, served with cripsy fried chicken and plaintain.",
    price: 2800,
  },
  {
    id: 9,
    category: "Jollof Rice & Entrees",
    image: jollof,
    name: "Party Jollof Rice (Veg)",
    description: "Our signature jollof rice, served with cripsy fried chicken and plaintain.",
    price: 3500,
  },
  {
    id: 10,
    category: "Swallow & Soups",
    image: amala,
    name: "Amala with Gbegiri & Ewedu",
    description: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
    price: 3100,
  },
  {
    id: 11,
    category: "Swallow & Soups",
    image: okro,
    name: "Fufu & Okra Soup (Fish)",
    description: "Light fufu served with fresh okra soup and tender fish.",
    price: 3300,
  },
  {
    id: 12,
    category: "Swallow & Soups",
    image: okro,
    name: "Fufu & Okra Soup (Fish)",
    description: "Light fufu served with fresh okra soup and tender fish.",
    price: 3500,
  },
  {
    id: 13,
    category: "Grills & sides",
    image: suya,
    name: "Spicy Beef Suya",
    description: "Thinly sliced beef marinated in our special suya spices and grilled to perfection.",
    price: 3000,
  }
];

    const [active, setActive] = useState("Popular");

  const categories = [
    "Popular",
    "Jollof Rice & Entrees",
    "Swallow & Soups",
    "Grills & sides",
    "Beverages",
    "Desserts",
  ];
  const filteredMeals = meals.filter((meal) => meal.category === active);

  return (
    <div className=' container mx-auto py-8 px-2'>
      <div className='flex-col lg:flex-row gap-8'>
        <div className="bg-white text-black rounded-t-lg shadow-sm  w-full ">
      <h2 className="text-lg font-semibold p-4">
        Menu Categories
      </h2>

      <ul className="">
        {categories.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`relative cursor-pointer px-4 py-2 w-full transition-all ${active === item ? "bg-[#FFE1CA] font-medium" : "hover:bg-gray-100"}`}> {active === item && (<span className="absolute left-0 top-0 h-full w-1 bg-[#FF7A18] rounded-full"></span>)}
            {item}
          </li>
        ))}
      </ul>
    </div>


    <h2 className='text-2xl font-bold mb-6 mt-8'>{active}</h2>
    <div className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 rounded-xl transition duration-500 ease-in-out">
            {filteredMeals.map((meals) => (
              <div key={meals.id} className="flex p-3 lg:p-0 lg:block gap-3 bg-white shadow-md rounded-xl overflow-hidden">
                <div className='lg:h-48 lg:w-full w-28 h-28 flex-shink-0 rounded-md lg:rounded-t-xl overflow-hidden'>
                  <img className='w-full h-full object-cover hover:scale-105' src={meals.image} />
                </div>
                <div className="flex flex-col p-0 lg:p-4 justify-between flex-1">
                    <h2 className='font-semibold leading-tight text-[1F2937]'>{meals.name}</h2>
                    <p className='text-[1F2937] text-sm mt-2 leading-snug'> {meals.description} </p>
                <div className='flex items-center justify-between mt-3'>
                    <span className='text-[#FF7A18] font-normal'>&#8358;{meals.price.toLocaleString()}</span>
                    <span className='text-[#FF7A18] '><HiPlusCircle /> </span>
                </div>
                </div>
              </div>
            ))}
          </div>
          </div>
    </div>
  )
}

export default MenuCategories