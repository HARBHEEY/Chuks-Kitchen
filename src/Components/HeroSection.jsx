import React from 'react'
import bg from "../assets/heroPics.png";

const HeroSection = () => {
  return (
    <div>
        <div className='relative h-screen w-full' >
        <img src={bg} alt="banner" className='absolute inset-0 h-full w-full md:object-left object-cover object-center' />
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='font-inter text-white absolute inset-0 flex flex-col gap-4 items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
            <h1 className='text-2xl font-bold md:text-2xl lg:text-[38px] max-w-72 md:max-w-80 lg:max-w-150 leading-tight lg:leading-10'>The Heart of Nigerian Home Cooking</h1>
            <p className='text-16px lg:text-[28px] md:text-[16px] font-medium'>Handcrafted with passion, delivered with care.</p>
        
           <div className='flex items-center mt-6 font-medium'>
                <p className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-[#FF7A18] hover:bg-orange-600 transition rounded-lg text-white cursor-pointer'>Discover what's new</p>
                
          </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection