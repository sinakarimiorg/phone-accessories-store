import React from 'react'

import './Products.css'

export default function Products() {
  return (
    <div>
      {/* Top Row & Add Product Section */}
      <div>
        <h1 className='p-admin__title'>افزودن کـالا</h1>
        <div className='grid grid-cols-2 gap-y-7 gap-x-10'>
          <div>
            <label>نام کالا</label>
            <input className='p-admin__input' type='text' placeholder='لطفا نام کالا را وارد کنید...' />
          </div>
          <div>
            <label>قیمت کالا</label>
            <input className='p-admin__input' type='text' placeholder='لطفا قیمت کالا را وارد کنید...' />
          </div>
          <div>
            <label>نام کوتاه لینک</label>
            <input className='p-admin__input' type='text' placeholder='لطفا نام کوتاه لینک را وارد کنید...' />
          </div>
          <div>
            <label>تعداد موجودی</label>
            <input className='p-admin__input' type='text' placeholder='لطفا تعداد موجودی کالا را وارد کنید...' />
          </div>
          <div>
            <label>توضیحات کالا</label>
            <textarea className='w-full h-24 px-3 py-3 text-[10px] md:text-xs lg:text-sm focus:outline-none rounded-md' type='text' placeholder='لطفا توضیحات کالا را وارد کنید...' />
          </div>
          <div>
            <label>کاور کالا</label>
            <input className='' type='file' placeholder='لطفا کاور کالا را وارد کنید...' />
          </div>
        </div>
        <div className='w-[65%] mx-auto mt-5 py-3 text-center text-white tracking-wide bg-custom-navy/90 rounded-md'>افـزودن</div>
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
