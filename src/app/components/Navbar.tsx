"use client";
import React, { useState } from "react";
import logo from "@/public/logo.png"
import Image from "next/image";

const Navbar = () : JSX.Element => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () : void => {
        setisClick(!isClick);
    };
  return (
    <div>
        <nav className='bg-blue-600 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                        <div className='flex items-center mb-4 sm:mb-0 '>
                        <Image className='w-20 h-25 rounded-full' src={logo} alt="logo"></Image>
                            <a href="/" className='text-white font-serif font-bold text-3xl'>KIDS WEAR
                            </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Home
                            </a>

                            <a href="/about-us" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>About
                            </a>

                            <a href="/arrivals" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>New Arrivals
                            </a>

                            <a href="/feature" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Categories
                            </a>

                            <a href="/news" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>News and Update
                            </a>


                                               
                        </div>
                    </div>

                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={toggleNavbar}>
                            {isClick ? (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
                            ) :(
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Home
                            </a>

                            <a href="/about-us" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>About
                            </a>

                            <a href="/arrivals" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>New Arrivals
                            </a>

                            <a href="/feature" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Categories
                            </a>

                            <a href="/news" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>News and Update
                            </a>  
                        

                    </div>
                </div>
            )}
        </nav>
      
    </div>
  );
};

export default Navbar;

