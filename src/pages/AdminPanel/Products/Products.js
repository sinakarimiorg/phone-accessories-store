import React from 'react'
import Swal from 'sweetalert2';
import { MdOutlineVisibility } from 'react-icons/md'

import './Products.css'

export default function Products() {

    // Show Product Infos 
    const showProductInfos = (product) => {
      Swal.fire({
        title: `اطلاعات ${product.name}`,
        html: `
          <p><strong>نام کاربری:</strong> ${product.productname}</p>
          <p><strong>شماره:</strong> ${product.phone}</p>
          <p><strong>نقش:</strong> ${product.role}</p>
        `,
        icon: 'info',
        confirmButtonText: 'باشه',
      });
    };
  return (
    <div>
      {/* Top Row & Add Product Section */}
      <div>
        <h1 className='p-admin__title'>افزودن کـالا</h1>
        <div className='grid grid-cols-1 xs:grid-cols-2 gap-y-7 gap-x-6 md:gap-x-10'>
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
            <textarea className='w-full h-20 lg:h-24 px-1 custom-sc:px-3 py-3 text-[10px] md:text-xs lg:text-xs custom-sc:text-sm tracking-tighter focus:outline-none rounded-md' type='text' placeholder='لطفا توضیحات کالا را وارد کنید...' />
          </div>
          <div>
            <label>کاور کالا</label>
            <input className='text-xs custom-sc:text-sm tracking-tighter lg:text-base' type='file' placeholder='لطفا کاور کالا را وارد کنید...' />
          </div>
        </div>
        <div className='w-[65%] mx-auto mt-5 py-3 text-center text-white tracking-wide bg-custom-navy/90 rounded-md cursor-pointer'>افـزودن</div>
      </div>

      {/* Bottom Row & Products Section */}
      <div className='p-admin__box mt-20'>
      <h1 className='p-admin__box-title'>لیست کـالا‌ها</h1>
      <table className='w-full text-sm lg:text-base'>
              <thead className='bg-custom-navy/15'>
                <tr>
                  <th className='hidden xs:table-cell'>شناسه</th>
                  <th className='hidden xl:table-cell'>دسته بندی</th>
                  <th>عنوان</th>
                  <th className='hidden md:table-cell'>مبلغ</th>
                  <th className='hidden custom-sc:table-cell'>موجودی</th>
                  <th className='table-cell md:hidden'>مشاهده</th>
                  <th>ویرایش</th>
                  <th>حذف</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='hidden xs:table-cell'>1</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>2</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000,123</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>3</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>4</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>5</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>6</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>7</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>8</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>9</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>10</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md'>حذف</button>
                  </td>
                </tr>
                <tr>
                  <td className='hidden xs:table-cell'>11</td>
                  <td>کاور چرمی سامسونگ s23 fe - همراه با درب محافظ</td>
                  <td className='hidden xl:table-cell'>کاور و قاب</td>
                  <td className='hidden md:table-cell'>450,000</td>
                  <td className='hidden custom-sc:table-cell'>123</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
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
