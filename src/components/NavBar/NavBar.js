import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbCategory } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { FaBlog } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { FiSmartphone } from "react-icons/fi";

import './NavBar.css'

export default function NavBar() {

  const openCategoryFunc = () => {
    const menuElem = document.querySelector('.navbar-menu')
    menuElem.classList.add('visible--elem')
  }
  const closeCategoryFunc = () => {
    const menuElem = document.querySelector('.navbar-menu')
    menuElem.classList.remove('visible--elem')
  }

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })


  return (
    <>
      <div className={`hidden sm:block sticky ${visible ? 'top-[88px] xl:top-24' : 'top-0'} w-full bg-custom-navy text-gray-100 transition-all z-40`}>
        <div className='flex gap-x-5 md:gap-x-8 py-3 pr-5 lg:pr-24 text-xs md:text-sm lg:text-base child:flex-center child:gap-x-1.5 md:child:gap-x-2'>

          <div id='menu-container' onMouseOver={() => openCategoryFunc()} onMouseOut={() => closeCategoryFunc()} className='relative cursor-pointer hover:text-purple-300'>
            <span className='flex-center gap-x-1.5 md:gap-x-2 transition-colors'>
              <TbCategory />
              دسته بندی ها
            </span>
            {/* <!-- Main Menu --> */}
            <div className="navbar-menu">

              <div className='group w-36'>
                <Link to={'/'} className='flex-center gap-1.5'>
                  <FiSmartphone />
                  لوازم جانبی موبایل
                </Link>
                <div className='navbar-submenu'>
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

              <div className='group w-36'>
                <Link to={'/'}>لوازم جانبی موبایل</Link>
                <div className='navbar-submenu'>
                  <Link to={'/'} className='submenu-category-all-btn'>
                    همه لوازم جانبی موبایل
                    <HiMiniChevronLeft />
                  </Link>
                  <div className='flex flex-wrap gap-y-1.5 gap-x-8 child:inline-flex child:h-8 child:w-30 child-hover:text-purple-400 dark:child-hover:text-purple-300'>
                    <Link to={'/'}>asd</Link>
                    <Link to={'/'}>asfsddgfb cv</Link>
                    <Link to={'/'}>گلس گوشی</Link>
                    <Link to={'/'}>هولدر گوشی موبایل</Link>
                    <Link to={'/'}>کابل شارژ و مبدل</Link>
                    <Link to={'/'}>پاوربانک</Link>
                  </div>
                </div>
              </div>

              <div className='group w-36'>
                <Link to={'/'}>لوازم جانبی موبایل</Link>
                <div className='navbar-submenu'>
                  <Link to={'/'} className='submenu-category-all-btn'>
                    همه لوازم جانبی موبایل
                    <HiMiniChevronLeft />
                  </Link>
                  <div className='flex flex-wrap gap-y-1.5 gap-x-8 child:inline-flex child:h-8 child:w-30 child-hover:text-purple-400 dark:child-hover:text-purple-300'>
                    <Link to={'/'}>شارژر گوشی</Link>
                    <Link to={'/'}>قاب و کاور گوشی</Link>
                    <Link to={'/'}>گلس گوشی</Link>
                    <Link to={'/'}>هولدر گوشی موبایل</Link>
                    <Link to={'/'}>کابل شارژ و مبدل</Link>
                    <Link to={'/'}>پاوربانک</Link>
                    <Link to={'/'}>شارژر گوشی</Link>
                    <Link to={'/'}>قاب و کاور گوشی</Link>
                    <Link to={'/'}>گلس گوشی</Link>
                    <Link to={'/'}>هولدر گوشی موبایل</Link>
                    <Link to={'/'}>کابل شارژ و مبدل</Link>
                    <Link to={'/'}>پاوربانک</Link>
                    <Link to={'/'}>asd</Link>
                    <Link to={'/'}>asfsddgfb cv</Link>
                    <Link to={'/'}>asd</Link>
                    <Link to={'/'}>asfsddgfb cv</Link>
                    <Link to={'/'}>asd</Link>
                    <Link to={'/'}>asfsddgfb cv</Link>
                    <Link to={'/'}>asd</Link>
                    <Link to={'/'}>asfsddgfb cv</Link>
                  </div>
                </div>
              </div>

              <div className='group w-36'>
                <Link to={'/'}>لوازم جانبی موبایل</Link>
                <div className='navbar-submenu'>
                  <Link to={'/'} className='submenu-category-all-btn'>
                    همه لوازم جانبی موبایل
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
          <Link className='hover:text-purple-300' to={'/'}>
            ارتباط با ما
          </Link>
        </div>
      </div>
    </>
  )
}
