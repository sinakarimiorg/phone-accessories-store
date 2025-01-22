import React, { useState } from 'react'
import Overlay from '../Overlay/Overlay';
import { RiSearch2Line } from "react-icons/ri";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
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
import { HiMiniChevronLeft } from "react-icons/hi2";
import CartProductBox from '../CartProductBox/CartProductBox';

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
  const [searchedValue, setSearchedValue] = useState('')


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

  ////////////// For Search Section 
  const navigate = useNavigate()
  const enterInInput = (event) => {
    if (event.keyCode === 13) {
      navigate(`/search/${searchedValue}`)
    }
  }


  return (
    <>
      {/* <!-- TopBar for Laptop --> */}
      <div className='fixed w-full hidden sm:flex items-center justify-between py-4 px-6 bg-custom-dark text-white z-50'>
        {/* Topbar Logo */}
        <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
          <img src='/images/logo/logo-lg.png' className='w-14 h-14 lg:w-16 xl:h-16' />
          <h5 className='text-shadow-topbar font-MorabbaBold text-xl md:text-2xl xl:text-3xl'>
            مـوبـو
            لــــــند
          </h5>
        </Link>

        {/* Search Box */}
        <div className='flex items-center w-[300px] md:w-[350px] lg:w-[600px] xl:w-[700px] 2xl:mr-24 bg-gray-100 rounded-2xl overflow-hidden'>
          <Link to={`/search/${searchedValue}`} className='flex-center p-3 bg-purple-500 cursor-pointer'>
            <RiSearch2Line className='w-5  md:w-6 h-5 md:h-6' />
          </Link>
          <input value={searchedValue} onChange={event => { setSearchedValue(event.target.value) }} onKeyDown={event => enterInInput(event)} type='text' className='w-full md:text-lg text-neutral-600 text-center bg-transparent focus:outline-none placeholder-purple-500' placeholder='جستجو در مـوبـولـــند' />
        </div>

        {/* Cart & Login  */}
        <div className="flex text-xl gap-x-4 lg:gap-5 xl:gap-x-8 text-gray-300">

          {/* <!-- Cart & Theme Toggle --> */}
          <div className="flex items-center gap-x-4 lg:gap-x-5">

            <div className="relative group cursor-pointer hover:text-purple-400">
              <HiOutlineShoppingCart className='w-6 md:w-8 h-6 md:h-8' />

              {/* <!-- Cart Box --> */}
              <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 border-t-[3px] shadow-custom border-t-purple-custom rounded-2xl
                        bg-white dark:bg-zinc-700 transition-all delay-75 overflow-hidden z-30">

                {/* <!-- Cart Box Header --> */}
                <div className="flex items-center justify-between font-DanaMedium text-xs tracking-tighter">
                  <span className="text-gray-300">1 مورد</span>
                  <a href="#" className="flex items-center text-purple-custom">
                    مشاهده سبد خرید
                    <HiMiniChevronLeft className='w-5 h-5' />
                  </a>
                </div>

                {/* <!-- Cart Box Body --> */}
                <div
                  className="my-2 border-b border-b-gray-300 dark:border-b-white/10  divide-y divide-gray-100 dark:divide-white/5 max-h-[330px] overflow-hidden hover:overflow-y-auto child:flex child:gap-x-2.5 child:py-5 child:pl-1">
                  <CartProductBox img={'/images/products/airpods.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} off={93500} price={790000} />
                  <CartProductBox img={'/images/products/cover.png'} title={'کیف کلاسوری کربی مدل Pattern مناسب برای گوشی موبایل سامسونگ Galaxy J5 Pro'} off={35200} price={149000} />
                  <CartProductBox img={'/images/products/car-charger.png'} title={'شارژر فندکی 35 وات مدل QC 3'} off={10000} price={70000} />
                  <CartProductBox img={'/images/products/power-bank2.png'} title={'پاوربانک انکر مدل PowerCore Metro A1246 ظرفیت 10000 میلی آمپر ساعت'} off={130000} price={2200000} />
                  <CartProductBox img={'/images/products/charge-cable.png'} title={'کابل تبدیل USB و USB-C به لایتنینگ و USB-C مدل 2in2-Fast-100W طول 1 متر'} price={490000} />
                  <CartProductBox img={'/images/products/holder.png'} title={'پایه نگهدارنده گوشی موبایل الدینیو مدل MG01'} off={33000} price={277000} />
                  <CartProductBox img={'/images/products/glass.png'} title={'محافظ صفحه نمایش حریم شخصی مات مدل m2m مناسب برای گوشی موبایل اپل iPhone 7Plus/ 8Plus'} price={27700} />                  {/* <!-- Cart Box Product --> */}
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
          <Link to={'/register'} className="flex items-center gap-x-2.5 tracking-tightest">
            <HiArrowRightEndOnRectangle className='w-6 md:w-8 h-6 md:h-8 hover:text-purple-400' />
            <span className="hidden xl:inline-block">ورود | ثبت‌‌نام</span>
          </Link>
        </div>

      </div>

      {/* <!-- TopBar for Mobile --> */}
      <div className='w-full block sm:hidden'>
        {/* TopBar Content */}
        <div className='w-full flex items-center justify-between px-4 h-16 bg-custom-dark text-zinc-700 dark:text-white'>
          <button className='text-white' onClick={() => openMenuBar()}>
            <HiBars3 className='w-6 h-6' />
          </button>

          {/* Topbar Logo */}
          <div className='flex items-center gap-1 cursor-pointer text-white'>
            <img src='/images/logo/logo-lg.png' className='w-8 h-8' />
            <h5 className='text-shadow-topbar font-MorabbaBold text-xl'>
              مـوبـو
              لــــــند
            </h5>
          </div>

          <button className='text-white' onClick={() => openCartBar()}>
            <IoCartOutline className='w-6 h-6' />
          </button>

          {/* <!-- Mobile Nav(menu) --> */}
          <div className={`mobile-nav fixed ${navClass} top-0 bottom-0 w-64 px-4 pt-4 bg-white dark:bg-zinc-700 z-20 transition-all overflow-y-auto`}>

            {/* <!-- Nav Header --> */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">

              {/* Nav Logo */}
              <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
                <img src='/images/logo/logo-lg.png' className='w-8 h-8' />
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
                    <div className="flex flex-col items-start mt-3 pr-7 gap-y-3 text-sm text-zinc-600 dark:text-gray-200">
                      <Link to={'/'}>شارژر گوشی</Link>
                      <Link to={'/'}>قاب و کاور گوشی</Link>
                      <Link to={'/'}>گلس گوشی</Link>
                      <Link to={'/'}>هولدر گوشی موبایل</Link>
                      <Link to={'/'}>کابل شارژ و مبدل</Link>
                      <Link to={'/'}>پاوربانک</Link>

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
              className="inline-flex flex-col gap-y-6 w-full pr-2.5 py-8 border-t border-t-gray-100 dark:border-t-white/10 text-purple-custom dark:text-purple-300">
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
              <CartProductBox img={'/images/products/airpods.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} off={93500} price={790000} />
              <CartProductBox img={'/images/products/cover.png'} title={'کیف کلاسوری کربی مدل Pattern مناسب برای گوشی موبایل سامسونگ Galaxy J5 Pro'} off={35200} price={149000} />
              <CartProductBox img={'/images/products/car-charger.png'} title={'شارژر فندکی 35 وات مدل QC 3'} off={10000} price={70000} />
              <CartProductBox img={'/images/products/power-bank2.png'} title={'پاوربانک انکر مدل PowerCore Metro A1246 ظرفیت 10000 میلی آمپر ساعت'} off={130000} price={2200000} />
              <CartProductBox img={'/images/products/charge-cable.png'} title={'کابل تبدیل USB و USB-C به لایتنینگ و USB-C مدل 2in2-Fast-100W طول 1 متر'} price={490000} />
              <CartProductBox img={'/images/products/holder.png'} title={'پایه نگهدارنده گوشی موبایل الدینیو مدل MG01'} off={33000} price={277000} />
              <CartProductBox img={'/images/products/glass.png'} title={'محافظ صفحه نمایش حریم شخصی مات مدل m2m مناسب برای گوشی موبایل اپل iPhone 7Plus/ 8Plus'} price={27700} />

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
        {/* Search Input For Mobile*/}
        <div className='flex items-center m-6 bg-transparent rounded-xl border border-custom-dark/80 overflow-hidden'>
          <Link to={`/search/${searchedValue}`} className='flex-center p-3 bg-purple-500 cursor-pointer'>
            <RiSearch2Line className='w-5 h-5 text-white' />
          </Link>
          <input value={searchedValue} onChange={event => { setSearchedValue(event.target.value) }} onKeyDown={event => enterInInput(event)} type='text' placeholder='جستجو در مـوبـولـــند'
            className='w-full text-neutral-600 text-center text-sm bg-transparent focus:outline-none placeholder-purple-500' />
        </div>
      </div>
      <Overlay isOpen={visibleOverlay} isClose={() => closeOverlayFunc()} />
    </>
  )
}
