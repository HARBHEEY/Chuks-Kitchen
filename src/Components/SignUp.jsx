import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { IoEye, IoEyeOff  } from "react-icons/io5";
import onboard from "../assets/onboarding.png";
import { FcGoogle } from "react-icons/fc";
import facebook from "../assets/facebook (3).png";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
        <section className='bg-[#F3F4F6] text-[1F2937] flex flex-col lg:flex-row'>
                    <div className='relative h-screen lg:flex lg:w-1/2' >
                            <img src={onboard} alt="banner" className='h-full w-full md:object-left object-cover ' />
                            <div className='absolute inset-0 bg-[#FF7A18]/60 flex items-center justify-center p-10'>
                            <div className='font-inter text-white text-center max-w-md'>
                                <h1 className='text-2xl font-bold md:text-2xl lg:text-[38px] max-w-72 md:max-w-80 lg:max-w-150 leading-tight mb-4 lg:leading-10'>Chuks Kitchen</h1>
                                <p className='text-16px lg:text-[22px] md:text-[16px] font-medium '>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favourites today!</p>
                            </div>
                            </div>
                        </div>
        
                    <div className='flex items-center justify-center w-full lg:w-1/2 p-6'>
                    <div className="w-full max-w-md">
                    <div className="flex justify-center">
                        <a href="/" >
                        <h1 className='text-[#FF7A18] text-[40px] leading-10 font-normal font-island '>Chuks Kitchen</h1>
                    </a>
                    </div>


                    <h1 className="mb-4 text-center text-2xl font-semibold">Create your Account</h1>


                    <form>
                        <div className="space-y-2">
                            <label htmlFor="email" className="mb-1 block text-[#3B4758] text-sm">Email</label>
                            <div className="relative">
                        <MdEmail className='absolute left-4 top-1/2 -translate-y-1/2'/>
                        <input className="w-full pl-12 p-4 outline-none text-[#292535] py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-normal text-sm" type="text" placeholder="name@gmail.com" required />
                    </div>
                    </div>
                    <div className="space-y-2">
                            <label htmlFor="email" className="mb-1 block text-[#3B4758] text-sm">Phone number</label>
                            <div className="relative">
                        <MdLocalPhone className='absolute left-4 top-1/2 -translate-y-1/2'/>
                        <input className="w-full pl-12 p-4 outline-none text-[#292535] py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-normal text-sm" type="text" placeholder="8123340690" required />
                    </div>
                        </div>

                        {/* password section */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="mb-1 block text-[#3B4758] text-sm">Password</label>
                            <div className=" relative">
                        <IoMdLock className='absolute left-4 top-1/2 -translate-y-1/2' />
                         <input className="w-full text-xs text-[#292535] pl-12 pr-12 outline-none py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" type={showPassword ? "text" : "password"} placeholder="QWE123#" required />
                         <button type='button' onClick={() =>setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'> {showPassword ?<IoEyeOff /> : <IoEye />}</button>
                    </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="mb-1 block text-[#3B4758] text-sm">Confirm Password</label>
                            <div className=" relative">
                        <IoMdLock className='absolute left-4 top-1/2 -translate-y-1/2' />
                         <input className="w-full text-xs pl-12 text-[#292535] pr-12 outline-none py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" type={showPassword ? "text" : "password"} placeholder="QWE123#" required />
                         <button type='button' onClick={() =>setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'> {showPassword ?<IoEyeOff /> : <IoEye />}</button>
                    </div>
                        </div>

                        <div className="flex mt-2 text-[#616161] text-xs items-center gap-1">
                            <input id="checkbox" type="checkbox" />
                            <label htmlFor="checkbox">I agree to the <span className='text-[#1E88E5] font-normal hover:underline'>Terms & Conditions</span> and <span className='text-[#1E88E5] font-normal hover:underline'>Privacy Policy</span></label>
                        </div>


                        <button
                            className="py-2.5 mt-4 mb-2 font-medium w-full rounded-lg bg-[#FF7A18] text-white transition-colors duration-300 hover:bg-orange-600">Continue</button>
                    </form>
                
                    <div className="text-xs text-[#1F2937] text-center mb-4">
                       Or continue with
                    </div>

                    {/* Social-Media section */}
                
                    <button type="button"
                        className="flex py-3 w-full items-center text-xs text-[#3B4758] border bg-white border-gray-300 justify-center gap-3 rounded-lg transition hover:bg-gray-100">
                        <FcGoogle />
                        Continue with Google
                    </button>
                
                    <button type="button"
                        className="flex text-xs py-3 w-full items-center text-[#3B4758] bg-white border border-gray-300 justify-center gap-3 rounded-lg transition hover:bg-gray-100 mt-4">
                        <img className='w-4 h-4' src={facebook} alt="" />
                        Continue with Facebook
                    </button>
        
                    <div className='text-center mt-2 mb-5 text-xs text-[#616161'>Already have an account?{" "}
                        <Link to="/login" className='text-[#1C7FF9] font-normal hover:underline' >Sign In</Link>
                    </div>
                </div>
                </div>
                </section>
    </div>
  )
}

export default SignUp