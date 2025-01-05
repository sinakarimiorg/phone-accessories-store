import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

import './Register.css'
export default function Register() {
  return (
    <div>
      <Header />
      {/* Desctop & Tablet Mode */}
      <div className='hidden sm:block pt-36'>
        <div className='flex max-h-[85vh]'>
          {/* Right Col & Form Section */}
          <div className='w-4/12 bg-white'>
            {/* Wrapper */}
            <div className='pt-8 md:pt-10 lg:pt-20'>
              {/* Header Of Form */}
              <div>
                <h1 className='font-DanaMedium md:font-DanaDemiBold md:text-lg lg:text-2xl text-center pb-2 md:pb-4 tracking-tight md:tracking-normal'>سـاخت حـساب کاربـری</h1>
                <div className='flex-center gap-1 md:gap-2 lg:gap-5 text-xs lg:text-sm'>
                  <span className='lg:font-DanaMedium border-b border-teal-700 tracking-tighter lg:tracking-normal'>قبلا ثبت نام کرده‌اید؟</span>
                  <Link className='px-1 md:px-2 py-px md:py-0.5 bg-teal-700 hover:bg-teal-600 text-white text-[10px] tracking-tighter lg:tracking-tight rounded-sm md:rounded-md transition-all' to={'/login'}>وارد شوید</Link>
                </div>
              </div>
              {/* Register Form Section */}
              <div className='mt-8 lg:mt-16 mr-6 lg:mr-16 ml-8 lg:ml-12 text-start'>
                <form>
                  <div>
                    <h1>نام و نام خانوادگی</h1>
                    <input type='text' placeholder='نام و نام خانوادگی خود را وارد نمایید...' />
                  </div>
                  <div>
                    <h1>نام کاربری</h1>
                    <input type='text' placeholder='نام کاربری خود را وارد نمایید...' />
                  </div>
                  <div>
                    <h1>شماره تماس</h1>
                    <input type='text' placeholder='شماره تماس خود را وارد نمایید...' />
                  </div>
                  <div>
                    <h1>رمز عبور</h1>
                    <input type='password' placeholder='رمز عبور خود را وارد نمایید...' />
                  </div>
                  <button type='submit' className='w-full h-8 md:h-10 lg:h-14 mt-1.5 md:mt-3 lg:mt-5 font-DanaMedium text-xs md:text-sm lg:text-base bg-teal-700 text-white rounded-md md:rounded-lg hover:bg-teal-600 transition-all'>ایـجاد حسـاب کاربـری</button>
                </form>
              </div>
            </div>
          </div>
          {/* Left Col */}
          <div className='relative w-8/12 overflow-hidden'>
            <img src='/images/login/Login-bg-desctop.jpg' />
            <div className='absolute top-0 right-0 flex h-full w-full'>
              {/* Cloudy Divider */}
              <div className='relative w-1/12 lg:w-2/12 h-full'>
                <div className='shape-divider-desctop'></div>
              </div>
              {/* Left Col__Content */}
              <div className='w-11/12 lg:w-10/12'>
                <div className='inline-block pt-12 md:pt-16 lg:pt-52 md:pl-0 md:text-center'>
                  {/* Site Logo */}
                  <div className='inline-block p-2 md:p-3 lg:p-4 mr-16 md:mr-0 border-2 md:border-4 border-purple-custom rounded-full'>
                    <img src='/images/logo/logo-lg.png' className='w-10 md:w-12 lg:w-20 h-10 md:h-12 lg:h-20' />
                  </div>
                  <div className='pt-2 lg:pt-4 mr-3 md:mr-0 text-white'>
                    <h1 className='pb-3 md:pb-5 lg:pb-10 font-MorabbaBold text-lg md:text-2xl lg:text-4xl md:tracking-wide'>بـه مـوبـولـــنـد خـوش آمــدیــد.</h1>
                    <ul className='space-y-3 md:space-y-4 text-white/80 text-start text-xs md:text-sm lg:text-base list-disc tracking-tight'>
                      <li>لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم، اِدج و فایرفاکس استفاده کنید.</li>
                      <li>ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.</li>
                      <li>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Mode */}
      <div className='block sm:hidden'>
        <div>
          {/* Top Row */}
          <div className='relative overflow-hidden h-80'>
            <img src='/images/login/Login-bg-mobile.jpg' className='h-full w-full' />
            <div className='absolute bottom-0 right-0 w-full'>
              {/* Left Col__Content */}
              <div className=''>
                <div className='inline-block pt-4 pr-8'>
                  {/* Site Logo */}
                  <div className='inline-block mr-20 p-3 border-2 border-purple-custom rounded-full'>
                    <img src='/images/logo/logo-lg.png' className='w-9 h-9'/>
                  </div>
                  <div className='pt-2 text-white'>
                    <h1 className='pb-5 font-MorabbaBold text-xl tracking-wide'>بـه مـوبـولـــنـد خـوش آمــدیــد.</h1>
                    <ul className='space-y-3 text-white/80 text-xs list-disc tracking-tighter'>
                      <li>لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم، اِدج و فایرفاکس استفاده کنید.</li>
                      <li>ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.</li>
                      <li>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Cloudy Divider */}
              <div className='relative w-full h-20'>
                <div className='shape-divider-desctop'></div>
              </div>
            </div>
          </div>
          {/* Bottom Row & Form Section */}
          <div className='bg-white pb-10'>
            {/* Wrapper */}
            <div className='pt-8 px-8'>
              {/* Header Of Form */}
              <div>
                <h1 className='font-DanaDemiBold text-lg text-center pb-2'>سـاخت حـساب کاربـری</h1>
                <div className='flex-center gap-3 text-xs'>
                  <span className='border-b border-teal-700 tracking-tight'>قبلا ثبت نام کرده‌اید؟</span>
                  <Link className='px-2 py-0.5 bg-teal-700 hover:bg-teal-600 text-white tracking-tighter rounded-md transition-all' to={'/login'}>وارد شوید</Link>
                </div>
              </div>
              {/* Register Form Section */}
              <div className='mt-8 lg:mt-16 mr-6 lg:mr-16 ml-8 lg:ml-12 text-start'>
                <form>
                  <div>
                    <h1>نام و نام خانوادگی</h1>
                    <input type='text' placeholder='نام و نام خانوادگی خود را وارد نمایید...' />
                  </div>
                  <div>
                    <h1>نام کاربری</h1>
                    <input type='text' placeholder='نام کاربری خود را وارد نمایید...' />
                  </div>
                  <div>
                    <h1>شماره تماس</h1>
                    <input type='text' placeholder='شماره تماس خود را وارد نمایید...' />
                  </div>
                  <div>
                    <h1>رمز عبور</h1>
                    <input type='password' placeholder='رمز عبور خود را وارد نمایید...' />
                  </div>
                  <button type='submit' className='w-full h-10 lg:h-14 mt-3 lg:mt-5 font-DanaMedium text-sm lg:text-base bg-teal-700 text-white rounded-lg hover:bg-teal-600 transition-all'>ایـجاد حسـاب کاربـری</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
