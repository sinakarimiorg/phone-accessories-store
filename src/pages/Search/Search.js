import React from 'react'
import Header from '../../components/Header/Header'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import ProductBox from '../../components/ProductBox/ProductBox'

export default function Search() {
  const { value } = useParams()

  return (
    <div>
      <Header />
      <BreadCrumb links={[
        { id: 1, title: "خانه", to: '/' },
        { id: 2, title: "جستجو", to: `/search/${value}` },
      ]} />
      <div>
        <div className='container'>
          {/* Searchs For Products */}
          <section className='-mt-10'>
            <SectionHeader
              title={'نتایج کالاها'}
              desc={'بر‌اساس جستجوی شما'}
            />
            <div className="hidden p-3 bg-yellow-200 rounded-md">
              متاسفانه هیچ کالایی برای جستجوی شما یافت نشد
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 space-y-6'>
              <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box__lg'} price={765000} discount={27} exPrice={850000}/>
              <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box__lg'} price={765000} discount={27} exPrice={850000}/>
              <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box__lg'} price={765000} discount={27} exPrice={850000}/>
              <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box__lg'} price={765000} discount={27} exPrice={850000}/>
              <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box__lg'} price={765000} discount={27} exPrice={850000}/>
              <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box__lg'} price={765000} discount={27} exPrice={850000}/>
              <ProductBox img={'/images/products/cover.png'} img2={'/images/products/cover2.png'} title={'هندزفری بلوتوثی کربی مدل CR-T107'} classes={'product-box__lg'} price={765000} discount={27} exPrice={850000}/>
            </div>
          </section>

          {/* Searchs For Articles */}
          <section className='mt-6'>
            <SectionHeader
              title={'نتایج مقالات'}
              desc={'بر‌اساس جستجوی شما'}
            />
            <div className="p-3 bg-yellow-200 rounded-md">
              متاسفانه هیچ مقاله ای برای جستجوی شما یافت نشد
            </div>
          </section>
        </div>
      </div>
      <Footer marginClasses={'mt-32'}/>
    </div>
  )
}
