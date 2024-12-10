import React from 'react'
import { HiMiniChevronLeft } from "react-icons/hi2";
import { FaChevronLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './Landing.css'

export default function Landing() {
    return (
        <>
            <div className='relative sm:mt-72 '>
                <button className='prev absolute top-1/2 right-6 md:right-10 p-2 md:p-3 bg-white/15 hover:bg-white/50 rounded-full shadow-black shadow-custom z-10'>
                    <FaChevronLeft className='w-3 md:w-4 xl:w-5 h-3 md:h-4 xl:h-5 rotate-180 text-zinc-800' />
                </button>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1200}
                    pagination={
                       { clickable: true}
                    }
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    grabCursor={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper overflow-visible'
                >
                    <SwiperSlide>
                        <div className='banner bg-gradient-to-r from-orange-300 to-orange-600'>
                            {/* Title Box */}
                            <div className='banner--title-bar text-white'>
                                <div className='moveNow flex flex-col items-center justify-center'>
                                    <h4 className='banner--title-first'>
                                        پرفروش ترین ساعت های هوشمند!
                                    </h4>
                                    <h4 className='banner--title-second'>
                                        حرفه ای باش!
                                    </h4>
                                </div>
                                <button className='shopping-btn flex-center'>
                                    خرید
                                    <HiMiniChevronLeft className='w-5 xl:w-6 h-5 xl:h-6 pb-0.5 xl:pb-1'/>
                                </button>
                            </div>
                            <img className='banner--img' src='/images/banners/banner-smart watch.png' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='banner bg-gradient-to-r from-rose-400 to-red-500'>
                            {/* Title Box */}
                            <div className='banner--title-bar text-custom-dark'>
                                <h4 className='banner--title-first'>
                                    این یک حلقه ساده نیست...!
                                </h4>
                                <h4 className='banner--title-second'>
                                    دستیار هوشمند سلامتیه!
                                </h4>
                                <button className='shopping-btn flex-center'>
                                    خرید
                                    <HiMiniChevronLeft className='w-5 xl:w-6 h-5 xl:h-6 pb-0.5 xl:pb-1'/>
                                </button>
                            </div>
                            <img className='banner--img' src='/images/banners/banner-smartRing.png' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='banner bg-gradient-to-r from-slate-300 to-slate-500'>

                            {/* Title Box */}
                            <div className='banner--title-bar text-white -translate-x-6'>
                                <h4 className='banner--title-first uppercase'>
                                    کیفیت را گوش دهید!
                                </h4>
                                <h4 className='banner--title-second tracking-tight'>
                                    انواع هندزفری از 500 هزار تومان
                                </h4>
                                <button className='shopping-btn flex-center'>
                                    خرید
                                    <HiMiniChevronLeft className='w-5 xl:w-6 h-5 xl:h-6 pb-0.5 xl:pb-1'/>
                                </button>
                            </div>
                            <img className='banner--img' src='/images/banners/banner-headphones.png' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='banner bg-gradient-to-r from-teal-200 to-teal-500'>
                            {/* Title Box */}
                            <div className='banner--title-bar text-custom-dark -translate-x-6'>
                                <div className='banner--title-first uppercase'>
                                    اقتصادی اما ایده‌آل!
                                </div>
                                <h4 className='banner--title-second'>
                                    با تجهیزات
                                    &nbsp;
                                    <span className='font-serif text-xl'>creative</span>
                                    &nbsp;
                                    عاشق موزیک شو!
                                </h4>
                                <button className='shopping-btn flex-center'>
                                    خرید
                                    <HiMiniChevronLeft className='w-5 xl:w-6 h-5 xl:h-6 pb-0.5 xl:pb-1'/>
                                </button>
                            </div>
                            <img className='banner--img' src='/images/banners/banner-speaker.jpg' />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className='next absolute top-1/2 left-6 md:left-10 p-2 md:p-3 bg-white/15 hover:bg-white/50 rounded-full shadow-black shadow-custom z-10'>
                    <FaChevronLeft className='w-3 md:w-4 xl:w-5 h-3 md:h-4 xl:h-5  text-zinc-800' />
                </button>
            </div>
        </>
    )
}
