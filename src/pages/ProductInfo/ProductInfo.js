import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import ProductFeatureBox from '../../components/ProductFeatureBox/ProductFeatureBox';
import { RiStarFill } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { LiaComments } from "react-icons/lia";
import { PiBellRingingLight } from "react-icons/pi";
import { TbHeartPlus } from "react-icons/tb";
import { HiMiniChevronLeft } from "react-icons/hi2";


import './ProductInfo.css'

export default function ProductInfo() {
  return (
    <div>
      <Header />
      <BreadCrumb
        links={[
          { id: 1, title: 'فروشگاه موبولـند', to: '' },
          { id: 2, title: 'همه محصولات', to: '/all-products' },
          { id: 3, title: 'هدفون کربی', to: '/product-info' },
        ]} />

      {/* Contents For Desctop Size */}
      <div>
        <div className='container'>
          <div className='flex gap-12'>

            {/* Right Section &  Product Features */}
            <div className='flex justify-between py-8 px-7 border border-gray-300 rounded-xl'>

              {/* Features Col  */}
              <div>
                <h1 className='font-MorabbaBold text-xl text-zinc-800 dark:text-white tracking-wide leading-8'>
                  هندزفری بلوتوثی کربی مدل - CR-T107
                </h1>

                {/* Product Rating */}
                <div className='inline-flex items-center gap-2 pt-4 pb-2 border-b border-gray-300'>
                  <p className='flex gap-1'>
                    <span><RiStarFill className='h-5 w-5 text-amber-500' /></span>
                    <span className='dark:text-white'>4.3</span>
                  </p>
                  <a href='#' className='text-zinc-500 dark:text-white/70 hover:text-purple-400 text-xs cursor-pointer'>(از 23 نظر)</a>
                </div>

                {/* Product Colors */}
                <div className='mt-5 pb-4 border-b border-gray-300'>
                  <p className='flex gap-1 pb-4'>
                    <h3 className='text-zinc-600 dark:text-white/90'>رنگ:</h3>
                    <span className='font-DanaDemiBold text-zinc-800 dark:text-white'>مشکی</span>
                  </p>
                  <div className='flex items-center gap-3'>
                    <div className='product__color-Item bg-black'></div>
                    <div className='product__color-Item bg-pink-400'></div>
                    <div className='product__color-Item bg-white'></div>
                    <div className='product__color-Item bg-sky-700'></div>
                  </div>
                </div>
                {/* Product's Features */}
                <div className='mt-6'>
                  <h3 className='font-DanaDemiBold text-zinc-800 pb-6 dark:text-white'>ویژگی‌ها</h3>
                  <div className='grid grid-cols-3 gap-x-5 gap-y-6'>
                    <ProductFeatureBox name={'قابلیت نویز کنسلینگ'} status={'نویز کنسلینگ میکروفون'} />
                    <ProductFeatureBox name={'نوع گوشی'} status={'دو گوشی'} />
                    <ProductFeatureBox name={'درگاه‌های ارتباطی'} status={'بلوتوث'} />
                    <ProductFeatureBox name={'نوع اتصال'} status={'بی‌سیم'} />
                    <ProductFeatureBox name={'رابط‌ها'} status={'Bluetooth'} />
                    <ProductFeatureBox name={'قابلیت‌های مقاومتی'} status={'مقاومت در برابر رطوبت و عرق'} />
                  </div>
                  <p className='pt-7 text-center text-white'>
                    <a href='#' className='inline-flex py-2 px-4 text-sm bg-slate-500 hover:bg-slate-600/70 rounded-lg'>
                      مشاهده همه ویژگی‌ها
                      <HiMiniChevronLeft className='h-4 w-4' />
                    </a>
                  </p>
                </div>
              </div>

              {/* Actions & Product's Photos Col */}
              <div>
                {/* Action Buttons */}
                <div className='flex-center gap-5'>
                  <button className='product__action-button'><GoShareAndroid className='w-5 h-5' /><span className='tooltiptext'>اشتراک گذاری کالا</span></button>
                  <button className='product__action-button'><LiaComments className='w-5 h-5' /><span className='tooltiptext'>نظرات کاربران</span></button>
                  <button className='product__action-button'><PiBellRingingLight className='w-5 h-5' /><span className='tooltiptext'>اطلاع‌رسانی موبولند</span></button>
                  <button className='product__action-button'><TbHeartPlus className='w-5 h-5' /><span className='tooltiptext'>مورد علاقه</span></button>
                </div>
                {/* Product Images  */}
                <div>
                  <img className='h-96' src='/images/products/airpods.png' />
                  <div className='flex-center gap-3'>
                    <img className='product__album-img' src='/images/products/airpod2.png' />
                    <img className='product__album-img' src='/images/products/airpods.png' />
                    <img className='product__album-img' src='/images/products/airpod2.png' />
                  </div>
                </div>
              </div>
            </div>

            {/* Left Section &  Product Price */}
            <div className='h-[400px] w-[350px] border border-gray-400 rounded-xl'>
            </div>
          </div>
        </div>
      </div>

      {/* Contents For Mobile Size */}
      <div></div>
      <Footer />
    </div>
  )
}
