import React from 'react'
import explorepic from "../assets/explorePic.jpg";
const ExploreHero = () => {
  return (
    <div>
        <div className='relative h-screen w-full' >
                <img src={explorepic} alt="banner" className='absolute inset-0 h-full w-full md:object-left object-cover object-center' />
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='font-inter text-white absolute inset-0 flex flex-col gap-4 items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
                    <h1 className='text-2xl font-bold md:text-2xl lg:text-[38px] max-w-72 md:max-w-80 lg:max-w-150 leading-tight lg:leading-10'>Chuks Kitchen</h1>
                    <p className='text-16px lg:text-[28px] md:text-[16px] font-normal'>Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
                
                </div>
            </div>
    </div>
  )
}

export default ExploreHero