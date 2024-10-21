import React, { useState } from 'react'
import Overlay from '../Overlay/Overlay';
import { RiSearch2Line } from "react-icons/ri";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";
import { HiMiniChevronDown } from "react-icons/hi2";
import { HiMiniChevronUp } from "react-icons/hi2";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";

import './TopBar.css'

export default function TopBar() {

  //////Theme Toggle Codes
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");

    if (localStorage.theme === "dark") {
      document.body.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
  /////////////
  const [visibleOverlay, setVisibleOverlay] = useState(false)
  const [navClass, setNavClass] = useState('-right-64')
  const [cartClass, setCartClass] = useState('-left-64')
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)


  const openMenuBar = () => {
    setNavClass('right-0')
    setVisibleOverlay(!visibleOverlay)
  }
  const closeNavBar = () => {
    setNavClass('-right-64')
    setVisibleOverlay(!visibleOverlay)
  }

  const openCartBar = () => {
    setCartClass('left-0')
    setVisibleOverlay(!visibleOverlay)
  }
  const closeCartBar = () => {
    setCartClass('-left-64')
    setVisibleOverlay(!visibleOverlay)
  }

  const closeOverlayFunc = () => {
    setNavClass('-right-64')
    setCartClass('-left-64')
    setVisibleOverlay(false)
  }

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
        <div className="flex text-xl gap-x-4 lg:gap-5 xl:gap-x-8 text-gray-300">

          {/* <!-- Cart & Theme Toggle --> */}
          <div className="flex items-center gap-x-4 lg:gap-x-5">

            <div className="relative group cursor-pointer hover:text-purple-400">
              <HiOutlineShoppingCart className='w-6 md:w-8 h-6 md:h-8' />

              {/* <!-- Cart Box --> */}
              <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 border-t-[3px] shadow-custom border-t-purple-custom rounded-2xl
                        bg-white dark:bg-zinc-700 transition-all delay-75 overflow-hidden">

                {/* <!-- Cart Box Header --> */}
                <div className="flex items-center justify-between font-DanaMedium text-xs tracking-tighter">
                  <span className="text-gray-300">1 مورد</span>
                  <a href="#" className="flex items-center text-purple-custom">
                    مشاهده سبد خرید
                    <svg className="w-5 h-5">
                      <use href="#chevron-left-mini"></use>
                    </svg>
                  </a>
                </div>

                {/* <!-- Cart Box Body --> */}
                <div
                  className="my-2 border-b border-b-gray-300 dark:border-b-white/10  divide-y divide-gray-100 dark:divide-white/5 max-h-[330px] overflow-hidden hover:overflow-y-auto child:py-5 child:pl-1">
                  {/* <!-- Cart Box Product --> */}
                  <div className="flex gap-x-2.5">
                    <img className="w-30 h-30" src="./images/products/product1.webp" alt="product 1" />

                    <div className="flex flex-col justify-between">
                      <h4
                        className="text-zinc-700 dark:text-white text-base font-DanaMedium line-clamp-2">
                        کابل تبدیل USB به USB-C باسئوس مدل CATKLF-BG1 Cafule طول 1 متر
                      </h4>
                      <div className="flex flex-col">
                        <span
                          className="text-xs text-teal-600 dark:text-emerald-500 font-DanaMedium tracking-tighter">14.500
                          تومان تخفیف</span>
                        <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                          <span className="text-sm font-Dana">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Cart Box Product --> */}
                  <div className="flex gap-x-2.5">
                    <img className="w-30 h-30" src="./images/products/product1.webp" alt="product 1" />

                    <div className="flex flex-col justify-between">
                      <h4
                        className="text-zinc-700 dark:text-white text-base font-DanaMedium line-clamp-2">
                        کابل تبدیل USB به USB-C باسئوس مدل CATKLF-BG1 Cafule طول 1 متر
                      </h4>
                      <div className="flex flex-col">
                        <span
                          className="text-xs text-teal-600 dark:text-emerald-500 font-DanaMedium tracking-tighter">14.500
                          تومان تخفیف</span>
                        <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                          <span className="text-sm font-Dana">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Cart Box Product --> */}
                  <div className="flex gap-x-2.5">
                    <img className="w-30 h-30" src="./images/products/product1.webp" alt="product 1" />

                    <div className="flex flex-col justify-between">
                      <h4
                        className="text-zinc-700 dark:text-white text-base font-DanaMedium line-clamp-2">
                        کابل تبدیل USB به USB-C باسئوس مدل CATKLF-BG1 Cafule طول 1 متر
                      </h4>
                      <div className="flex flex-col">
                        <span
                          className="text-xs text-teal-600 dark:text-emerald-500 font-DanaMedium tracking-tighter">14.500
                          تومان تخفیف</span>
                        <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                          <span className="text-sm font-Dana">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Cart Box Product --> */}
                  <div className="flex gap-x-2.5">
                    <img className="w-30 h-30" src="./images/products/product2.webp" alt="product 2" />
                    <div className="flex flex-col justify-between h-30">
                      <h4
                        className="text-zinc-700 dark:text-white text-base font-DanaMedium line-clamp-2">
                        مبدل USB-C به USB یسیدو مدل GS09
                      </h4>
                      <div className="flex flex-col">
                        <span
                          className="text-xs text-teal-600 dark:text-emerald-500 font-DanaMedium tracking-tighter">14.500
                          تومان تخفیف</span>
                        <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                          <span className="text-sm font-Dana">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Cart Box Product --> */}
                  <div className="flex gap-x-2.5">
                    <img className="w-30 h-30" src="./images/products/product3.webp" alt="product 3" />
                    <div className="flex flex-col justify-between h-30">
                      <h4
                        className="text-zinc-700 dark:text-white text-base font-DanaMedium line-clamp-2">
                        خنک کننده گوشی موبایل مدل PUBG-AL01                        </h4>
                      <div className="flex flex-col">
                        <span
                          className="text-xs text-teal-600 dark:text-emerald-500 font-DanaMedium tracking-tighter">14.500
                          تومان تخفیف</span>
                        <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                          <span className="text-sm font-Dana">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Cart Box Footer --> */}
                <div className="flex justify-between mt-5">
                  <div>
                    <span className="font-DanaMedium text-xs text-gray-300 leading-5 tracking-tighter">مبلغ
                      قابل پرداخت</span>
                    <div className="font-DanaDemiBold text-xl text-zinc-700 dark:text-white">
                      350,000
                      <span className="font-Dana text-sm">تومان</span>
                    </div>
                  </div>

                  <a className="w-36 h-14 flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-xl tracking-tightest"
                    href="#">ثبت سفارش</a>
                </div>

              </div>
            </div>

            {/* <!-- Theme Switch Btn --> */}
            <button onClick={() => darkModeHandler()} className="toggle-theme cursor-pointer hover:text-purple-400">
              <IoMoonOutline className='w-6 md:w-8 h-6 md:h-8 block dark:hidden' />
              <FiSun className='w-6 md:w-8 h-6 md:h-8 hidden dark:block' />
            </button>
          </div>

          {/* <!-- Divide Border --> */}
          <span className="block w-px h-14 bg-white/20"></span>

          {/* <!-- Login Link --> */}
          <a href="#" className="flex items-center gap-x-2.5 tracking-tightest">
            <HiArrowRightEndOnRectangle className='w-6 md:w-8 h-6 md:h-8 hover:text-purple-400' />
            <span className="hidden xl:inline-block">ورود | ثبت‌‌نام</span>
          </a>
        </div>

      </div>

      {/* <!-- TopBar for Mobile --> */}
      <div className='w-full flex sm:hidden items-center justify-between px-4 h-16 bg-custom-dark text-zinc-700 dark:text-white'>
        <button className='text-white' onClick={() => openMenuBar()}>
          <HiBars3 className='w-6 h-6' />
        </button>

        {/* Topbar Logo */}
        <div className='flex items-center gap-1 cursor-pointer text-white'>
          <img src='./images/logo/logo-lg.png' className='w-8 h-8' />
          <h5 className='text-shadow-topbar font-MorabbaBold text-xl'>
            مـوبـو
            لــــــند
          </h5>
        </div>

        <button className='text-white' onClick={() => openCartBar()}>
          <IoCartOutline className='w-6 h-6' />
        </button>

        {/* <!-- Mobile Nav --> */}
        <div className={`mobile-nav fixed ${navClass} top-0 bottom-0 w-64 px-4 pt-4 bg-white dark:bg-zinc-700 z-20 transition-all overflow-y-auto`}>

          {/* <!-- Nav Header --> */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">

            {/* Nav Logo */}
            <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
              <img src='./images/logo/logo-lg.png' className='w-8 h-8' />
              <h5 className='font-MorabbaBold text-xl text-neutral-700 dark:text-white'>
                مـوبـو
                لــــــند
              </h5>
            </Link>

            {/* <!-- Close Nav Icon --> */}
            <div onClick={() => closeNavBar()}>
              <HiMiniXMark className="w-5 h-5" />
            </div>
          </div>

          {/* <!-- Nav Menu --> */}
          <div className="flex flex-col mb-8 text-zinc-700 dark:text-white">
            <Link to={'/'} className="flex gap-x-2 py-2.5 pr-2.5 bg-purple-300/20 text-purple-custom dark:text-purple-300 rounded-md">
              <AiOutlineHome className='w-5 h-5' />
              <span>صفحه اصلی</span>
            </Link>

            {/* <!-- menu --> */}
            <ul className="flex flex-col gap-y-6 mt-4 pr-2.5">

              <li>
                <div className={`flex justify-between items-center ${isSubmenuOpen && 'text-purple-custom dark:text-purple-300'}`}>
                  <div className="flex gap-2">
                    <MdOutlineShoppingBag className='w-5 h-5' />
                    <span>فروشگاه</span>
                  </div>
                  {/* <!-- Submenu Open/Close Btn --> */}
                  <div>
                    {
                      isSubmenuOpen ? <HiMiniChevronUp className="w-4 h-4" onClick={() => setIsSubmenuOpen(false)} /> : <HiMiniChevronDown className="w-4 h-4" onClick={() => setIsSubmenuOpen(true)} />
                    }
                  </div>
                </div>

                {/* <!-- Submenu --> */}
                {
                  isSubmenuOpen &&
                  <div className="flex flex-col items-start mt-3 pr-7 gap-y-3 text-sm text-zinc-600 dark:text-white">
                    <Link to={'/'}>قهوه ویژه</Link>
                    <Link to={'/'}>ویژه در سطح جهانی</Link>
                    <Link to={'/'}>قهوه درجه یک</Link>
                    <Link to={'/'}>ترکیبات تجاری</Link>
                    <Link to={'/'}>کپسول قهوه</Link>
                    <Link to={'/'}>قهوه زینو برزیلی</Link>

                  </div>
                }
              </li>

              <li>
                <Link to={'/'} className="inline-flex gap-2">
                  <RiGroupLine className="w-5 h-5" />
                  <span>درباره ما</span>
                </Link>
              </li>

              <li>
                <Link to={'/'} className="inline-flex gap-2">
                  <IoDocumentTextOutline className="w-5 h-5" />
                  <span>موبو بلاگ</span>
                </Link>
              </li>

              <li>
                <Link to={'/'} className="inline-flex gap-2">
                  <BiPhone className="w-5 h-5" />
                  <span>تماس با ما</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Nav Footer --> */}
          <div
            className="inline-flex flex-col gap-y-6 pr-2.5 py-8 border-t border-t-gray-100 dark:border-t-white/10 text-purple-custom dark:text-purple-300">
            {/* <!-- Login Link --> */}
            <a className="flex gap-x-2">
              <HiArrowRightEndOnRectangle className="w-5 h-5" />
              ورود | ثبت‌نام
            </a>

            {/* <!-- Toggle Theme Btn --> */}
            <a className="toggle-theme">
              <button onClick={() => darkModeHandler()} className="toggle-theme cursor-pointer">
                <div className="flex dark:hidden gap-x-2">
                  <IoMoonOutline className='w-5 h-5' />
                  <span>تم تیره</span>
                </div>
                <div className="hidden dark:flex gap-x-2">
                  <FiSun className='w-5 h-5' />
                  <span>تم روشن</span>
                </div>
              </button>
            </a>

            {/* <!-- Shopping Cart Link --> */}
            <a className="flex gap-x-2">
              <HiOutlineShoppingCart className="w-5 h-5" />
              <span>سبد خرید</span>
            </a>
          </div>
        </div>

        {/* <!-- Mobile Cart --> */}
        <div className={`mobile-cart fixed ${cartClass} top-0 bottom-0 flex flex-col w-64 px-4 pt-5 bg-white dark:bg-zinc-700 z-20 text-zinc-700 dark:text-white font-DanaMedium transition-all`}>

          {/* <!-- Cart Header --> */}
          <div className="flex items-center justify-between pb-5 border-b border-b-gray-300 dark:border-b-white/10">

            {/* <!-- Close Cart Icon --> */}
            <div onClick={() => closeCartBar()}>
              <HiMiniXMark className="w-5 h-5" />
            </div>

            <span>سبد خرید</span>
          </div>

          {/* <!-- Cart Body --> */}
          <div
            className="text-sm divide-y divide-gray-100 dark:divide-white/10 overflow-hidden overflow-y-auto child:py-5 child:flex child:gap-x-1">
            {/* <!-- Cart Box Product --> */}
            <div>
              <img className="w-[90px] h-[90px]" src="./images/products/p1.png" alt="product 1" />

              <div className="flex flex-col justify-between">
                <h4 className=" line-clamp-3">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">14.500
                    تومان تخفیف</span>
                  <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                    <span className="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Cart Box Product --> */}
            <div>
              <img className="w-[90px] h-[90px]" src="./images/products/p2.png" alt="product 2" />
              <div className="flex flex-col justify-between">
                <h4 className=" line-clamp-3">
                  قهوه ترک اورجینال مدل محمد افندی 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">14.500
                    تومان تخفیف</span>
                  <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                    <span className="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Cart Box Product --> */}
            <div>
              <img className="w-[90px] h-[90px]" src="./images/products/p3.png" alt="product 3" />

              <div className="flex flex-col justify-between">
                <h4 className=" line-clamp-3">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">14.500
                    تومان تخفیف</span>
                  <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                    <span className="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Cart Box Product --> */}
            <div>
              <img className="w-[90px] h-[90px]" src="./images/products/p4.png" alt="product 4" />

              <div className="flex flex-col justify-between">
                <h4 className=" line-clamp-3">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">14.500
                    تومان تخفیف</span>
                  <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                    <span className="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Cart Box Product --> */}
            <div>
              <img className="w-[90px] h-[90px]" src="./images/products/p5.png" alt="product 5" />

              <div className="flex flex-col justify-between">
                <h4 className=" line-clamp-3">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">14.500
                    تومان تخفیف</span>
                  <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                    <span className="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Cart Box Product --> */}
            <div>
              <img className="w-[90px] h-[90px]" src="./images/products/p6.png" alt="product 6" />

              <div className="flex flex-col justify-between">
                <h4 className=" line-clamp-3">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">14.500
                    تومان تخفیف</span>
                  <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                    <span className="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Cart Box Product --> */}
            <div>
              <img className="w-[90px] h-[90px]" src="./images/products/p7.png" alt="product 7" />

              <div className="flex flex-col justify-between">
                <h4 className=" line-clamp-3">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">14.500
                    تومان تخفیف</span>
                  <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                    <span className="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Cart Box Product --> */}
            <div>
              <img className="w-[90px] h-[90px]" src="./images/products/p8.png" alt="product 8" />

              <div className="flex flex-col justify-between">
                <h4 className=" line-clamp-3">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">14.500
                    تومان تخفیف</span>
                  <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">175,000
                    <span className="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Cart Box Footer --> */}
          <div
            className="flex items-end justify-start gap-x-4 pt-4 pb-8 mt-auto border-t border-t-gray-100 dark:border-t-white/10 ">

            <a className="w-28 h-11 flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-xl font-Dana"
              href="#">ثبت سفارش</a>

            <div>
              <span className="font-DanaMedium text-xs text-gray-300 leading-6 tracking-tighter">مبلغ
                قابل پرداخت</span>
              <div className="font-DanaDemiBold text-base text-zinc-700 dark:text-white">
                350,000
                <span className="font-Dana text-xs">تومان</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Overlay isOpen={visibleOverlay} isClose={() => closeOverlayFunc()} />
    </>
  )
}
