import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowSmLeft } from "react-icons/hi";


import './SectionHeader.css'

export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className="flex items-center justify-between pt-20">
      <div className="flex flex-col ">
        <div className="title">
          <span className='relative z-10'>{title}</span>
          <span className='underline-style'></span>
        </div>
        <span className="text-xs sm:text-sm md:text-lg text-gray-400 pt-2 pr-1">{desc}</span>
      </div>
      {btnTitle &&
        <div className="courses-header__left">
          <Link to={btnHref} className="flex-center text-white text-xs xs:text-sm md:text-base tracking-tight bg-purple-400 py-1 xs:py-1.5 md:py-2 pl-1 xs:pl-1.5 md:pl-2 pr-1.5 xs:pr-2 md:pr-3 rounded-lg hover:bg-purple-500 transition-colors">
            {btnTitle}
            <HiArrowSmLeft className='mr-1 mb-0.5 md:mb-0 w-4 xs:w-5 md:w-6 h-4 xs:h-5 md:h-6'/>
          </Link>
        </div>
      }
    </div>
  )
}
