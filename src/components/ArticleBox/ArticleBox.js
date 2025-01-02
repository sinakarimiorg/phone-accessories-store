import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function ArticleBox({ shortName, img, title, date }) {
    
    return (
        <Link to={`/article-info/${shortName}`}
            className="group flex sm:flex-col gap-y-4 gap-x-3 w-full h-[150px] sm:h-[285px] p-2.5 bg-white dark:bg-zinc-700 rounded-2xl shadow-custom cursor-pointer overflow-hidden">
            <div className="relative rounded-2xl rounded-bl-4xl overflow-hidden shrink-0">
                <img src={img} alt="blog"
                    className="w-32 h-32 object-cover object-top sm:w-[338px] sm:h-[187px]" />
                <div
                    className="absolute w-full h-full hidden sm:flex-center flex-col invisible opacity-0 group-hover:visible group-hover:opacity-100 inset-0 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75">
                        <img src='/images/logo/logo-lg.png'/>
                        <p className='pt-3 font-sans font-extrabold text-lg text-purple-custom'>Mobo Mag</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-between w-full sm:pl-[18px]">
                <h2
                    className="text-sm md:text-lg sm:max-h-[51px] mt-2.5 leading-7 sm:mt-1 text-zinc-700 dark:text-white line-clamp-2">
                    {title}
                </h2>
                <span className="block sm:hidden w-full h-px bg-gray-100 dark:bg-white/10 mt-5 mb-[18px]">
                </span>
                <div className="flex items-end justify-between w-full sm:w-auto pb-1.5 sm:pb-0">
                    <span className="hidden sm:block w-px h-[61px] sm:mt-1 bg-gray-100 dark:bg-white/10 mx-5">
                    </span>
                    <div
                        className="flex sm:flex-col gap-x-0.5 sm:-mt-1 text-xs sm:text-sm text-left text-teal-600 dark:text-emerald-500">
                        <span className="sm:font-DanaDemiBold sm:text-2xl">{date[0].day}</span>
                        <span>{date[0].month}</span>
                        <span>{date[0].year}</span>
                    </div>
                    <button
                        className="flex-center sm:hidden gap-x-1 h-5 ml-1.5 sm:ml-0 pr-2.5 pl-2 font-DanaMedium text-xs text-orange-300 bg-orange-200/20 rounded-md">
                        مطالعه
                        <FaChevronLeft className='w-[14px] h-[14px]'/>
                    </button>
                </div>
            </div>
        </Link>
    )
}
