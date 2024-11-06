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
        <span className="text-xl text-gray-400 pt-2 pr-1">{desc}</span>
      </div>
      {btnTitle &&
        <div className="courses-header__left">
          <Link to={btnHref} className="flex-center text-white bg-purple-400 py-2 pl-2 pr-3 rounded-lg">
            {btnTitle}
            <HiArrowSmLeft className='mr-1 w-6 h-6'/>
          </Link>
        </div>
      }
    </div>
  )
}
