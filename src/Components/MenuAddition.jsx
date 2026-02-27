import React from 'react'
import newMenu from "../assets/newMenu.png";

const MenuAddition = () => {
  return (
    <div>
        <div className='relative h-screen w-full' >
                <img src={newMenu} alt="banner" className='absolute inset-0 h-full w-full md:object-left object-cover object-center' />
                <div className='absolute inset-0 bg-black/40'></div>
                <div className='font-inter text-white absolute inset-0 flex flex-col gap-4 items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
                    <h1 className='text-[20px] font-bold md:text-2xl lg:text-[34px] max-w-62 md:max-w-80 lg:max-w-160 leading-tight lg:leading-10'>Introducing Our New Menu Additions!</h1>
                    <p className='text-12px lg:text-[20px] md:text-[12px] font-medium'>Explore exciting new dishes, crafted with the freshest <br/> ingredients and authentic Nigerian flavors. Limited time <br/> offer!</p>
                
                   <div className='flex items-center  font-medium'>
                        <p className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-[#FF7A18] hover:bg-orange-600 transition rounded-lg text-white cursor-pointer'>Discover what's new</p>
                        
                  </div>
                </div>
        </div>
    </div>
  )
}

export default MenuAddition