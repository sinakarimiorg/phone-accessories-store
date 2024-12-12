import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import ProductFeatureBox from '../../components/ProductFeatureBox/ProductFeatureBox';
import { IoStarOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { LiaComments } from "react-icons/lia";
import { PiBellRingingLight } from "react-icons/pi";
import { TbHeartPlus } from "react-icons/tb";


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
          <div>
            {/* Right Section &  Product Features */}
            <div className='h-[500px] flex justify-between py-8 px-7 border border-gray-400 rounded-xl'>
              {/* Features Col  */}
              <div>
                <h1>
                  هندزفری بلوتوثی کربی مدل CR-T107
                </h1>
                {/* Product Rating */}
                <div className='flex items-center gap-3'>
                  <div className='flex-center gap-1'>
                    <span><IoStarOutline /></span>
                    <span>4.3</span>
                    <span>(از 23 نظر)</span>
                  </div>
                  <a href='#'> مشاهده نظرات</a>
                </div>
                {/* Product Colors */}
                <div>
                  <p className='flex gap-1'>
                    <h3>رنگ:</h3>
                    <span>مشکی</span>
                  </p>
                  <div className='flex items-center gap-1.5'>
                    <div className='w-6 h-6 bg-black border-2 border-gray-700 rounded-full'></div>
                    <div className='w-6 h-6 bg-red-600 border-2 border-gray-700 rounded-full'></div>
                    <div className='w-6 h-6 bg-white border-2 border-gray-700 rounded-full'></div>
                    <div className='w-6 h-6 bg-green-600 border-2 border-gray-700 rounded-full'></div>
                  </div>
                </div>
                {/* Product's Features */}
                <div>
                  <h3>ویژگی‌ها</h3>
                  <div className='flex items-center flex-wrap gap-2'>
                    <ProductFeatureBox name={"مقاومت مقابل آب"} status={'ضدآب'} />
                    <ProductFeatureBox name={"مقاومت مقابل آب"} status={'ضدآب'} />
                    <ProductFeatureBox name={"مقاومت مقابل آب"} status={'ضدآب'} />
                    <ProductFeatureBox name={"مقاومت مقابل آب"} status={'ضدآب'} />
                    <ProductFeatureBox name={"مقاومت مقابل آب"} status={'ضدآب'} />
                  </div>
                </div>
              </div>

              {/* Actions & Product's Photos Col */}
              <div>
                {/* Action Buttons */}
                <div className='flex-center gap-5'>
                  <button className='p-2 bg-white/85 shadow-md rounded-md'><GoShareAndroid className='w-5 h-5' /></button>
                  <button className='p-2 bg-white/85 shadow-md rounded-md'><LiaComments className='w-5 h-5' /></button>
                  <button className='p-2 bg-white/85 shadow-md rounded-md'><PiBellRingingLight className='w-5 h-5' /></button>
                  <button className='p-2 bg-white/85 shadow-md rounded-md'><TbHeartPlus className='w-5 h-5' /></button>
                </div>
                {/* Product Images  */}
                <div>
                  <img className='h-72' src='/images/products/airpods.png'/>
                  <div className='flex-center gap-3'>
                    <img className='w-20 h-20 border border-gray-300/50 rounded-lg' src='/images/products/airpod2.png'/>
                    <img className='w-20 h-20 border border-gray-300/50 rounded-lg' src='/images/products/airpods.png'/>
                    <img className='w-20 h-20 border border-gray-300/50 rounded-lg' src='/images/products/airpod2.png'/>
                  </div>
                </div>
              </div>
            </div>













            {/* Left Section &  Product Price */}
            <div>
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
