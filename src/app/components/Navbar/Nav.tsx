'use client';
import React, { useEffect, useState } from 'react'
import { navLinks } from '../constant/constant';
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Image from 'next/image';
import { CgHeart, CgSearch, CgShoppingBag } from 'react-icons/cg';

// define props type

type Props ={
  openNav:()=> void
}

const Nav = ({openNav} :Props) => {

      const [navBg, setNavBg] = useState(false)

      useEffect(()=> {
      const handler =  ()=>{
          if(window.scrollY >= 90){
            setNavBg(true);
          }if(window.scrollY < 90){
            setNavBg(false);
          }
      };
        window.addEventListener("scroll" , handler)

        return ()=>{
          window.removeEventListener("scroll" , handler);
        }

      },[])

  return (
    <div>
    <div
      className={`flex items-center h-full justify-between w-[90%] md:w-[80%] mx-auto ${
        navBg ? 'bg-gray-100 shadow-lg' : ''
      }`}
    >
      {/* Logo */}
      <div>
        <Image src="/images/Frame1.png" alt="nav-image" width={78} height={78} />
      </div>
  
      {/* Nav Links */}
      <div className="flex items-center space-x-6 ">
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 font-medium">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <p className="nav_link">{navlink.label}</p>
            </Link>
          ))}
        </div>
  
        {/* Search Buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-gray-100 p-2 rounded-full w-[150px] md:w-[180px]">
            {/* Search Icon */}
            <CgSearch className="text-black text-[20px] md:text-[24px] mr-2" />
            {/* Input Field */}
            <input
              type="search"
              placeholder="Search"
              className="placeholder:text-opacity-60 text-[14px] md:text-[16px] h-[30px] w-full outline-none bg-gray-100"
            />
          </div>
  
          {/* Heart and Bag Icons */}
          <div className="flex space-x-3 md:space-x-4 text-[20px] md:text-[24px]">
            <CgHeart />
            <CgShoppingBag />
          </div>
  
          {/* Hamburger Menu Icon */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Nav