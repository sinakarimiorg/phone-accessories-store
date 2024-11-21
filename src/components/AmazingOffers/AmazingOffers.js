import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import ProductBox from '../ProductBox/ProductBox';
import { FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './AmazingOffers.css'

export default function AmazingOffers() {
    return (
        <div className='lg:h-[330px] my-24'>
            <div className='xl:container h-full'>
                <div className='flex-center flex-col lg:flex-row gap-2 lg:gap-8 xl:gap-10 w-full h-full px-5'>
                    <div className='w-full lg:w-2/12 lg:h-full dark:bg-neutral-600 bg-pink-100 border-4 border-purple-500/90 rounded-xl overflow-hidden'>
                        <img src='./images/percentage.png' className='w-full object-cover h-10 lg:h-16 opacity-50 lg:opacity-95' />
                        <div className='flex-center lg:flex-col  pr-4 lg:pr-0 gap-x-3'>
                        <img src='./images/discount.png' className='hidden sm:block w-12 h-12 lg:w-auto lg:h-auto lg:mx-auto -mt-2 lg:-mt-11 z-10' />
                        <p className='font-MorabbaBold text-3xl text-center my-3 lg:my-5 tracking-wide dark:text-white'>تـخـفیـفات شــگفــت انـــگـیــــــز</p>
                        </div>
                        {/* Offer Timer */}
                        <div className='flex items-center justify-around gap-y-5 lg:flex-col mb-3 lg:mb-0'>
                            <div className='flex-center gap-1.5 lg:gap-1 xl:gap-1.5 text-center lg:text-lg xl:text-xl font-DanaDemiBold dark:text-white'>
                                <span className='px-1.5 xl:px-2 pt-0.5 xl:pt-1 bg-zinc-700 dark:bg-white text-white rounded-md dark:text-zinc-700'>52</span>
                                :
                                <span className='px-1.5 xl:px-2 pt-0.5 xl:pt-1 bg-zinc-700 dark:bg-white text-white rounded-md dark:text-zinc-700'>05</span>
                                :
                                <span className='px-1.5 xl:px-2 pt-0.5 xl:pt-1 bg-zinc-700 dark:bg-white text-white rounded-md dark:text-zinc-700'>12</span>
                            </div>
                            <button className='flex-center gap-0.5 font-DanaMedium text-sm tracking-tighter dark:text-white'>
                                مشاهده همه
                                <FaChevronLeft className='w-3 h-3 mb-0.5' />
                            </button>
                        </div>
                    </div>

                    {/* Products */}
                    <div className='relative w-full lg:w-10/12 h-full py-5 pr-3 dark:bg-zinc-700/70 bg-purple-50 border-4 border-purple-500/90 rounded-2xl overflow-hidden'>
                        <button className='prev absolute top-1/2 right-6 md:right-5 p-2 bg-white/95 rounded-full shadow-black shadow-custom z-10'>
                            <FaChevronLeft className='w-3 md:w-4 h-3 md:h-4 rotate-180 text-zinc-800' />
                        </button>

                        <Swiper
                            spaceBetween={2}
                            slidesPerView={2}
                            speed={1200}
                            navigation={{
                                prevEl: '.prev',
                                nextEl: '.next',
                            }}
                            breakpoints={{
                                640: { slidesPerView: 3, spaceBetween: 2 },
                                768: { slidesPerView: 4, spaceBetween: 2 },
                                1240: { slidesPerView: 5, spaceBetween: 2 },
                                1536: { slidesPerView: 6, spaceBetween: 2 },
                            }}
                            grabCursor={true}
                            modules={[Navigation]}
                            className='mySwiper overflow-visible'
                        >
                            <SwiperSlide>
                                <ProductBox img={'./images/products/airpods.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} price={765000} discount={10} exPrice={850000} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductBox img={'./images/products/charge-cable.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} price={765000} discount={10} exPrice={850000} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductBox img={'./images/products/cover.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} price={765000} discount={27} exPrice={850000} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductBox img={'./images/products/power-bank2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} price={765000} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductBox img={'./images/products/power-bank1.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} price={765000} discount={88} exPrice={970000} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductBox img={'./images/products/cover.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} price={765000} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductBox img={'./images/products/airpods.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} price={765000} discount={88} exPrice={970000} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductBox img={'./images/products/charge-cable.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} price={765000} discount={10} exPrice={850000} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='flex-center flex-col gap-4 w-44 h-72 px-2 py-3 bg-white shadow-lg rounded-lg'>
                                    <span className='p-2.5 border-2 border-purple-custom rounded-full cursor-pointer'><FaArrowLeft className='w-7 h-7 text-purple-custom' /></span>
                                    <p className='text-center cursor-pointer'>مشاهده همه</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <button className='next absolute top-1/2 left-6 md:left-5 p-2 bg-white/95 rounded-full shadow-black shadow-custom z-10'>
                            <FaChevronLeft className='w-3 md:w-4 h-3 md:h-4 text-zinc-800' />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
