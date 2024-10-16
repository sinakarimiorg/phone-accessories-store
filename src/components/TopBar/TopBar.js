import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";


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
      <div className='w-full hidden sm:flex items-center justify-between py-4 px-6 bg-custom-dark text-white'>

        {/* Topbar Logo */}
        <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
          <img src='./images/logo/logo-lg.png' className='w-14 h-14 lg:w-16 xl:h-16' />
          <h5 className='text-shadow-topbar font-MorabbaBold text-xl md:text-2xl xl:text-3xl'>
            مـوبـو
            لــــــند
          </h5>
        </Link>

        {/* Search Box */}
        <div className='flex items-center w-[300px] md:w-[350px] lg:w-[600px] xl:w-[700px] 2xl:mr-24 bg-gray-100 rounded-2xl overflow-hidden'>
          <div className='flex-center p-3 bg-purple-500 cursor-pointer'>
            <RiSearch2Line className='w-5  md:w-6 h-5 md:h-6' />
          </div>
          <p className='flex-center gap-1 w-full md:text-lg text-neutral-600'>
            جستجو در
            <span className='text-purple-custom'>مـوبـولـــند</span>
          </p>
        </div>

        {/* Cart & Login  */}
        <div class="flex text-xl gap-x-4 lg:gap-5 xl:gap-x-8 text-gray-300">

          {/* <!-- Cart & Theme Toggle --> */}
          <div class="flex items-center gap-x-4 lg:gap-x-5">

            <div class="relative group cursor-pointer hover:text-purple-400">
              <HiOutlineShoppingCart className='w-6 md:w-8 h-6 md:h-8' />

              {/* <!-- Cart Box --> */}
              <div class="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 border-t-[3px] shadow-custom border-t-purple-custom rounded-2xl
                        bg-white dark:bg-zinc-700 transition-all delay-75 overflow-hidden">

                {/* <!-- Cart Box Header --> */}
                <div class="flex items-center justify-between font-DanaMedium text-xs tracking-tighter">
                  <span class="text-gray-300">1 مورد</span>
                  <a href="#" class="flex items-center text-purple-custom">
                    مشاهده سبد خرید
                    <svg class="w-5 h-5">
                      <use href="#chevron-left-mini"></use>
                    </svg>
                  </a>
                </div>

                {/* <!-- Cart Box Body --> */}
                <div
                  class="my-2 border-b border-b-gray-300 dark:border-b-white/10  divide-y divide-gray-100 dark:divide-white/5 max-h-[330] overflow-hidden hover:overflow-y-auto child:py-5 child:pl-1">
                  {/* <!-- Cart Box Product --> */}
                  <div class="flex gap-x-2.5">
                    <img class="w-30 h-30" src="./images/products/product1.webp" alt="product 1" />

                    <div class="flex flex-col justify-between">
                      <h4
                        class="text-zinc-700 dark:text-white text-base font-DanaMedium line-clamp-2">
                        کابل تبدیل USB به USB-C باسئوس مدل CATKLF-BG1 Cafule طول 1 متر
                      </h4>
                      <div class="flex flex-col">
                        <span
                          class="text-xs text-teal-600 dark:text-emerald-500 font-DanaMedium tracking-tighter">14.500
                          تومان تخفیف</span>
                        <div class="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                          <span class="text-sm font-Dana">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Cart Box Product --> */}
                  <div class="flex gap-x-2.5">
                    <img class="w-30 h-30" src="./images/products/product2.webp" alt="product 2" />
                    <div class="flex flex-col justify-between h-30">
                      <h4
                        class="text-zinc-700 dark:text-white text-base font-DanaMedium line-clamp-2">
                        مبدل USB-C به USB یسیدو مدل GS09
                      </h4>
                      <div class="flex flex-col">
                        <span
                          class="text-xs text-teal-600 dark:text-emerald-500 font-DanaMedium tracking-tighter">14.500
                          تومان تخفیف</span>
                        <div class="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                          <span class="text-sm font-Dana">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Cart Box Product --> */}
                  <div class="flex gap-x-2.5">
                    <img class="w-30 h-30" src="./images/products/product3.webp" alt="product 3" />
                    <div class="flex flex-col justify-between h-30">
                      <h4
                        class="text-zinc-700 dark:text-white text-base font-DanaMedium line-clamp-2">
                        خنک کننده گوشی موبایل مدل PUBG-AL01                        </h4>
                      <div class="flex flex-col">
                        <span
                          class="text-xs text-teal-600 dark:text-emerald-500 font-DanaMedium tracking-tighter">14.500
                          تومان تخفیف</span>
                        <div class="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                          <span class="text-sm font-Dana">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Cart Box Footer --> */}
                <div class="flex justify-between mt-5">
                  <div>
                    <span class="font-DanaMedium text-xs text-gray-300 leading-5 tracking-tighter">مبلغ
                      قابل پرداخت</span>
                    <div class="font-DanaDemiBold text-xl text-zinc-700 dark:text-white">
                      350,000
                      <span class="font-Dana text-sm">تومان</span>
                    </div>
                  </div>

                  <a class="w-36 h-14 flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-xl tracking-tightest"
                    href="#">ثبت سفارش</a>
                </div>

              </div>
            </div>

            {/* <!-- Theme Switch Btn --> */}
            <div class="toggle-theme cursor-pointer hover:text-purple-400">
              <IoMoonOutline className='w-6 md:w-8 h-6 md:h-8 block dark:hidden' />
              <FiSun className='w-6 md:w-8 h-6 md:h-8 hidden dark:block' />
            </div>
          </div>

          {/* <!-- Divide Border --> */}
          <span class="block w-px h-14 bg-white/20"></span>

          {/* <!-- Login Link --> */}
          <a href="#" class="flex items-center gap-x-2.5 tracking-tightest">
            <HiArrowRightEndOnRectangle className='w-6 md:w-8 h-6 md:h-8 hover:text-purple-400' />
            <span class="hidden xl:inline-block">ورود | ثبت‌‌نام</span>
          </a>
        </div>

      </div>

      {/* <!-- TopBar for Mobile --> */}
      <div className='w-full flex sm:hidden items-center justify-between px-4 h-16 bg-custom-dark text-white'>
        <HiBars3 className='w-6 h-6'/>

        {/* Topbar Logo */}
        <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
          <img src='./images/logo/logo-lg.png' className='w-8 h-8' />
          <h5 className='text-shadow-topbar font-MorabbaBold text-xl'>
            مـوبـو
            لــــــند
          </h5>
        </Link>

        <IoCartOutline className='w-6 h-6'/>
      </div>
    </>
  )
}
