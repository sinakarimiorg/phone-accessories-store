import React, { useState } from 'react'
import Editor from '../../../components/Forms/Editor'

export default function Articles() {
  const [articleBody, setArticleBody] = useState('')
  return (
    <div>
      {/* Top Row & Add Product Section */}
      <div>
        <h1 className='p-admin__title'>افزودن مقـاله</h1>
        <div className='grid grid-cols-2 gap-y-7 gap-x-10'>
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
            <input className='' type='file' placeholder='لطفا کاور مقاله را وارد کنید...' />
          </div>
        </div>
        <div className='mt-7'>
          <div>
            <label>توضیحات مقاله</label>
            <Editor value={articleBody} setValue={setArticleBody} />
          </div>
        </div>
        <div className='flex-center gap-5'>
          <div className='w-[25%] mt-5 py-3 text-center text-white tracking-wide bg-indigo-800 rounded-md cursor-pointer'>انتشار</div>
          <div className='w-[25%] mt-5 py-3 text-center text-white tracking-wide bg-custom-navy/90 rounded-md cursor-pointer'>پیش نویس</div>
        </div>
      </div>

      {/* Bottom Row & Products Section */}
      <div className='p-admin__box mt-20'>
        <h1 className='p-admin__box-title'>لیست کـالا‌ها</h1>
        <table className='w-full'>
          <thead className='bg-custom-navy/15'>
            <tr>
              <th>شناسه</th>
              <th>دسته بندی</th>
              <th>عنوان</th>
              <th>مبلغ</th>
              <th>موجودی</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000,123</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
              <td>کاور و قاب</td>
              <td>450,000</td>
              <td>123</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-600 rounded-md'>حذف</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
