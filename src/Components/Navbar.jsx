import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineShoppingCart} from "react-icons/ai"
import { FaBars ,FaTimes} from "react-icons/fa";
import { BiSearch } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { GiBookStorm } from "react-icons/gi"

function Navbar() {
   
    const navbar = document.querySelector(".navbar");
    console.log(navbar)
// Open navbar
    function openNav() { 
        navbar.style.width = "250px"
        navbar.style.transition = ".3s"
    }
// close navbar
    function closeNav() {
        navbar.style.width = 0;
        navbar.style.transition = ".3s"
    }

  return (
      <div className=" m-auto  md:px-[20px]  shadow-[0_8px_6px_-6px_black]">
          <div className="hidden md:block py-[2em]">
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-around">
                      <h1 className="text-[2em] font-bold text-orange-700">Eddy</h1>
                      <GiBookStorm className="text-[3em] text-orange-700 ml-1"/>
                 </div>

                  <div className="flex">
                      <Link to="/">
                        <FaBars className="ml-3 text-orange-600 text-xl hidden" />
                      </Link>
                      <Link to="/">
                        <BiSearch className="ml-3 text-orange-600 text-xl" />
                      </Link>
                      <Link to="/signup">
                        <BsFillPersonFill className="ml-3 text-orange-600 text-xl" />
                      </Link>
                      <Link to="/">
                          <div className="relative">
                              <AiOutlineShoppingCart className="ml-3 text-xl text-orange-600" />
                              <span className="absolute w-[20px] h-[20px] rounded-[50%] top-[-15px] right-[-10px] bottom-0 bg-orange-900 text-white text-[10px] flex items-center justify-center">1</span>
                        </div>
                      </Link>
                  </div>
              </div>

              <div className="">
                  <nav>
                      <ul className="flex items-center justify-center pt-3">
                        
                          <a href="#electronics">
                              <li className="ml-4 text-orange-600 font-semibold">Electronics</li>
                          </a> 
                          <a href="#jewellery">
                              <li className="ml-4 text-orange-600 font-semibold">Jewelery</li>
                          </a> 
                            <a href="#men">
                          <li className="ml-4 text-orange-600 font-semibold">Men</li>
                          </a> 
                             <a href="#women">
                              <li className="ml-4 text-orange-600 font-semibold">Women</li>
                          </a> 
                      </ul>
                  </nav>
              </div>
          </div>

          <div className='block md:hidden pt-[2em] bg-blue-900'>

          <div className="flex text-center items-center justify-center">
            <FaBars onClick={openNav} className="ml-3 cursor-pointer text-orange-600 text-xl openav-btn" />
                <Link to="/">
                     <BiSearch className="ml-3 text-orange-600 text-xl" />
                </Link>
                <Link to="/">
                     <BsFillPersonFill className="ml-3 text-orange-600 text-xl" />
                </Link>
                <Link to="/">
                <div className="relative">
                    <AiOutlineShoppingCart className="ml-3 text-xl text-orange-600" />
                    <span className="absolute w-[20px] h-[20px] rounded-[50%] top-[-15px] right-[-10px] bottom-0 bg-orange-900 text-white text-[10px] flex items-center justify-center">1</span>
                </div>
                </Link>
             </div>

          <div className="fixed right-0 top-0 h-screen left-0 w-0 overflow-x-hidden bg-white navbar">
                  <nav>
                      <FaTimes onClick={closeNav} className="text-red-600 absolute cursor-pointer top-[10px] right-[20px] closenav-btn" />
                      <ul className="flex items-left justify-center mt-8 flex-col pt-3">
                       
                          <a href="#electronics">
                              <li className="ml-4 text-orange-600 font-semibold">Electronics</li>
                          </a> 
                          <a  href="#jewellery">
                              <li className="ml-4 text-orange-600 font-semibold">Jewelery</li>
                          </a> 
                          <a href="#men">
                          <li className="ml-4 text-orange-600 font-semibold">Men</li>
                          </a> 
                          <a href="#women">
                              <li className="ml-4 text-orange-600 font-semibold">Women</li>
                          </a> 
                      </ul>
                  </nav>
              </div>

            <div className="flex items-center justify-center bg-slate-100 mt-5">
                <h1 className="text-[1em] font-bold text-orange-700">Eddy</h1>
                <GiBookStorm className="text-[3em] text-orange-700 ml-1"/>
            </div>

          </div>
    </div>
  )
}

export default Navbar