import React, { useState } from 'react'
import Editor from '../../../components/Forms/Editor'
import { MdOutlineVisibility } from 'react-icons/md'
import Swal from 'sweetalert2';

export default function Articles() {
  const [articleBody, setArticleBody] = useState('')

  // Show Article Infos 
  const showArticleInfos = (article) => {
    Swal.fire({
      title: `اطلاعات ${article.name}`,
      html: `
            <p><strong>نام کاربری:</strong> ${article.articlename}</p>
            <p><strong>شماره:</strong> ${article.phone}</p>
            <p><strong>نقش:</strong> ${article.role}</p>
          `,
      icon: 'info',
      confirmButtonText: 'باشه',
    });
  };

  return (
    <div>
      {/* Top Row & Add Article Section */}
      <div>
        <h1 className='p-admin__title'>افزودن مقـاله</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-10'>
          <div>
            <label>عنوان مقاله</label>
            <input className='p-admin__input' type='text' placeholder='لطفا عنوان مقاله را وارد کنید...' />
          </div>
          <div>
            <label>نویسنده مقاله</label>
            <input className='p-admin__input' type='text' placeholder='لطفا نویسنده مقاله را وارد کنید...' />
          </div>
          <div>
            <label>نام کوتاه لینک</label>
            <input className='p-admin__input' type='text' placeholder='لطفا نام کوتاه لینک را وارد کنید...' />
          </div>
          <div>
            <label>کاور مقاله</label>
            <input className='text-xs md:text-sm tracking-tighter lg:text-base' type='file' />
          </div>
        </div>
        <div className='mt-7'>
          <div className='hidden xs:block'>
            <label>توضیحات مقاله</label>
            <Editor value={articleBody} setValue={setArticleBody} />
          </div>
        </div>
        <div className='flex-center gap-5'>
          <div className='w-[50%] sm:w-[25%] mt-5 py-3 text-center text-white text-sm sm:text-base sm:tracking-wide bg-indigo-800 rounded-md cursor-pointer'>انتشار</div>
          <div className='w-[50%] sm:w-[25%] mt-5 py-3 text-center text-white text-sm sm:text-base sm:tracking-wide bg-custom-navy/90 rounded-md cursor-pointer'>پیش نویس</div>
        </div>
      </div>

      {/* Bottom Row & Articles Section */}
      <div className='p-admin__box mt-20'>
        <h1 className='p-admin__box-title'>لیست مقاله ها</h1>
        <table className='w-full text-sm lg:text-base'>
          <thead className='bg-custom-navy/15'>
            <tr>
              <th className='hidden xs:table-cell'>شناسه</th>
              <th>عنوان</th>
              <th className='hidden custom-sc:table-cell'>نویسنده</th>
              <th className='hidden custom-sc:table-cell'>انتشار</th>
              <th className='table-cell md:hidden'>مشاهده</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='hidden xs:table-cell'>1</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>2</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>3</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>4</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>5</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>6</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>7</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>8</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>9</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>10</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td className='hidden xs:table-cell'>11</td>
              <td>راهنمای خرید هندزفری سیمی</td>
              <td className='hidden custom-sc:table-cell'>سینا کریمی</td>
              <td className='hidden custom-sc:table-cell'>1403/5/31</td>
              <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showArticleInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
              <td>
                <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
