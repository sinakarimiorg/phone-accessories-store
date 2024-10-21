import React from 'react'
import { Link } from 'react-router-dom'
import { TbCategory } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { FaBlog } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";



export default function NavBar() {
  return (
    <>
      <div className='hidden sm:block bg-custom-navy text-gray-100'>
        <div className='flex gap-x-5 md:gap-x-8 py-3 pr-5 lg:pr-24 text-xs md:text-sm lg:text-base child:flex-center child:gap-x-1.5 md:child:gap-x-2'>
          <div className='cursor-pointer hover:text-purple-300'>
            <TbCategory />
            دسته بندی ها
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
