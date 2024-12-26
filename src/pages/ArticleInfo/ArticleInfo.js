import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { PiBookOpenText } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FiEye } from "react-icons/fi";
import { LiaUserEditSolid } from "react-icons/lia";
import ArticleSuggestBox from '../../components/ArticleSuggestBox/ArticleSuggestBox';

import './ArticleInfo.css'

export default function ArticleInfo() {
    return (
        <div>
            <Header />
            <BreadCrumb
                links={[
                    { id: 1, title: 'فروشگاه موبولـند', to: '/' },
                    { id: 2, title: 'همه مقـالات', to: '/all-articles' },
                    { id: 3, title: 'کسب درآمد از بازی', to: '/article-info' },
                ]} />
            <div className='container'>
                <div className='flex gap-4'>
                    {/* Right Col & Main Contents */}
                    <div id='article-content' className='w-10/12 bg-white shadow-xl rounded-lg overflow-hidden'>
                        {/* Header Of Article */}
                        <div>
                            {/* Header Of Article */}
                            <div className='relative w-full h-96 bg-blue-950'>
                                {/* Article Name */}
                                <div className='flex gap-2 p-6'>
                                    <PiBookOpenText className='w-6 h-6 text-white' />
                                    <h1 className='font-DanaDemiBold text-xl text-white'>راهنمای خرید هندزفری سیمی</h1>
                                </div>
                                {/* Article Details */}
                                <div className='flex items-center gap-5 pr-6 text-sm text-white/80'>
                                    <div className='flex-center gap-2'>
                                        <SlCalender />
                                        <span>تاریخ انتشار: </span>
                                        <span>1403/10/6</span>
                                    </div>
                                    <div className='flex-center gap-2'>
                                        <LiaUserEditSolid />
                                        <span>نویسنده:</span>
                                        <span>سینا کریمی</span>
                                    </div>
                                    <div className='flex-center gap-2'>
                                        <FiEye />
                                        <span>تعداد بازدید:</span>
                                        <span>33</span>
                                    </div>
                                </div>
                                <img className='absolute right-[363px] top-28 w-[33rem] h-[30rem] border-4 border-white rounded-xl' src='/images/articles/headphone.jpg' />
                            </div>
                        </div>
                        {/* Content of Article */}
                        <div className='mt-56 pb-10 px-16'>
                            <h2>هندزفری سیمی وسیله ای پرکاربرد و ضروری</h2>
                            <p>
                                هندزفری‌ سیمی، ابزاری است که به کاربرا اجازه می‌دهد تا بدون ایجاد مزاحمت برای دیگران موسیقی گوش دهند، به تماشای فیلم بپردازند
                                و یا به تماس هایشان پاسخ دهند. در حال حاضر با وجود پیشرفت‌های فناوری و ارتقاء هندزفری‌های بی‌سیم، هنوز هندزفری‌های سیمی جای خود را در بازار حفظ کرده‌اند.
                                این مقاله به بررسی انواع هندزفری‌های سیمی، مزایا و معایب آنها، نکاتی برای انتخاب بهتر و راهنمایی برای استفاده بهینه از آنها می‌پردازد.
                            </p>
                            <h2>انواع هندزفری سیمی</h2>
                            <p>
                                مدل های مختلف هندزفری سیمی بر اساس کانکتور و طراحی گوشی ها با بکدگیر متفاوت اند. نوع کانکتور ها در هندزفری سیمی می تواند به صورت جت 3.5 متری متری و یا کانکتور تایپ سی باشد. توجه داشته باشید که هندزفری سیمی تایپ سی فقط در گوشی های موبایل که دارای کانکتور تایپ سی هستند قابل استفاده هستند اما هندزفری سیمی با جک 3.5 میلی متری به دلیل اینکه بیشتر دستگاه ها از پورت جک 3.5 میلی متری پشتیبانی می کنند،  در سایر دستگاه ها نیز قابل استفاده هستند. تفاوت دیگر هندزفری سیمی در نوع طراحی گوشی های آن ها است. مدل های گیمینگ دارای گوشی هایی با طراحی جذاب تر و متقاوت تری نسبت به مدل های ساده تر هستند. مدل های ورزشی نیز به گونه ای طراحی شده اند که حین حرکت و یا انجام حرکات ورزشی از گوش خارج نشوند و همچنین در برابر نفوذ عرق و رطوبت مقاوم باشند.

                                بنابراین در خرید هندزفری سیمی به این نکته توجه داشته باشید که در چه دستگاه و یا دستگاه هایی می خواهید از هندزفری سمی استفاده کنید. علاوه بر این موارد یکی دیگر از تفاوت هایی که هندزفری سیمی دارد، در نوع گوشی هایش است. مدل هایی که به صورت تو گوشی و سطحی طراحی شده اند نیز باعث ایجاد تمایز در مدل های هندزفری سمی شده اند.
                            </p>
                            <h3>1. هندزفری‌های تو گوشی (In-Ear)</h3>
                            <p>
                                این نوع هندزفری‌ها به صورت مستقیم داخل گوش قرار می‌گیرند و صدای خارجی را به خوبی حذف می‌کنند. در برخی مدل ها گوشی های هندزفری به صورت زاویه دار طراحی شده اند که باعث می شود به خوبی وارد گوش شوند. این مدل از هندزفری سیمی مناسب استفاده در محیط‌های پر سر و صدا و حهمچنین
                                مناسب استفاده در زمان انجام حرکات ورزشی است. اگر جزئیات صدا برایتان مهم است این مدل از هندزفری سیمی می تواند جزئیات بیشتری را به گوشتان برساند.
                            </p>
                            <img src='/images/article-info-images/article-img-headphone.jpg' />
                            <h3>2. هندزفری‌ سیمی سطحی (On-Ear)</h3>
                            <p>
                                این نوع هندزفری‌ها بر خلاف مدل قبلی که داخل گوش قرار میگرفند، بر روی گوش قرار می‌گیرند و به صورت کامل داخل گوش نمی روند. این مدل، راحتی بیشتری نسبت به مدل قبلی دارند و برای استفاده ی طولاند مدت مناسب ترند. ممکن است به دلیل اینکه به صورت کامل داخلی گوش قرار نمی گیرند، صدای بیرون ره داخل گوش برسد و یا اینکه جزئیات موسیقی به خوبی به گوش نرسید.
                            </p>
                            <img src='/images/article-info-images/article-img-headphone2.jpg' />
                            <h2>مزایا و معایب استفاده از هندزفری سیمی</h2>
                            <p>
                                کیفیت صدای بالا: بسیاری از هندزفری‌های سیمی کیفیت صدای عالی ارائه می‌دهند، به ویژه در طبقه بالای بازار.
                                عدم نیاز به شارژ: یکی از مزایای بزرگ هندزفری‌های سیمی، عدم نیاز به شارژ مداوم آنهاست.
                                قابلیت استفاده با تمامی دستگاه‌ها: هندزفری‌های سیمی می‌توانند با تمامی دستگاه‌های دارای جک ۳.۵ میلی‌متری سازگار باشند.
                                معایب استفاده از هندزفری سیمی:
                                ایجاد محدودیت در حرکت: وجود سیم می‌تواند محدودیتی برای حرکت ایجد کند و به ویژه در فعالیت‌های ورزشی که دارای تحرک زیادی هستند.
                                خرابی سیم در بلند مدت: با توجه به اینکه سیم هندزفری در طول استفاده ممکن است تکان های زیادی بخورد، احتمال پاره شدن و یا خرابی در اثر برخورد با یک سطح تیز در این محصول زیاد می شود.
                            </p>
                        </div>
                    </div>

                    {/* Left Col & Suggestions */}
                    <div className='w-2/12 py-8'>
                    <h1 className='inline-block pb-1 pl-1 mr-5 font-DanaMedium text-xl border-b-4 border-purple-custom rounded-md'>پیشنهادی‌ها</h1>
                    <div className=''>
                        <ArticleSuggestBox shortName={'earn-from-game'} img={'/images/articles/game-article.jpg'} title={'کسب درآمد از بازی!'} publishDate={'1404/9/4'}/>
                        <ArticleSuggestBox shortName={'best-phone'} img={'/images/articles/phone.jpg'} title={'بهترین گوشی تا پنج میلیون'} publishDate={'1404/4/21'}/>
                        <ArticleSuggestBox shortName={'how-buy-speaker'} img={'/images/articles/speaker.jpg'} title={'راهنمای خرید اسپیکر بلوتوث قابل حمل '} publishDate={'1403/2/28'}/>
                        <ArticleSuggestBox shortName={'how-buy-headphon'} img={'/images/articles/headphone.jpg'} title={'راهنمای خرید هندزفری سیمی (خلاصه، مهم و کاربردی)'} publishDate={'1403/10/6'}/>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
