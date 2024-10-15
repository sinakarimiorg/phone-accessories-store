import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Link } from 'react-router-dom';

import './TopBar.css'



///// Toggle Theme codes 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
toggleThemeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
      if (localStorage.theme === "dark") {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
      } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
      }
  })
})
////////


export default function TopBar() {
  return (
    <>
      <div className='flex items-center justify-between py-4 px-6 bg-custom-dark text-white'>
        {/* Topbar Logo */}
        <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
          <img src='./images/logo/logo-lg.png' />
          <h5 className='text-shadow-topbar font-MorabbaBold text-3xl'>
            مـوبـو
            لــــــند
          </h5>
        </Link>
        {/* Search Box */}
        <div className='flex items-center w-[700px] mr-24 bg-gray-100 rounded-2xl overflow-hidden'>
          <div className='flex-center p-3 bg-purple-500 cursor-pointer'>
            <RiSearch2Line className='h-6 w-6' />
          </div>
          <p className='flex-center gap-1 w-full text-lg text-neutral-600'>
            جستجو در
            <span className='text-purple-custom'>مـوبـولـــند</span>
          </p>
        </div>

        {/* Cart & Login  */}
        <div class="flex text-xl gap-x-4 lg:gap-5 xl:gap-x-8 text-gray-300">

          {/* <!-- Cart & Theme Toggle --> */}
          <div class="flex items-center gap-x-4 lg:gap-x-5">

            <div class="relative group cursor-pointer">
              <HiOutlineShoppingCart className='w-8 h-8' />
            </div>

            {/* <!-- Theme Switch Btn --> */}
            <div class="toggle-theme cursor-pointer">
              <IoMoonOutline className='w-8 h-8 block dark:hidden' />
              <FiSun className='w-8 h-8 hidden dark:block' />
            </div>


            {/* Cart box */}
            <div className='hidden'>
            </div>
          </div>


          {/* <!-- Divide Border --> */}
          <span class="block w-px h-14 bg-white/20"></span>

          {/* <!-- Login Link --> */}
          <a href="#" class="flex items-center gap-x-2.5 tracking-tightest">
            <HiArrowRightEndOnRectangle className='w-8 h-8' />
            <span class="hidden xl:inline-block">ورود | ثبت‌‌نام</span>
          </a>
        </div>

      </div>
    </>
  )
}
