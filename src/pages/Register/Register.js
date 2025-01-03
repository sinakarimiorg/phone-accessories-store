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
      <div className='hidden md:block pt-40'>
        <div className='flex h-[100vh]'>
          {/* Right Col & Form Section */}
          <div className='w-4/12 bg-white'>
          {/* Wrapper */}
            <div className='mt-20'>
              {/* Header Of Form */}
              <div>
                <h1 className='font-DanaDemiBold text-2xl text-center pb-4'>سـاخت حـساب کاربـری</h1>
                <div className='flex-center gap-5 text-sm'>
                  <span className='font-DanaMedium border-b border-teal-700'>قبلا ثبت نام کرده‌اید؟</span>
                  <Link className='px-2 py-0.5 bg-teal-700 hover:bg-teal-600 text-white tracking-tight rounded-md transition-all' to={'/login'}>وارد شوید</Link>
                </div>
              </div>
              {/* Register Form Section */}
              <div className='mt-16 mr-16 ml-24 text-start'>
                <form>
                  <div>
                    <h1>نام و نام خانوادگی</h1>
                    <input type='text' placeholder='نام و نام خانوادگی خود را وارد نمایید...'/>
                  </div>
                  <div>
                    <h1>نام کاربری</h1>
                    <input type='text' placeholder='نام کاربری خود را وارد نمایید...'/>
                  </div>
                  <div>
                    <h1>شماره تماس</h1>
                    <input type='text' placeholder='شماره تماس خود را وارد نمایید...'/>
                  </div>
                  <div>
                    <h1>رمز عبور</h1>
                    <input type='password' placeholder='رمز عبور خود را وارد نمایید...'/>
                  </div>
                  <button type='submit' className='w-full h-14 mt-5 font-DanaMedium bg-teal-700 text-white rounded-lg hover:bg-teal-600 transition-all'>ایـجاد حسـاب کاربـری</button>
                </form>
              </div>
            </div>
          </div>
          {/* Left Col */}
          <div className='relative w-8/12 overflow-hidden'>
            <img src='/images/login/Login-bg-desctop.jpg' />
            <div className='absolute top-0 right-0 flex h-full w-full'>
              {/* Cloudy Divider */}
              <div className='relative w-1/12 h-full'>
                <div className='shape-divider-desctop'></div>
              </div>
              {/* Left Col__Content */}
              <div className='w-11/12'>
                <div className='inline-block pt-52 pr-20 text-center'>
                  {/* Site Logo */}
                  <div className='inline-block p-4 border-4 border-purple-custom rounded-full'>
                    <img src='/images/logo/logo-lg.png' className='w-20 h-20' />
                  </div>
                  <div className='pt-4 text-white'>
                    <h1 className='pb-10 font-MorabbaBold text-4xl tracking-wide'>بـه مـوبـولـــنـد خـوش آمــدیــد.</h1>
                    <ul className='space-y-4 text-white/80 text-start list-disc tracking-tight'>
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
      <div></div>
      <Footer />
    </div>
  )
}
