import React from 'react'
import { HiMiniChevronLeft } from "react-icons/hi2";
import { FaChevronLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './Landing.css'

export default function Landing() {
    return (
        <>
            <div className='relative mt-48'>
                <button className='prev absolute top-1/2 right-10 p-4 bg-white/15 hover:bg-white/50  rounded-full shadow-black shadow-custom z-10'>
                    <FaChevronLeft className='w-5 h-5 rotate-180 text-zinc-800' />
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
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    grabCursor={true}
                    modules={[Autoplay, Navigation]}
                    className='mySwiper overflow-visible'
                >
                    <SwiperSlide>
                        <div className='banner bg-gradient-to-r from-orange-300 to-orange-600'>
                            {/* Title Box */}
                            <div className='flex flex-col items-center justify-center w-[40rem] h-full my-auto text-white'>
                                <div className='moveNow flex flex-col items-center justify-center title-bar'>
                                    <h4 className='font-MorabbaBold text-4xl tracking-wide leading-10'>
                                        پرفروش ترین ساعت های هوشمند!
                                    </h4>
                                    <h4 className='font-MorabbaBold text-2xl tracking-wider leading-10 pt-3'>
                                        حرفه ای باش!
                                    </h4>
                                </div>
                                <button className='flex-center mt-6 pr-5 pl-2 py-1.5 font-DanaMedium text-xl hover:bg-purple-600/70 border border-white/75 hover:border-0 shadow-xl rounded-2xl'>
                                    خرید
                                    <HiMiniChevronLeft className='w-6 h-6 pb-1' />
                                </button>
                            </div>
                            <img className='banner--img' src='images/banners/banner-smart watch.png' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='banner bg-gradient-to-r from-rose-400 to-red-500'>
                            {/* Title Box */}
                            <div className={`flex flex-col items-center justify-center w-[40rem] h-full my-auto text-custom-dark title-bar`}>
                                <h4 className='font-MorabbaBold text-4xl tracking-wide leading-10'>
                                    این یک حلقه ساده نیست...!
                                </h4>
                                <h4 className='font-MorabbaBold text-2xl tracking-wider leading-10 pt-3'>
                                    دستیار هوشمند سلامتیه!
                                </h4>
                                <button className='flex-center mt-6 pr-5 pl-2 py-1.5 font-DanaMedium text-xl hover:bg-purple-600/70 border border-white/75 hover:border-0 shadow-xl rounded-2xl'>
                                    خرید
                                    <HiMiniChevronLeft className='w-6 h-6 pb-1' />
                                </button>
                            </div>
                            <img className='banner--img' src='images/banners/banner-smartRing.png' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='banner bg-gradient-to-r from-slate-300 to-slate-500'>

                            {/* Title Box */}
                            <div className='flex flex-col items-center justify-center w-[40rem] h-full my-auto text-white -translate-x-6'>
                                <h4 className='font-MorabbaBold text-4xl tracking-wide leading-10 uppercase'>
                                    کیفیت را گوش دهید!
                                </h4>
                                <h4 className='font-DanaDemiBold text-2xl tracking-tight leading-10 pt-3'>
                                    انواع هندزفری از 500 هزار تومان
                                </h4>
                                <button className='flex-center mt-6 pr-5 pl-2 py-1.5 font-DanaMedium text-xl hover:bg-purple-600/70 border border-white/75 hover:border-0 shadow-xl rounded-2xl'>
                                    خرید
                                    <HiMiniChevronLeft className='w-6 h-6 pb-1' />
                                </button>
                            </div>
                            <img className='banner--img' src='images/banners/banner-headphones.png' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='banner bg-gradient-to-r from-teal-200 to-teal-500'>
                            {/* Title Box */}
                            <div className='flex flex-col items-center justify-center w-[40rem] h-full my-auto text-custom-dark -translate-x-6'>
                                <div className='font-MorabbaBold text-4xl tracking-wide leading-10 uppercase'>
                                    اقتصادی اما ایده‌آل!
                                </div>
                                <h4 className='font-MorabbaBold text-2xl tracking-wider leading-10 pt-3'>
                                    با تجهیزات
                                    &nbsp;
                                    <span className='font-serif text-xl'>creative</span>
                                    &nbsp;
                                    عاشق موزیک شو!
                                </h4>
                                <button className='flex-center mt-6 pr-5 pl-2 py-1.5 font-DanaMedium text-xl hover:bg-purple-600/70 border border-white/75 hover:border-0 shadow-xl rounded-2xl'>
                                    خرید
                                    <HiMiniChevronLeft className='w-6 h-6 pb-1' />
                                </button>
                            </div>
                            <img className='banner--img' src='images/banners/banner-speaker.jpg' />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className='next absolute top-1/2 left-10 p-4 bg-white/15 hover:bg-white/50 rounded-full shadow-black shadow-custom z-10'>
                    <FaChevronLeft className='w-5 h-5  text-zinc-800' />
                </button>
            </div>
        </>
    )
}
