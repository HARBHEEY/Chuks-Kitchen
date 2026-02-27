import React from 'react'
import HeroSection from '../Components/HeroSection'
import SearchBar from '../Components/SearchBar'
import PopularCategories from '../Components/PopularCategories'
import ChefsSpecial from '../Components/ChefsSpecial'
import MenuAddition from '../Components/MenuAddition'

const Home = () => {
  return (
    <div className='bg-[#F3F4F6]'>
      <HeroSection />
      <SearchBar />
      <PopularCategories />
      <ChefsSpecial />
      <MenuAddition />
    </div>
  )
}

export default Home