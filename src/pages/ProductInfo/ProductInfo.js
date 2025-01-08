import React from 'react'
import { useEffect, useState } from 'react'
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
import { PiTimerLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPatchCheck } from "react-icons/bs";
import { PiStorefront } from "react-icons/pi";
import { CiBoxes } from "react-icons/ci";
import { PiWarningOctagonThin } from "react-icons/pi";
import { PiPhoneCallLight } from "react-icons/pi";
import ProductFeatureBoxLarge from '../../components/ProductFeatureBoxLarge/ProductFeatureBoxLarge';
import CommentsSection from '../../components/CommentsSection/CommentsSection'

import './ProductInfo.css'

export default function ProductInfo() {

  ////////// Handle NavBar visiblity
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (

    <div>
      {/* Svg Icons  */}
      <svg className='hidden'>
        <symbol id="toman" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
          <path fillRule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clipRule="evenodd" fill="currentColor"></path>
        </symbol>
      </svg>

      <Header />
      <BreadCrumb
        links={[
          { id: 1, title: 'فروشگاه موبولـند', to: '/' },
          { id: 2, title: 'همه محصولات', to: '/products/1' },
          { id: 3, title: 'هدفون کربی', to: '/product-info' },
        ]} />

      {/* Contents For Desctop Size */}
      <div className='hidden md:block'>
        <div className='container'>
          {/* Off timer */}
          <div className='xl:hidden flex items-center justify-between py-4 px-3 w-full text-white bg-custom-navy/85 rounded-t-lg'>
            <span className='font-MorabbaMedium'>تخفـیف شگفـت انـگـیز</span>
            <div className='flex h-full gap-2'>
              <div className='flex-center gap-1'>
                <span>48</span>:
                <span>21</span>:
                <span>04</span>
              </div>
              <PiTimerLight className='w-5 h-5' />
            </div>
          </div>
          {/* First & Main Section (Pics, purchase cart, features) */}
          <div className='flex flex-col xl:flex-row gap-x-12 gap-y-5'>
            {/* Right Section &  Product Features */}
            <div className='flex gap-x-5 py-8 px-5 lg:px-7 border border-gray-300 rounded-b-xl xl:rounded-xl'>

              {/* Rate & Color & Features Col */}
              <div>
                <h1 className='font-MorabbaBold lg:text-xl text-zinc-800 dark:text-white tracking-wide leading-8'>
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
                  <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-6 h-52 lg:h-auto overflow-hidden'>
                    <ProductFeatureBox name={'قابلیت نویز کنسلینگ'} status={'نویز کنسلینگ میکروفون'} />
                    <ProductFeatureBox name={'نوع گوشی'} status={'دو گوشی'} />
                    <ProductFeatureBox name={'درگاه‌های ارتباطی'} status={'بلوتوث'} />
                    <ProductFeatureBox name={'نوع اتصال'} status={'بی‌سیم'} />
                    <ProductFeatureBox name={'رابط‌ها'} status={'Bluetooth'} />
                    <ProductFeatureBox name={'قابلیت‌های مقاومتی'} status={'مقاومت در برابر رطوبت و عرق'} />
                  </div>
                  <p className='pt-2 lg:pt-7 text-center text-white'>
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
                <div className='flex-center gap-x-3 lg:gap-x-5'>
                  <button className='product__action-button'><GoShareAndroid className='w-5 h-5' /><span className='tooltiptext'>اشتراک گذاری کالا</span></button>
                  <button className='product__action-button'><LiaComments className='w-5 h-5' /><span className='tooltiptext'>نظرات کاربران</span></button>
                  <button className='product__action-button'><PiBellRingingLight className='w-5 h-5' /><span className='tooltiptext'>اطلاع‌رسانی موبولند</span></button>
                  <button className='product__action-button'><TbHeartPlus className='w-5 h-5' /><span className='tooltiptext'>مورد علاقه</span></button>
                </div>
                {/* Product Images  */}
                <div>
                  <img className='h-72 lg:h-80 2xl:h-96 scale-125 lg:scale-100' src='/images/products/airpods.png' />
                  <div className='flex-center gap-3'>
                    <img className='product__album-img' src='/images/products/airpod2.png' />
                    <img className='product__album-img' src='/images/products/airpods.png' />
                    <img className='product__album-img' src='/images/products/airpod2.png' />
                  </div>
                </div>
              </div>

            </div>

            {/* Left Section &  Product Price */}
            <div className='flex flex-row xl:flex-col items-center gap-x-10 w-full xl:w-[350px] mx-auto'>
              {/* Top section of Cart */}
              <div className='h-fit w-4/6 xl:w-full bg-white shadow-xl rounded-xl'>
                {/* Off timer */}
                <div className='hidden xl:flex items-center justify-between py-4 px-3 w-full text-white bg-custom-navy/85 rounded-t-lg'>
                  <span className='font-MorabbaMedium'>تخفـیف شگفـت انـگـیز</span>
                  <div className='flex h-full gap-2'>
                    <div className='flex-center gap-1'>
                      <span>48</span>:
                      <span>21</span>:
                      <span>04</span>
                    </div>
                    <PiTimerLight className='w-5 h-5' />
                  </div>
                </div>
                {/* Cart Body */}
                <div className='py-4 xl:py-6 px-5'>
                  {/* Purchase Details */}
                  <div className='hidden xl:block'>

                    <div className='flex gap-1.5 mb-2.5 py-4 px-3 bg-slate-300/90 rounded-md'>
                      <div>
                        <div className='flex items-center gap-2 text-sm'>
                          <PiStorefront className='w-5 h-5' />
                          <span className='font-DanaMedium text-lg'>موبولـند</span>
                        </div>
                        <div className='flex gap-2 text-sm mt-2'>
                          <CiBoxes className='w-4 h-4' />
                          <span className='text-xs tracking-tight'>موجود در انبار موبولند (ارسال فوری)</span>
                        </div>
                      </div>
                    </div>

                    <div className='flex gap-1.5 mb-2.5 py-4 px-3 bg-slate-300/90 rounded-md'>
                      <IoSettingsOutline className='w-4 h-4' />
                      <div className='flex gap-2'>
                        <span className='text-zinc-500 text-sm'>ارزیابی عملکرد :</span>
                        <span className='text-sm font-DanaDemiBold'>عالی</span>
                      </div>
                    </div>

                    <div className='flex gap-1.5 py-4 px-3 bg-slate-300/90 rounded-md'>
                      <BsPatchCheck className='w-4 h-4' />
                      <div className='flex gap-2'>
                        <span className='text-zinc-500 text-sm'>سرویس موبولند :</span>
                        <span className='text-sm font-DanaDemiBold'>۷ روز تضمین بازگشت کالا</span>
                      </div>
                    </div>
                  </div>

                  {/* Produc Price */}
                  <div className='mb-0.5 xl:my-5 px-4 xl:text-left'>
                    <div className='inline-flex justify-center items-end h-5 w-11 text-center text-[10px] text-white bg-purple-500 rounded-xl'><span className='text-xs'>33</span>%</div>
                    <div className='flex items-center justify-center xl:justify-end gap-4 pt-2 pl-2'>
                      <span className='cart__ex-price'>2,200,000</span>
                      <div className='inline-flex gap-1'>
                        <span className='font-DanaDemiBold text-xl'>1,500,000</span>
                        <span><svg className='w-4 h-4'><use href="#toman"></use></svg></span>
                      </div>
                    </div>
                  </div>

                  {/* Cart Actions  */}
                  <div className='w-full h-10 xl:h-12 font-DanaMedium text-center text-white xl:text-lg leading-10 xl:leading-[48px] bg-custom-navy rounded-lg cursor-pointer'>افزودن به سبد خرید</div>
                </div>
              </div>

              {/* bottom section of Cart */}
              <div className='h-fit w-2/6 xl:w-full xl:mt-5 p-3 bg-white shadow-xl rounded-xl'>
                <div className='flex items-center gap-1.5 pb-2 border-b border-dotted border-gray-300 cursor-pointer'>
                  <PiWarningOctagonThin className='w-5 h-5 text-amber-500' />
                  <span className='text-sm text-zinc-500'>گزارش نادرستی مشخصات</span>
                </div>

                <div className='flex items-center gap-4 pt-3 cursor-pointer'>
                  <span className='inline-block p-1 text-zinc-600 border border-zinc-600 rounded-full'><PiPhoneCallLight className='w-6 h-6' /></span>
                  <div>
                    <p className='text-sm text-zinc-500 tracking-tight'>ارتباط با فروش</p>
                    <p className='font-DanaMedium text-sm'>تماس با کـارشناسان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section (All features, description, comments) */}
          <div className='mt-14 lg:mt-20'>
            {/* Header Of This Section */}
            <div className={`sticky ${visible ? 'top-[10.25rem]' : 'top-24'} z-10`}>
              <ul className='flex gap-8 px-4 border-b-2 border-gray-400 rounded-t-md bg-slate-300'>
                <li className='productInfo__menu-title'>
                  <a href='#product__description-section'>معرفی</a>
                  <div className='productInfo__underline-border'></div>
                </li>
                <li className='productInfo__menu-title'>
                  <a href='#product__features-section'>مشخصات</a>
                  <div className='productInfo__underline-border opacity-0'></div>
                </li>
                <li className='productInfo__menu-title'>
                  <a href='#product__comments-section'>نظرات کاربران</a>
                  <div className='productInfo__underline-border opacity-0'></div>
                </li>
              </ul>
            </div>
            {/* Body & Contents of Section */}
            <div className=' flex gap-x-8 xl:gap-x-16 pt-8'>
              {/* Right col & Contents */}
              <div className='w-8/12 xl:w-9/12'>
                {/* Description */}
                <div id='product__description-section' className='px-2.5 mb-7'>
                  <h1 className='product-info__title'>معرفی</h1>
                  <p className='text-sm lg:text-base text-zinc-500 dark:text-white leading-8 lg:leading-9 line-clamp-3'>
                    محصول جدید از کمپانی کربی ( CRBE ) با نام ( CR-T101 ) معرفی شد . این محصول از سری هدفون های بی سیم کمپانی کربی ( CRBE ) است که با توجه به امکانات و طراحی مینیمال خود
                    مورد توجه قرار گرفت . هدفون بی سیم کربی مدل (CR-T101 ) در کنار کیفیت ساخت فوق‌العاده
                    بالای خود، به بلوتوث نسخه 5.3 مجهز شده است تا شاهد سرعت بسیار بالای آن در زمینه‌ی برقراری اتصال آن از طریق بلوتوث باشیم .
                    فناوری کنترل لمسی برای پاسخگویی به تماس و همچنین پخش و توقف موسیقی بر روی گوشی های این هدفون قرار گرفته است . از این
                    هدفون بی سیم برای استفاده از دستیار صوتی نیز میتوان استفاده کرد . باتری به کار رفته در این هدفون بی سیم کربی از نوع لیتیوم پلیمری ست و هر کدام از گوشی ها 30 میلی
                    آمپر ظرفیت دارد . ظرفیت باتری محفظه شارژ این هدفون نیز 200 میلی آمپر است . بازدهی باتری هدفون بی سیم کربی مدل ( CR-T101) هر گوش با
                    توجه به میزان بلندی صدا 2 الی 4ساعت و در حالت استندبای
                    میتواند تا 80ساعت بازدهی موثر داشته باشد . برای شارژ
                    کامل این هدفون یک ساعت و برای شارژ محفظه شارژ
                    نیز 2 ساعت زمان کافیست . نکته قابل توجه این است
                    برای شارژ این محصول باید از کابل مخصوص داخل پک و
                    هد شارژ استاندارد استفاده شود .یکی از قابلیت های
                    بسیار جذاب این کالا امکان کنترل صدا از
                    روی گوشی های دستگاه میباشد . محفظه شارژ
                    این دستگاه حداقل گوشی های آن را شارژ میکند.

                  </p>
                  <div className='inline-flex items-center text-sm lg:text-base text-sky-500 cursor-pointer'>
                    <span>بیشتر</span>
                    <span className='hidden'>بستن</span>
                    <HiMiniChevronLeft className='w-4 lg:w-5 h-4 lg:h-5' />
                  </div>
                </div>

                <div className='divider-border'></div>

                {/* All Features */}
                <div id='product__features-section'>
                  <h1 className='product-info__title'>مشـخصات فـنی</h1>
                  <div className='h-[35rem] overflow-hidden'>
                    <ProductFeatureBoxLarge name={'اقلام همراه هدفون'} status={'کابل شارژ تایپ سی'} />
                    <ProductFeatureBoxLarge name={'منبع تغذیه هدفون'} status={'باطری'} />
                    <ProductFeatureBoxLarge name={'قابلیت‌های هدفون، هدست و هندزفری'} status={'نشانگر LED'} />
                    <ProductFeatureBoxLarge name={'محدوده عملکرد'} status={'۱۰ متر'} />
                    <ProductFeatureBoxLarge name={'نوع گوشی'} status={'دو گوشی'} />
                    <ProductFeatureBoxLarge name={'عمر باتری هدفون در حالت مکالمه'} status={'۲-۴ ساعت'} />
                    <ProductFeatureBoxLarge name={'عمر باتری هدفون در حالت استندبای'} status={'۸۰'} />
                    <ProductFeatureBoxLarge name={'عمر باتری هدفون در حالت پخش موسیقی'} status={'2-3 ساعت'} />
                    <ProductFeatureBoxLarge name={'وزن'} status={'30 گرم'} />
                    <ProductFeatureBoxLarge name={'نسخه بلوتوث'} status={'۵.۳'} />
                    <ProductFeatureBoxLarge name={'جنس بدنه'} status={'پلاستیک'} />
                  </div>
                  <div className='inline-flex items-center mt-8 text-sky-500 cursor-pointer'>
                    <span className='text-sm xl:text-base'>مشاهده بیشتر</span>
                    <span className='hidden'>بستن</span>
                    <HiMiniChevronLeft className='w-5 h-5' />
                  </div>
                </div>

                <div className='divider-border'></div>

                {/* Comments */}
                <div id='product__Comments-section'>
                  <CommentsSection />
                </div>
              </div>

              {/* Left col & Product Purchase Cart */}
              <div className={`sticky ${visible ? 'top-60' : 'top-44'} h-fit w-4/12 xl:w-3/12 bg-white shadow-xl rounded-xl`}>
                {/* Off timer */}
                <div className='flex items-center justify-between flex-col lg:flex-row gap-y-2 py-2 lg:py-4 lg:px-3 w-full text-white bg-custom-navy/85 rounded-t-lg'>
                  <span className='font-MorabbaMedium'>تخفـیف شگفـت انـگـیز</span>
                  <div className='flex h-full gap-2'>
                    <div className='flex-center gap-1'>
                      <span>48</span>:
                      <span>21</span>:
                      <span>04</span>
                    </div>
                    <PiTimerLight className='w-5 h-5' />
                  </div>
                </div>

                {/* Product's Title & Color & Image */}
                <div className='flex-center gap-4 lg:gap-9 px-4 lg:px-7 pt-5 pb-3'>
                  <img className='w-14 h-14 scale-150' src='/images/products/airpods.png' />
                  <div>
                    <h3 className='font-DanaMedium text-sm lg:text-base text-wrap'>هندزفری بلوتوثی کربی مدل - CR-T107</h3>
                    <div className='flex items-center gap-1.5 pt-2'>
                      <div className='w-3 lg:w-4 h-3 lg:h-4 bg-black border-2 border-gray-500 rounded-sm'></div>
                      <span className='lg:font-DanaMedium text-zinc-600 text-xs lg:text-sm'>مشکی</span>
                    </div>
                  </div>
                </div>
                {/* Cart Body */}
                <div className='pb-6 px-5'>
                  {/* Purchase Details */}
                  <div className='py-1 lg:py-3 px-1 lg:px-3 border-y border-dotted border-gray-300'>
                    <div className='flex items-center gap-1.5 mb-2.5 py-1'>
                      <CiBoxes className='w-5 h-5' />
                      <span className='font-DanaMedium text-xs lg:text-sm text-zinc-500 tracking-tight'>موجود در انبار موبولند (ارسال فوری)</span>
                    </div>
                    <div className='flex items-center gap-1.5 py-1'>
                      <BsPatchCheck className='w-4 h-4' />
                      <span className='font-DanaMedium text-xs lg:text-sm text-zinc-500'>۷ روز تضمین بازگشت کالا</span>
                    </div>
                  </div>

                  {/* Produc Price */}
                  <div className='my-2 lg:my-5 px-2 lg:px-4 text-left'>
                    <div className='inline-flex justify-center items-end h-5 w-10 lg:w-11 text-center text-[10px] text-white bg-purple-500 rounded-xl'><span className='text-xs'>33</span>%</div>
                    <div className='flex items-center justify-end gap-x-2 lg:gap-x-4 pt-2 pl-2'>
                      <span className='cart__ex-price'>2,200,000</span>
                      <div className='inline-flex gap-1'>
                        <span className='font-DanaDemiBold text-lg lg:text-xl dark:text-white'>1,500,000</span>
                        <span><svg className='w-3.5 lg:w-4 h-3.5 lg:h-4 dark:text-white'><use href="#toman"></use></svg></span>
                      </div>
                    </div>
                  </div>

                  {/* Cart Add Basket Button  */}
                  <div className='w-full h-10 lg:h-12 font-DanaMedium text-center text-white lg:text-lg leading-10 lg:leading-[48px] bg-custom-navy rounded-lg cursor-pointer'>افزودن به سبد خرید</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Contents For Mobile Size */}
      <div className='block md:hidden'>

        {/* Fixed, Buy Actions Button &  Product Price */}
        <div className='fixed bottom-0 h-fit w-full bg-white shadow-t-lg z-20'>
          {/* Cart Body */}
          <div className='py-4 px-6'>
            {/* Produc Price */}
            <div className='mb-2.5 px-4 text-end'>
              <div className='flex items-center justify-end gap-6 pt-2 pl-2'>
                <div className='inline-flex justify-center items-end ml-3 h-5 w-11 text-center text-[10px] text-white bg-purple-500 rounded-md'><span className='text-xs'>33</span>%</div>
                <span className='cart__ex-price'>2,200,000</span>
                <div className='inline-flex gap-1'>
                  <span className='font-DanaDemiBold text-xl dark:text-white'>1,500,000</span>
                  <span><svg className='w-4 h-4 dark:text-white'><use href="#toman"></use></svg></span>
                </div>
              </div>
            </div>

            {/* Cart Actions  */}
            <div className='w-full h-10 font-DanaMedium text-center text-white leading-10 bg-custom-navy rounded-lg cursor-pointer'>افزودن به سبد خرید</div>
          </div>
        </div>
        {/* //////////////////////////////////////////// */}
        <div className='container'>
          {/* Off timer */}
          <div className='flex items-center justify-between py-3 px-3 w-full text-white bg-custom-navy/85 rounded-t-lg'>
            <span className='font-MorabbaMedium'>تخفـیف شگفـت انـگـیز</span>
            <div className='flex h-full gap-2'>
              <div className='flex-center gap-1 text-sm'>
                <span>48</span>:
                <span>21</span>:
                <span>04</span>
              </div>
              <PiTimerLight className='w-4 h-4' />
            </div>
          </div>

          {/* First & Main Section (Pics, purchase cart, features) */}
          <div className='border border-gray-300 rounded-b-xl'>

            {/* Actions & Product's Photos Col */}
            <div className='my-6'>
              {/* Action Buttons */}
              <div className='flex-center gap-x-6 sm:gap-x-10 mb-2 sm:mb-4'>
                <button className='product__action-button'><GoShareAndroid className='w-5 h-5' /><span className='tooltiptext'>اشتراک گذاری کالا</span></button>
                <button className='product__action-button'><LiaComments className='w-5 h-5' /><span className='tooltiptext'>نظرات کاربران</span></button>
                <button className='product__action-button'><PiBellRingingLight className='w-5 h-5' /><span className='tooltiptext'>اطلاع‌رسانی موبولند</span></button>
                <button className='product__action-button'><TbHeartPlus className='w-5 h-5' /><span className='tooltiptext'>مورد علاقه</span></button>
              </div>
              {/* Product Images  */}
              <div>
                <img className='h-48 mx-auto scale-125' src='/images/products/airpods.png' />
                <div className='flex-center gap-5 mt-2 sm:mt-4'>
                  <img className='product__album-img' src='/images/products/airpod2.png' />
                  <img className='product__album-img' src='/images/products/airpods.png' />
                  <img className='product__album-img' src='/images/products/airpod2.png' />
                </div>
              </div>
            </div>

            {/*  Product Features & Details */}
            <div className='px-3 py-3'>
              {/* Rate & Color & Features Col */}
              <div>
                <h1 className='font-MorabbaBold text-zinc-800 dark:text-white tracking-wide'>
                  هندزفری بلوتوثی کربی مدل - CR-T107
                </h1>

                {/* Product Rating */}
                <div className='inline-flex items-center gap-2 pt-4 pb-2 border-b border-gray-300'>
                  <p className='flex gap-1'>
                    <span><RiStarFill className='h-5 w-5 text-amber-500' /></span>
                    <span className='text-sm dark:text-white'>4.3</span>
                  </p>
                  <a href='#' className='text-zinc-500 dark:text-white/70 hover:text-purple-400 text-xs cursor-pointer'>(از 23 نظر)</a>
                </div>

                {/* Product Colors */}
                <div className='mt-4 pb-4 border-b border-gray-300'>
                  <p className='flex gap-1 pb-1'>
                    <h3 className='text-zinc-600 dark:text-white/90'>رنگ:</h3>
                    <span className='font-DanaDemiBold text-sm text-zinc-800 dark:text-white'>مشکی</span>
                  </p>
                  <div className='flex items-center gap-2'>
                    <div className='product__color-Item bg-black'></div>
                    <div className='product__color-Item bg-pink-400'></div>
                    <div className='product__color-Item bg-white'></div>
                    <div className='product__color-Item bg-sky-700'></div>
                  </div>
                </div>

                {/* Product's Features */}
                <div className='mt-6'>
                  <h3 className='font-DanaDemiBold text-zinc-800 pb-6 dark:text-white'>ویژگی‌ها</h3>
                  <div className='grid grid-cols-2 gap-x-5 gap-y-6 max-h-52 overflow-hidden'>
                    <ProductFeatureBox name={'قابلیت نویز کنسلینگ'} status={'نویز کنسلینگ میکروفون'} />
                    <ProductFeatureBox name={'نوع گوشی'} status={'دو گوشی'} />
                    <ProductFeatureBox name={'درگاه‌های ارتباطی'} status={'بلوتوث'} />
                    <ProductFeatureBox name={'نوع اتصال'} status={'بی‌سیم'} />
                    <ProductFeatureBox name={'رابط‌ها'} status={'Bluetooth'} />
                    <ProductFeatureBox name={'قابلیت‌های مقاومتی'} status={'مقاومت در برابر رطوبت و عرق'} />
                  </div>
                  <p className='pt-4 text-center text-white'>
                    <a href='#' className='inline-flex py-2 px-4 text-sm bg-slate-500 hover:bg-slate-600/70 rounded-lg'>
                      مشاهده همه ویژگی‌ها
                      <HiMiniChevronLeft className='h-4 w-4' />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section (All features, description, comments) */}
          <div className='mt-10'>
            {/* Header Of This Section */}
            <div className='sticky top-0 z-10'>
              <ul className='flex justify-between px-10 border-b-2 border-gray-400 rounded-t-md bg-slate-300'>
                <li className='productInfo__menu-title'>
                  <a href='#product__description-section'>معرفی</a>
                  <div className='productInfo__underline-border'></div>
                </li>
                <li className='productInfo__menu-title'>
                  <a href='#product__features-section'>مشخصات</a>
                  <div className='productInfo__underline-border opacity-0'></div>
                </li>
                <li className='productInfo__menu-title'>
                  <a href='#product__comments-section'>نظرات کاربران</a>
                  <div className='productInfo__underline-border opacity-0'></div>
                </li>
              </ul>
            </div>
            {/* Body & Contents of Section */}
            <div className='w-full pt-8'>
              {/* Description */}
              <div id='product__description-section' className='px-2.5 mb-7'>
                <h1 className='product-info__title'>معرفی</h1>
                <p className='text-sm lg:text-base text-zinc-500 dark:text-white leading-8 lg:leading-9 line-clamp-3'>
                  محصول جدید از کمپانی کربی ( CRBE ) با نام ( CR-T101 ) معرفی شد . این محصول از سری هدفون های بی سیم کمپانی کربی ( CRBE ) است که با توجه به امکانات و طراحی مینیمال خود
                  مورد توجه قرار گرفت . هدفون بی سیم کربی مدل (CR-T101 ) در کنار کیفیت ساخت فوق‌العاده
                  بالای خود، به بلوتوث نسخه 5.3 مجهز شده است تا شاهد سرعت بسیار بالای آن در زمینه‌ی برقراری اتصال آن از طریق بلوتوث باشیم .
                  فناوری کنترل لمسی برای پاسخگویی به تماس و همچنین پخش و توقف موسیقی بر روی گوشی های این هدفون قرار گرفته است . از این
                  هدفون بی سیم برای استفاده از دستیار صوتی نیز میتوان استفاده کرد . باتری به کار رفته در این هدفون بی سیم کربی از نوع لیتیوم پلیمری ست و هر کدام از گوشی ها 30 میلی
                  آمپر ظرفیت دارد . ظرفیت باتری محفظه شارژ این هدفون نیز 200 میلی آمپر است . بازدهی باتری هدفون بی سیم کربی مدل ( CR-T101) هر گوش با
                  توجه به میزان بلندی صدا 2 الی 4ساعت و در حالت استندبای
                  میتواند تا 80ساعت بازدهی موثر داشته باشد . برای شارژ
                  کامل این هدفون یک ساعت و برای شارژ محفظه شارژ
                  نیز 2 ساعت زمان کافیست . نکته قابل توجه این است
                  برای شارژ این محصول باید از کابل مخصوص داخل پک و
                  هد شارژ استاندارد استفاده شود .یکی از قابلیت های
                  بسیار جذاب این کالا امکان کنترل صدا از
                  روی گوشی های دستگاه میباشد . محفظه شارژ
                  این دستگاه حداقل گوشی های آن را شارژ میکند.

                </p>
                <div className='inline-flex items-center text-sm lg:text-base text-sky-500 cursor-pointer'>
                  <span>بیشتر</span>
                  <span className='hidden'>بستن</span>
                  <HiMiniChevronLeft className='w-4 lg:w-5 h-4 lg:h-5' />
                </div>
              </div>

              <div className='divider-border'></div>

              {/* All Features */}
              <div id='product__features-section'>
                <h1 className='product-info__title'>مشـخصات فـنی</h1>
                <div className='h-[35rem] overflow-hidden'>
                  <ProductFeatureBoxLarge name={'اقلام همراه هدفون'} status={'کابل شارژ تایپ سی'} />
                  <ProductFeatureBoxLarge name={'منبع تغذیه هدفون'} status={'باطری'} />
                  <ProductFeatureBoxLarge name={'قابلیت‌های هدفون، هدست و هندزفری'} status={'نشانگر LED'} />
                  <ProductFeatureBoxLarge name={'محدوده عملکرد'} status={'۱۰ متر'} />
                  <ProductFeatureBoxLarge name={'نوع گوشی'} status={'دو گوشی'} />
                  <ProductFeatureBoxLarge name={'عمر باتری هدفون در حالت مکالمه'} status={'۲-۴ ساعت'} />
                  <ProductFeatureBoxLarge name={'عمر باتری هدفون در حالت استندبای'} status={'۸۰'} />
                  <ProductFeatureBoxLarge name={'عمر باتری هدفون در حالت پخش موسیقی'} status={'2-3 ساعت'} />
                  <ProductFeatureBoxLarge name={'وزن'} status={'30 گرم'} />
                  <ProductFeatureBoxLarge name={'نسخه بلوتوث'} status={'۵.۳'} />
                  <ProductFeatureBoxLarge name={'جنس بدنه'} status={'پلاستیک'} />
                </div>
                <div className='inline-flex items-center mt-8 text-sky-500 cursor-pointer'>
                  <span className='text-sm xl:text-base'>مشاهده بیشتر</span>
                  <span className='hidden'>بستن</span>
                  <HiMiniChevronLeft className='w-5 h-5' />
                </div>
              </div>

              <div className='divider-border'></div>

              {/* Comments */}
              <div id='product__Comments-section'>
                <CommentsSection />
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer marginClasses={'mt-32'}/>
    </div>
  )
}
