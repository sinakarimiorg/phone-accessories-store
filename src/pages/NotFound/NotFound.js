import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

import './NotFound.css'
export default function NotFound() {

    return (
        <div>
            <Header />
            <div className='sm:pt-40'>
                <div className='relative my-10 md:my-16 h-full w-full'>
                <img className='bg-custom-navy py-6' src='./images/404.jpg'/>
                <button className='absolute flex-center right-0 left-0 bottom-8 md:bottom-16 w-20 md:w-36 custom-sc:w-52 xl:w-60 h-5 md:h-8 custom-sc:h-11 xl:h-14 m-auto bg-white shadow-sm shadow-white rounded-xl md:rounded-2xl'>
                    <Link to={'/'} className='custom-sc:font-DanaDemiBold text-custom-navy text-[10px] md:text-sm custom-sc:text-base xl:text-lg tracking-tighter custom-sc:tracking-tight'>
                    بازگشت به خـانه
                    </Link>
                </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
