import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar';
import Overlay from '../../Overlay/Overlay';
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { HiBars3 } from 'react-icons/hi2';

import './TopBar.css'

export default function TopBar() {
  const [visibleOverlay, setVisibleOverlay] = useState(false)
  const [navClass, setNavClass] = useState('-right-64')

  const openMenuBar = () => {
    setNavClass('right-0')
    setVisibleOverlay(!visibleOverlay)
  }

  const closeNavBar = () => {
    setNavClass('-right-64')
    setVisibleOverlay(!visibleOverlay)
  }

  const closeOverlayFunc = () => {
    setNavClass('-right-64')
    setVisibleOverlay(false)
  }
  return (
    <>
      {/* TopBar For Laptop size */}
      <div className='hidden md:block w-full h-20 py-5 px-10 bg-white'>
        <div className='flex items-center justify-between'>
          {/* Search Box */}
          <div className='flex items-center gap-3 py-2 px-3 bg-slate-200 rounded-md'>
            <input className='text-sm bg-inherit focus:outline-none' type='text' placeholder='جستجو..' />
            <button><IoIosSearch className='w-6 h-6' /></button>
          </div>

          {/* Profile & Notifs */}
          <div className='flex items-center gap-4'>
            <div className='relative cursor-pointer'>
              <CiBellOn className='w-7 h-7' />
              <span className='absolute -top-1 -right-1 w-5 h-5 pt-0.5 text-sm text-center text-white bg-red-600 rounded-full'>3</span>
            </div>
            <div className='flex-center gap-3'>
              <div className='flex-center cursor-pointer'>
                <FiChevronDown className='w-5 h-5' />
                <span className='tracking-tight'>سینا کریمی</span>
              </div>
              <img className='w-10 h-10 rounded-full' src='/images/admin-profile.jpg' />
            </div>
          </div>
        </div>
      </div>

      {/* TopBar For Mobile size */}
      <div className='block md:hidden w-full py-3 xs:py-5 px-4 xs:px-6 bg-white'>
        <div className='flex items-center justify-between'>
          {/* Sidebar Icon & Section */}
          <div className='block md:hidden'>
            <button onClick={() => openMenuBar()}>
              <HiBars3 className='w-6 h-6' />
            </button>
            <div className={`fixed ${navClass} top-0 bottom-0 w-56 px-4 py-8 bg-custom-navy z-20 transition-all overflow-y-auto`}>
              <SideBar closeNavBarFunc={closeNavBar} />
            </div>
          </div>
          {/* Profile & Notifs */}
          <div className='flex items-center gap-2'>
            <div className='relative cursor-pointer'>
              <CiBellOn className='w-6 h-6' />
              <span className='absolute -top-1 -right-1 w-4 h-4 pt-0.5 text-[10px] text-center text-white bg-red-600 rounded-full'>3</span>
            </div>
            <div className='flex-center gap-1'>
              <div className='flex-center cursor-pointer'>
                <FiChevronDown className='w-3 h-3' />
                <span className='text-sm tracking-tighter'>سینا کریمی</span>
              </div>
              <img className='w-8 h-8 rounded-full' src='/images/admin-profile.jpg' />
            </div>
          </div>
        </div>
        {/* Search Box */}
        <div className='flex items-center gap-3 w-full mt-4 py-1 xs:py-2 px-3 bg-slate-200 rounded-md'>
          <button><IoIosSearch className='w-6 h-6' /></button>
          <input className='w-full text-sm bg-inherit focus:outline-none' type='text' placeholder='جستجو..' />
        </div>
      </div>
      <Overlay isOpen={visibleOverlay} isClose={() => closeOverlayFunc()} />
    </>
  )
}
