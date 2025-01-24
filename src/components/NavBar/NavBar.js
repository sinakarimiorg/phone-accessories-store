import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbCategory } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { FaBlog } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { FiSmartphone } from "react-icons/fi";
import { FaComputer } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { VscPackage } from "react-icons/vsc";

import './NavBar.css'

export default function NavBar() {

  // const openCategoryFunc = () => {
  //   const menuElem = document.querySelector('.navbar-menu')
  //   menuElem.classList.add('visible--elem')
  // }
  // const closeCategoryFunc = () => {
  //   const menuElem = document.querySelector('.navbar-menu')
  //   menuElem.classList.remove('visible--elem')
  // }

  ////////// Handle NavBar visiblity 
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  const [menuNavbarList, setMenuNavbarList] = useState('mobile')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })


  return (
    <>
      <div className={`hidden sm:block fixed ${visible ? 'top-[88px] xl:top-24' : 'top-0'} w-full bg-custom-navy text-gray-100 transition-all z-40`}>
        <div className='flex gap-x-5 md:gap-x-8 py-3 pr-5 lg:pr-24 text-xs md:text-sm lg:text-base child:flex-center child:gap-x-1.5 md:child:gap-x-2'>
          {/* onMouseOver={() => openCategoryFunc()} onMouseOut={() => closeCategoryFunc()} */}
          <div className='relative group'>
            <span className='flex-center gap-x-1.5 md:gap-x-2 transition-colors cursor-pointer hover:text-purple-300'>
              <TbCategory />
              دسته بندی ها
            </span>
            {/* <!-- Main Menu --> */}
            <div className="navbar-menu" onMouseLeave={e => { setMenuNavbarList('mobile') }}>

              <div>
                <Link to={'/'} className='flex-center gap-1.5' onMouseEnter={e => { setMenuNavbarList('mobile') }}>
                  <FiSmartphone />
                  لوازم جانبی موبایل
                </Link>
                <div className={`navbar-submenu ${menuNavbarList === 'mobile' && 'flex'}`}>
                  <Link to={'/'} className='submenu-category-all-btn'>
                    همه لوازم جانبی موبایل
                    <HiMiniChevronLeft />
                  </Link>
                  <div className='flex flex-wrap gap-y-1.5 gap-x-8 child:inline-flex child:h-8 child:w-30 child-hover:text-purple-400 dark:child-hover:text-purple-300 transition-all'>
                    <Link to={'/'}>شارژر گوشی</Link>
                    <Link to={'/'}>قاب و کاور گوشی</Link>
                    <Link to={'/'}>گلس گوشی</Link>
                    <Link to={'/'}>هولدر گوشی موبایل</Link>
                    <Link to={'/'}>کابل شارژ و مبدل</Link>
                    <Link to={'/'}>پاوربانک</Link>
                  </div>
                </div>
              </div>

              <div>
                <Link to={'/'} className='flex-center gap-1.5' onMouseEnter={e => { setMenuNavbarList('computer') }}>
                  <FaComputer />
                  لوازم جانبی کامپیوتر
                </Link>
                <div className={`navbar-submenu ${menuNavbarList === 'computer' && 'flex'}`}>
                  <Link to={'/'} className='submenu-category-all-btn'>
                    همه لوازم جانبی کامپیوتر
                    <HiMiniChevronLeft />
                  </Link>
                  <div className='flex flex-wrap gap-y-1.5 gap-x-8 child:inline-flex child:h-8 child:w-30 child-hover:text-purple-400 dark:child-hover:text-purple-300'>
                    <Link to={'/'}>رم</Link>
                    <Link to={'/'}>مانیتور</Link>
                    <Link to={'/'}>کیبوورد</Link>
                    <Link to={'/'}>هولدر لپ تاپ</Link>
                    <Link to={'/'}>کابل شارژ و مبدل</Link>
                    <Link to={'/'}>موس و موس پد</Link>
                  </div>
                </div>
              </div>

              <div>
                <Link to={'/'} className='flex-center gap-1.5' onMouseEnter={e => { setMenuNavbarList('appliances') }}>
                  <FaKitchenSet />
                  لوازم خانگی
                </Link>
                <div className={`navbar-submenu ${menuNavbarList === 'appliances' && 'flex'}`}>
                  <Link to={'/'} className='submenu-category-all-btn'>
                    همه لوازم خانگی
                    <HiMiniChevronLeft />
                  </Link>
                  <div className='flex flex-wrap gap-y-1.5 gap-x-8 child:inline-flex child:h-8 child:w-30 child-hover:text-purple-400 dark:child-hover:text-purple-300'>
                    <Link to={'/'}>جارو هوشمند</Link>
                    <Link to={'/'}>استریو باند</Link>
                    <Link to={'/'}>تلوزیون هوشمند</Link>
                    <Link to={'/'}>بخارپز و هواپز</Link>
                    <Link to={'/'}>بلندر و میکسر</Link>
                    <Link to={'/'}>ترازو دیجیتال</Link>
                    <Link to={'/'}>اسپرسوساز و آسیاب</Link>
                  </div>
                </div>
              </div>

              <div>
                <Link to={'/'} className='flex-center gap-1.5' onMouseEnter={e => { setMenuNavbarList('stuff') }}>
                  <VscPackage />
                  لوازم جانبی متفرقه
                </Link>
                <div className={`navbar-submenu ${menuNavbarList === 'stuff' && 'flex'}`}>
                  <Link to={'/'} className='submenu-category-all-btn'>
                    همه لوازم جانبی متفرقه
                    <HiMiniChevronLeft />
                  </Link>
                  <div className='flex flex-wrap gap-y-1.5 gap-x-8 child:inline-flex child:h-8 child:w-30 child-hover:text-purple-400 dark:child-hover:text-purple-300'>
                    <Link to={'/'}>شارژر گوشی</Link>
                    <Link to={'/'}>قاب و کاور گوشی</Link>
                    <Link to={'/'}>گلس گوشی</Link>
                    <Link to={'/'}>هولدر گوشی موبایل</Link>
                    <Link to={'/'}>کابل شارژ و مبدل</Link>
                    <Link to={'/'}>پاوربانک</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Link className='hover:text-purple-300' to={'/'}>
            <CiDiscount1 />
            شگفت انگیزها
          </Link>
          <Link className='hover:text-purple-300' to={'/'}>
            <FaBlog />
            موبولـند بلاگ
          </Link>
          <Link className='hover:text-purple-300' to={'/'}>
            <BiStoreAlt />
            شعب حضوری
          </Link>

          <Link className='hover:text-purple-300' to={'/'}>
            <span className="block w-px h-10 bg-white/20 ml-2"></span>
            همکاری با ما
          </Link>
          <Link className='hover:text-purple-300' to={'/contact'}>
            ارتباط با ما
          </Link>
        </div>
      </div>
    </>
  )
}
