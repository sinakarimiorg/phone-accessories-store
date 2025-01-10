import React from 'react'
import Header from '../../components/Header/Header'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Footer from '../../components/Footer/Footer'
import ProductBox from '../../components/ProductBox/ProductBox'
import { MdFormatListNumberedRtl } from "react-icons/md";

export default function Products() {
  return (
    <div>
      <Header />
      <BreadCrumb links={[
        { id: 1, title: "خانه", to: '/' },
        { id: 2, title: "همه محصولات", to: '/products/1' },
      ]} />
      <div>
        <div className='container'>
          {/* Filtering Header */}

          <div className='flex gap-x-4 sm:gap-x-8 px-4 py-3 border-b-2 border-gray-400 rounded-t-md bg-slate-300'>
            <div className='flex-center gap-1 font-DanaMedium'>
              <MdFormatListNumberedRtl className='w-5 h-5' />
              مرتب سازی براساس:
            </div>
            <div className='hidden sm:flex-center gap-x-8'>
              <a href='#'>پرفروش‌ ترین</a>
              <a href='#'>گران‌ ترین</a>
              <a href='#'>ارزان ترین</a>
              <a href='#'>محبوب ترین</a>
            </div>
            <div className='sm:hidden'>
              <select className='px-3 py-1 bg-gray-200 text-sm cursor-pointer focus:outline-none rounded-md'>
                <option><a href='#'>پرفروش‌ ترین</a></option>
                <option><a href='#'>گران‌ ترین</a></option>
                <option><a href='#'>ارزان ترین</a></option>
                <option><a href='#'>محبوب ترین</a></option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 custom-sc:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 space-y-6'>
            <ProductBox img={'/images/products/car-charger.png'} img2={'/images/products/car-charger2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
            <ProductBox img={'/images/products/power-bank1.png'} img2={'/images/products/power-bank2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={88} exPrice={970000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
            <ProductBox img={'/images/products/charge-cable.png'} img2={'/images/products/charge-cable2.png'} title={'کابل شارژ مولتی رابط مدل ایکس'} classes={'product-box'} price={765000} discount={10} exPrice={850000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
            <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box'} price={765000} discount={27} exPrice={850000} />
          </div>
          {/* Pagination */}
          <div className='flex-center gap-3.5 my-10 child:shadow-sm'>
            <div className='pagination--item bg-purple-400'>1</div>
            <div className='pagination--item'>2</div>
            <div className='pagination--item'>3</div>
          </div>
        </div>
      </div>
      <Footer marginClasses={'mt-10'} />
    </div>
  )
}
