import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniChevronUp } from "react-icons/hi2";

import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='px-10 py-7'>
                {/* Footer Header  */}
                <div className='pb-4 border-b border-zinc-400'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
                                <img src='./images/logo/logo-lg.png' className='w-12 h-12 lg:w-14 xl:h-12' />
                                <h5 className='text-shadow-topbar font-MorabbaBold text-xl md:text-2xl xl:text-3xl'>
                                    مـوبو
                                    لــــند
                                </h5>
                            </Link>
                        </div>
                        <a href='#' className='flex-center gap-2 px-3 pb-1.5 pt-2 text-zinc-600 dark:text-white tracking-tight border border-zinc-500/70 rounded-lg cursor-pointer'>
                            <span className='leading-5'>بازگشت به بالا</span>
                            <span><HiMiniChevronUp className='w-5 h-5' /></span>
                        </a>
                    </div>
                    <div className='flex items-center gap-x-4 h-4 mt-7 text-sm'>
                        <p className='flex items-center gap-x-2'>
                            <span>تلفن پشتیبانی :</span>
                            <span>1111000 - 021</span>
                        </p>
                        <div className='w-px h-full bg-gray-400'></div>
                        <p className='flex items-center gap-x-2'>
                            <span>آدرس ایمیل :</span>
                            <span>info@moboland.ir</span>
                        </p>
                        <div className='w-px h-full bg-gray-400'></div>
                        <p className='flex items-center gap-x-2'>
                            شنبه الی پنجشنبه، از 8 صبح الی 18 عصر پاسخگوی شما هستیم.
                        </p>
                    </div>
                </div>

                {/* Footer Content  */}
                <div>
                    {/* <!-- First Col & section -->  */}
                    <div></div>
                    {/* <!-- Second Col & section -->  */}
                    <div></div>
                    {/* <!-- Third Col & section -->  */}
                    <div></div>
                </div>
            </div>
            <div>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 2900 9000 800" style={{ enableBackground: 'new 0 0 9000 4000' }} xmlSpace="preserve">
                    <g>
                        <defs>
                            <path id="SVGID_1_" d="M2642.407,4000H9000v-889.795L2642.407,4000z M0,4000h2642.407L0,2000.007V4000z" />
                        </defs>
                        <clipPath id="SVGID_00000132788181927173361360000003844281336907753357_">
                            <use href="#SVGID_1_" style={{ overflow: 'visible' }} />
                        </clipPath>

                        <linearGradient id="SVGID_00000138550378371700792600000004708130437136138380_" gradientUnits="userSpaceOnUse" x1="4491.1309" y1="3996.7524" x2="4504.8872" y2="2450.7473">
                            <stop offset="0" style={{ stopColor: '#230094' }} />
                            <stop offset="1" style={{ stopColor: '#E61EFF' }} />
                        </linearGradient>

                        <rect y="3000" style={{ clipPath: 'url(#SVGID_00000132788181927173361360000003844281336907753357_)', fill: 'url(#SVGID_00000138550378371700792600000004708130437136138380_)' }} width="9000" height="1999.993" />
                    </g>
                    <g>
                        <defs>
                            <polygon id="SVGID_00000114065042749356688370000008603711270956195503_" points="8488.95,4000 5999.007,2958.885 0,3729.25 
			0,4000 		"/>
                        </defs>
                        <clipPath id="SVGID_00000080901780527199675520000018088305332511116957_">
                            <use href="#SVGID_00000114065042749356688370000008603711270956195503_" style={{ overflow: 'visible' }} />
                        </clipPath>

                        <linearGradient id="SVGID_00000121963957562804191240000002117599932745102525_" gradientUnits="userSpaceOnUse" x1="4238.5625" y1="4568.7031" x2="4246.5869" y2="3090.3269">
                            <stop offset="0" style={{ stopColor: '#230094' }} />
                            <stop offset="1" style={{ stopColor: '#E61EFF' }} />
                        </linearGradient>

                        <rect y="2958.885" style={{ clipPath: 'url(#SVGID_00000080901780527199675520000018088305332511116957_)', fill: 'url(#SVGID_00000121963957562804191240000002117599932745102525_)' }} width="8488.95" height="1041.115" />
                    </g>
                </svg>
            </div>
        </div>
    )
}
