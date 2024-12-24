import React from 'react'
import { useEffect, useState } from 'react'
import { RiStarFill } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { TbUserSquareRounded } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

import './CommentsSection.css'

export default function CommentsSection() {

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
        <div>
            <h1 className='product-info__title'>نظرات کاربران</h1>
            <div className='flex gap-12 mt-2'>
                {/* Right Col & Rating  */}
                <div className={`sticky ${visible ? 'top-60' : 'top-44'} h-fit`}>
                    <div className='flex items-center gap-10'>
                        <div>
                            <div className='flex gap-1'>
                                <RiStarFill className='comment-section__star' />
                                <RiStarFill className='comment-section__star' />
                                <RiStarFill className='comment-section__star' />
                                <RiStarFill className='comment-section__star' />
                                <RiStarFill className='comment-section__star text-gray-400' />
                            </div>
                            <span className='block pt-3 text-sm text-zinc-500'>از مجموع ۱۷ امتیاز</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <h1 className='font-DanaDemiBold text-[2.5rem]'>4.3</h1>
                            <span className='text-zinc-500'>از ۵</span>
                        </div>
                    </div>

                    <div className='mt-5 py-5 px-6 bg-white shadow-lg rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineComment className='w-6 h-6' />
                            <p className='font-DanaMedium text-sm tracking-tight'>نظر خود را در مورد این <span>محصول</span> بنویسید ...</p>
                        </div>
                        <div className='flex-center gap-2 mt-3 py-2 px-4 text-white bg-custom-navy cursor-pointer rounded-lg'>
                            <span>افزودن نظر</span>
                            <FaPlus />
                        </div>
                    </div>
                </div>

                {/* Left Col & Comments  */}
                <div>
                    {/* User Comment */}
                    <div>
                        {/* Comment Header */}
                        <div>
                            {/* Name Of User */}
                            <div className='flex gap-2.5 mb-3.5 text-zinc-500'>
                                <TbUserSquareRounded className='w-6 h-6' />
                                <span className='font-DanaDemiBold text-lg'>علی رضایی</span>
                            </div>
                            {/* Rate Of Comment */}
                            <div className='flex mb-2'>
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star text-gray-400' />
                            </div>
                            {/* Date Of Comment */}
                            <div className='text-zinc-600 tracking-wider'>
                                ۱۴۰۳/۱۰/۰۳
                            </div>
                        </div>

                        {/* Comment Body */}
                        <div className='my-7'>
                            <p className='max-w-[730px] font-DanaMedium text-indigo-950 leading-8 tracking-tight'>
                                درود دوستان
                                کاملا این محصول رو پیشنهاد میکنم بسیار کیفیت خوبی داره و برند شناخته شده ای هست و در این بازه قیمتی در خریدش شک نکنید
                            </p>
                        </div>

                        {/* Comment Footer */}
                        <div className='flex items-center justify-between'>
                            <span className='text-zinc-500 text-sm'>این نظر برای شما مفید بود ؟</span>
                        <div className='flex items-center gap-5'>
                            <div className='inline-flex items-end gap-1.5 text-zinc-500'>
                                <span>2</span>
                                <AiOutlineLike className='w-6 h-6 mb-0.5'/>
                            </div>
                            <div className='inline-flex items-end gap-1.5 text-zinc-500'>
                                <span>0</span>
                                <AiOutlineDislike className='w-6 h-6 mb-0.5'/>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                    <div className='divider-border'></div>
                    
                    {/* User Comment */}
                    <div>
                        {/* Comment Header */}
                        <div>
                            {/* Name Of User */}
                            <div className='flex gap-2.5 mb-3.5 text-zinc-500'>
                                <TbUserSquareRounded className='w-6 h-6' />
                                <span className='font-DanaDemiBold text-lg'>علی رضایی</span>
                            </div>
                            {/* Rate Of Comment */}
                            <div className='flex mb-2'>
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star text-gray-400' />
                            </div>
                            {/* Date Of Comment */}
                            <div className='text-zinc-600 tracking-wider'>
                                ۱۴۰۳/۱۰/۰۳
                            </div>
                        </div>

                        {/* Comment Body */}
                        <div className='my-7'>
                            <p className='max-w-[730px] font-DanaMedium text-indigo-950 leading-8 tracking-tight'>
                                درود دوستان
                                کاملا این محصول رو پیشنهاد میکنم بسیار کیفیت خوبی داره و برند شناخته شده ای هست و در این بازه قیمتی در خریدش شک نکنید
                            </p>
                        </div>

                        {/* Comment Footer */}
                        <div className='flex items-center justify-between'>
                            <span className='text-zinc-500 text-sm'>این نظر برای شما مفید بود ؟</span>
                        <div className='flex items-center gap-5'>
                            <div className='inline-flex items-end gap-1.5 text-zinc-500'>
                                <span>2</span>
                                <AiOutlineLike className='w-6 h-6 mb-0.5'/>
                            </div>
                            <div className='inline-flex items-end gap-1.5 text-zinc-500'>
                                <span>0</span>
                                <AiOutlineDislike className='w-6 h-6 mb-0.5'/>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                    <div className='divider-border'></div>
                    
                    {/* User Comment */}
                    <div>
                        {/* Comment Header */}
                        <div>
                            {/* Name Of User */}
                            <div className='flex gap-2.5 mb-3.5 text-zinc-500'>
                                <TbUserSquareRounded className='w-6 h-6' />
                                <span className='font-DanaDemiBold text-lg'>علی رضایی</span>
                            </div>
                            {/* Rate Of Comment */}
                            <div className='flex mb-2'>
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star text-gray-400' />
                            </div>
                            {/* Date Of Comment */}
                            <div className='text-zinc-600 tracking-wider'>
                                ۱۴۰۳/۱۰/۰۳
                            </div>
                        </div>

                        {/* Comment Body */}
                        <div className='my-7'>
                            <p className='max-w-[730px] font-DanaMedium text-indigo-950 leading-8 tracking-tight'>
                                درود دوستان
                                کاملا این محصول رو پیشنهاد میکنم بسیار کیفیت خوبی داره و برند شناخته شده ای هست و در این بازه قیمتی در خریدش شک نکنید
                            </p>
                        </div>

                        {/* Comment Footer */}
                        <div className='flex items-center justify-between'>
                            <span className='text-zinc-500 text-sm'>این نظر برای شما مفید بود ؟</span>
                        <div className='flex items-center gap-5'>
                            <div className='inline-flex items-end gap-1.5 text-zinc-500'>
                                <span>2</span>
                                <AiOutlineLike className='w-6 h-6 mb-0.5'/>
                            </div>
                            <div className='inline-flex items-end gap-1.5 text-zinc-500'>
                                <span>0</span>
                                <AiOutlineDislike className='w-6 h-6 mb-0.5'/>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                    <div className='divider-border'></div>
                    
                    {/* User Comment */}
                    <div>
                        {/* Comment Header */}
                        <div>
                            {/* Name Of User */}
                            <div className='flex gap-2.5 mb-3.5 text-zinc-500'>
                                <TbUserSquareRounded className='w-6 h-6' />
                                <span className='font-DanaDemiBold text-lg'>علی رضایی</span>
                            </div>
                            {/* Rate Of Comment */}
                            <div className='flex mb-2'>
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star' />
                                <RiStarFill className='user-comment__star text-gray-400' />
                            </div>
                            {/* Date Of Comment */}
                            <div className='text-zinc-600 tracking-wider'>
                                ۱۴۰۳/۱۰/۰۳
                            </div>
                        </div>

                        {/* Comment Body */}
                        <div className='my-7'>
                            <p className='max-w-[730px] font-DanaMedium text-indigo-950 leading-8 tracking-tight'>
                                درود دوستان
                                کاملا این محصول رو پیشنهاد میکنم بسیار کیفیت خوبی داره و برند شناخته شده ای هست و در این بازه قیمتی در خریدش شک نکنید
                            </p>
                        </div>

                        {/* Comment Footer */}
                        <div className='flex items-center justify-between'>
                            <span className='text-zinc-500 text-sm'>این نظر برای شما مفید بود ؟</span>
                        <div className='flex items-center gap-5'>
                            <div className='inline-flex items-end gap-1.5 text-zinc-500'>
                                <span>2</span>
                                <AiOutlineLike className='w-6 h-6 mb-0.5'/>
                            </div>
                            <div className='inline-flex items-end gap-1.5 text-zinc-500'>
                                <span>0</span>
                                <AiOutlineDislike className='w-6 h-6 mb-0.5'/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
