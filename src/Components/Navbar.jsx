import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
    setOpen(!open);
  }
   
  return (
    <div className="sticky top-0 z-50">
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
            <a href="/" >
                <h1 className='text-[#FF7A18] text-[40px] leading-10 font-normal font-island '>Chuks Kitchen</h1>
            </a>

            {/* Desktop Menu */}
               <div className="hidden sm:flex items-center gap-8">
                  <NavLink to="/"className={({ isActive }) => isActive ? "text-[#FF7A18] font-medium" : "hover:text-[#FF7A18] transition-colors"}>Home</NavLink>
                  <NavLink to="/explore" className={({ isActive }) => isActive ? "text-[#FF7A18] font-medium" : "hover:text-[#FF7A18] transition-colors"}>Explore</NavLink>
                  <NavLink to="/my-orders" className={({ isActive }) => isActive ? "text-[#FF7A18] font-medium" : "hover:text-[#FF7A18] transition-colors"}>My Orders</NavLink>
                  <NavLink to="/account" className={({ isActive }) => isActive ? "text-[#FF7A18] font-medium" : "hover:text-[#FF7A18] transition-colors"}>Account</NavLink>
                  <NavLink to="/login" className="cursor-pointer px-8 py-2 bg-[#FF7A18] hover:bg-orange-600 transition text-white rounded-lg">Login</NavLink>
                </div>



              <div onClick={toggleMenu} className='block md:hidden'>
                  {open ? <AiOutlineClose className='cursor-pointer' size={30} /> : <AiOutlineMenu className='cursor-pointer' size={30} />}
               </div>

                {/* Mobile Menu */}
                <div className={open ? 'md:hidden fixed flex top-15 left-0 w-[60%] bg-white shadow-md h-full py-4 flex-col items-start gap-2 px-5 text-sm ' : 'fixed left-full'}>
                    <NavLink to="/" onClick={() => setOpen(false)}className={({ isActive }) => isActive ? "text-[#FF7A18] font-medium" : "hover:text-[#FF7A18] transition-colors"}>Home</NavLink>
                    <NavLink to="/explore" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#FF7A18] font-medium" : "hover:text-[#FF7A18] transition-colors"}>Explore</NavLink>
                    <NavLink to="/my-orders" onClick={() => setOpen(false)}className={({ isActive }) => isActive ? "text-[#FF7A18] font-medium" : "hover:text-[#FF7A18] transition-colors"}>My Orders</NavLink>
                    <NavLink to="/account" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#FF7A18] font-medium" : "hover:text-[#FF7A18] transition-colors"}>Account</NavLink>
                      <NavLink to="/login" onClick={() => setOpen(false)} className="cursor-pointer px-8 py-2 bg-[#FF7A18] hover:bg-orange-600 transition text-white rounded-lg">Login</NavLink>
                </div>

        </nav>
    </div>
  )
}

export default Navbar