import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";

import './TopBar.css'

export default function TopBar() {
  return (
    <div className='w-full h-20 py-5 px-10 bg-white'>
      <div className='flex items-center justify-between'>
        {/* Search Box */}
        <div className='flex items-center gap-3 py-2 px-3 bg-slate-200 rounded-md'>
          <input className='text-sm bg-inherit focus:outline-none' type='text' placeholder='جستجو..' />
          <button><IoIosSearch className='w-6 h-6' /></button>
        </div>

        {/* Profile & Notifs */}
        <div className='flex items-center gap-4'>
          <div className='relative cursor-pointer'>
            <CiBellOn className='w-7 h-7'/>
            <span className='absolute -top-1 -right-1 w-5 h-5 pt-0.5 text-sm text-center text-white bg-red-600 rounded-full'>3</span>
          </div>
          <div className='flex-center gap-3'>
            <div className='flex-center cursor-pointer'>
              <FiChevronDown className='w-5 h-5'/>
              <span className='tracking-tight'>سینا کریمی</span>
            </div>
            <img className='w-10 h-10 rounded-full' src='/images/admin-profile.jpg' />
          </div>
        </div>
      </div>
    </div>
  )
}
