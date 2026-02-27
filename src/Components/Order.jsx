import React from 'react'
import cart from "../assets/cart.png";
import cart2 from "../assets/cart2.png";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png";

const Order = () => {
    const orderItems = [
        {
            id: 1,
            name: "Jollof Rice & Fried Chicken",
            description: "With plantain, extra pepper sauce",
            image: cart,
            price: 3200,
        },
        {
            id: 2,
            name: "Jollof Rice & Fried Chicken",
            description: "With plantain, extra pepper sauce",
            image: cart2,
            price: 3200,
        },
        {
            id: 3,
            name: "Jollof Rice & Fried Chicken",
            description: "With plantain, extra pepper sauce",
            image: cart3,
            price: 3200,
        },
        {
            id: 4,
            name: "Jollof Rice & Fried Chicken",
            description: "With plantain, extra pepper sauce",
            image: cart4,
            price: 3200,
        }
    ];
  return (
    <div className='container mx-auto py-10'>
        <div className='bg-white rounded-sm px-3 py-4 shadow-sm'>
        <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
        <div className="space-y-4 ">
            {orderItems.map((item) => (
            <div key={item.id} className="flex flex-col lg:flex-row lg:items-center p-3 bg-white shadow-md border-none rounded-lg overflow-hidden ">
                <div className='flex gap-3 w-full'>
                  <img className='w-24 lg:h-24 h-28 flex-shink-0 object-cover rounded-lg hover:scale-105' src={item.image} />
                  
                  <div className='flex flex-col lg:flex-row items-start w-full lg:items-center gap-2 lg:gap-16 lg:justify-between'>
                    <div className='leading-4 flex-1'>
                        <h2 className='font-semibold text-md lg:text-lg  '>{item.name}</h2>
                        <p className='text-[#4B5563] text-sm mt-2'> {item.description} </p>
                    </div>
                
        
                    <div className='flex items-center mr-auto gap-10'>
                        <button className='w-4 h-4 bg-[#BDBDBD] rounded-sm flex items-center justify-center'>-</button>
                        <span className='text-lg font-medium'>1</span>
                        <button className='w-4 h-4 bg-[#BDBDBD] rounded-sm flex items-center justify-center'>+</button>
                    </div>

                    <div className='flex items-center mr-auto gap-13'> 
                        <span className='text-[#FF7A18] font-normal'>&#8358;{item.price.toLocaleString()}</span>
                        <button className='lg:bg-[#FF7A18] bg-black text-white w-4 h-4 rounded-xs flex items-center justify-center'>×</button>
                    </div>

                 </div>
                </div>
            </div>
            ))}
        </div>
        <p className='text-blue-500 text-sm mt-4 cursor-pointer hover:underline'>+ Add more items from Chuks Kitchen</p>
        </div>


    </div>
  )
}

export default Order