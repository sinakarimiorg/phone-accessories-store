import React from 'react'
import Header from '../../components/Header/Header'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Footer from '../../components/Footer/Footer'
import ArticleBox from '../../components/ArticleBox/ArticleBox'
import { MdFormatListNumberedRtl } from "react-icons/md";

export default function Articles() {
  return (
    <div>
      <Header />
      <BreadCrumb links={[
        { id: 1, title: "خانه", to: '/' },
        { id: 2, title: "همه مقالات", to: '/articles/1' },
      ]} />
      <div>
        <div className='container'>
          {/* Filtering Header */}

          <div className='flex gap-8 mb-10 px-4 py-3 border-b-2 border-gray-400 rounded-t-md bg-slate-300'>
            <div className='flex-center gap-1 font-DanaMedium'>
              <MdFormatListNumberedRtl className='w-5 h-5' />
              مرتب سازی براساس:
            </div>
            <div className='hidden sm:flex-center gap-x-8'>
            <a href='#'>جدید ترین</a>
            <a href='#'>قدیمی ترین</a>
            </div>
            <div className='sm:hidden'>
              <select className='px-3 py-1 bg-gray-200 text-sm cursor-pointer focus:outline-none rounded-md'>
                <option><a href='#'>جدید ترین</a></option>
                <option><a href='#'>قدیمی ترین</a></option>
              </select>
            </div>
          </div>
          

          <div className='grid grid-cols-1 sm:grid-cols-2 custom-sc:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10'>
            <ArticleBox shortName={'best-phone'} img={'/images/articles/phone.jpg'} title={'بهترین گوشی تا پنج میلیون'} date={[{ day: '21', month: 'تیر', year: '1404' }]} />
            <ArticleBox shortName={'earn-from-game'} img={'/images/articles/game-article.jpg'} title={'کسب درآمد از بازی!'} date={[{ day: '03', month: 'آذر', year: '1404' }]} />
            <ArticleBox shortName={'how-buy-speaker'} img={'/images/articles/speaker.jpg'} title={'راهنمای خرید اسپیکر بلوتوث قابل حمل (10 نکته ی مهم ضروری و کاربردی)'} date={[{ day: '28', month: 'اردیبهشت', year: '1403' }]} />
            <ArticleBox shortName={'how-buy-headphon'} img={'/images/articles/headphone.jpg'} title={'راهنمای خرید هندزفری سیمی (خلاصه، مهم و کاربردی)'} date={[{ day: '31', month: 'مرداد', year: '1403' }]} />
            <ArticleBox shortName={'best-phone'} img={'/images/articles/phone.jpg'} title={'بهترین گوشی تا پنج میلیون'} date={[{ day: '21', month: 'تیر', year: '1404' }]} />
            <ArticleBox shortName={'earn-from-game'} img={'/images/articles/game-article.jpg'} title={'کسب درآمد از بازی!'} date={[{ day: '03', month: 'آذر', year: '1404' }]} />
            <ArticleBox shortName={'how-buy-speaker'} img={'/images/articles/speaker.jpg'} title={'راهنمای خرید اسپیکر بلوتوث قابل حمل (10 نکته ی مهم ضروری و کاربردی)'} date={[{ day: '28', month: 'اردیبهشت', year: '1403' }]} />
            <ArticleBox shortName={'how-buy-headphon'} img={'/images/articles/headphone.jpg'} title={'راهنمای خرید هندزفری سیمی (خلاصه، مهم و کاربردی)'} date={[{ day: '31', month: 'مرداد', year: '1403' }]} />
            <ArticleBox shortName={'how-buy-headphon'} img={'/images/articles/headphone.jpg'} title={'راهنمای خرید هندزفری سیمی (خلاصه، مهم و کاربردی)'} date={[{ day: '31', month: 'مرداد', year: '1403' }]} />
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
