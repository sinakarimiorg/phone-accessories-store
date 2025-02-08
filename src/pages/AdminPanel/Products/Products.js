import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import Swal from 'sweetalert2';
import { MdOutlineVisibility } from 'react-icons/md'

import './Products.css'

export default function Products() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    fetch('https://moboland-react-8cec2-default-rtdb.firebaseio.com/products.json')
      .then(res => res.json())
      .then(productsData => {
        const productArray = Object.entries(productsData).map(([id, ProductData]) => ({
          id,
          ...ProductData
        }));
        setAllProducts(productArray)
      })
  }

  // Add New Product 
  const addNewProduct = (values) => {
    const newProductInfos = {
      name: values.name,
      price: values.price,
      link: values.link,
      count: values.count,
      desc: values.desc,
      cover: values.cover,
    }
    fetch('https://moboland-react-8cec2-default-rtdb.firebaseio.com/products.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProductInfos)
    }).then(res => {
      if (res.ok) {
        Swal.fire({
          title: 'محصول جدید با موفقیت ثبت شد.',
          icon: 'success',
          confirmButtonText: 'باشه',
          confirmButtonColor: "#9545ED",
        }).then(() => {
          getAllProducts()
        })
      }
    })
  }

  // Remove Product 
    const removeProduct = (product) => {
      const productId = product.id
      Swal.fire({
        title: "آیا از حذف این محصول مطمئن‌اید؟",
        text: "در صورت حذف محصول بعدا امکان بازگردانی وجود ندارد!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#9545ED",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله، مطمئنم!",
        cancelButtonText: 'لغو کردن!'
      }).then(result => {
        if (result.isConfirmed) {
          fetch(`https://moboland-react-8cec2-default-rtdb.firebaseio.com/products/${productId}.json`, {
            method: 'DELETE',
          }).then(res => {
            console.log(res);
            getAllProducts()
            Swal.fire({
              title: "محصول با موفقیت حذف شد!",
              icon: "success",
              confirmButtonColor: "#9545ED",
              confirmButtonText: 'باشه'
            })
          }).catch(() => {
            Swal.fire({
              title: "عملیات با شکست مواجه شد!",
              icon: "error",
              confirmButtonColor: "#9545ED",
              confirmButtonText: 'باشه'
            })
          })
        }
      })
    }

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
        <Formik
          initialValues={{ name: "", price: "", link: "", count: "", desc: "", cover: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false)
            }, 3000)
            addNewProduct(values)
            values.name = ''
            values.price = ''
            values.link = ''
            values.count = ''
            values.desc = ''
            values.cover = ''
            
          }}
          validate={(values) => {
            const errors = {}

            if (values.name === '') {
              errors.name = "وارد کردن نام اجباری می‌باشد";
            } else if (values.name.length < 4) {
              errors.name = 'مقدار وارد شده حداقل باید چهار کاراکتر باشد'
            }

            if (values.price === '') {
              errors.price = "وارد کردن قیمت اجباری می‌باشد";
            } else if (values.price.length < 4) {
              errors.price = 'مقدار وارد شده حداقل باید چهار کاراکتر باشد'
            }

            if (values.link === '') {
              errors.link = "وارد کردن نام کوتاه لینک اجباری می‌باشد";
            } else if (values.link.length < 4) {
              errors.link = 'مقدار وارد شده حداقل باید چهار کاراکتر باشد'
            } else if (values.link.length > 20) {
              errors.link = 'مقدار وارد شده حداکثر باید 20 کاراکتر باشد'
            }

            if (values.count === '') {
              errors.count = "وارد کردن تعداد موجودی اجباری می‌باشد";
            }

            if (values.desc === '') {
              errors.desc = "وارد کردن توضیحات اجباری می‌باشد";
            } else if (values.desc.length < 4) {
              errors.desc = 'مقدار وارد شده حداقل باید چهار کاراکتر باشد'
            }

            if (values.cover === '') {
              errors.cover = "وارد کردن آدرس کاور اجباری می‌باشد";
            }
            return errors
          }}
        >
          {({ isSubmitting }) => (
            <Form className='grid grid-cols-1 xs:grid-cols-2 gap-y-7 gap-x-6 md:gap-x-10'>
              <div>
                <h1>نام کالا</h1>
                <Field
                  className='p-admin__input'
                  type='text'
                  name='name'
                  placeholder='لطفا نام کالا را وارد کنید...' />
                <ErrorMessage name='name'>{(msg) => <span className='text-xs text-red-500'>{msg}</span>}</ErrorMessage>
              </div>
              <div>
                <h1>قیمت کالا</h1>
                <Field
                  className='p-admin__input'
                  type='number'
                  name='price'
                  placeholder='لطفا قیمت کالا را وارد کنید...'
                />
                <ErrorMessage name='price'>{(msg) => <span className='text-xs text-red-500'>{msg}</span>}</ErrorMessage>
              </div>
              <div>
                <h1>نام کوتاه لینک</h1>
                <Field
                  className='p-admin__input'
                  type='text'
                  name='link'
                  placeholder='لطفا نام کوتاه لینک را وارد کنید...'
                />
                <ErrorMessage name='link'>{(msg) => <span className='text-xs text-red-500'>{msg}</span>}</ErrorMessage>
              </div>
              <div>
                <h1>تعداد موجودی</h1>
                <Field
                  className='p-admin__input'
                  type='number'
                  name='count'
                  placeholder='لطفا تعداد موجودی کالا را وارد کنید...'
                />
                <ErrorMessage name='count'>{(msg) => <span className='text-xs text-red-500'>{msg}</span>}</ErrorMessage>
              </div>
              <div>
                <h1>توضیحات کالا</h1>
                <Field
                  className='p-admin__input pt-3'
                  as='textarea'
                  name='desc'
                  placeholder='لطفا توضیحات کالا را وارد کنید...'
                />
                <ErrorMessage name='desc'>{(msg) => <span className='text-xs text-red-500'>{msg}</span>}</ErrorMessage>
              </div>
              <div>
                <h1>کاور کالا</h1>
                <Field
                  className='p-admin__input'
                  type='file'
                  name='cover'
                  placeholder='لطفا کاور کالا را وارد کنید...'
                />
                <ErrorMessage name='cover'>{(msg) => <span className='text-xs text-red-500'>{msg}</span>}</ErrorMessage>
              </div>
              <div className='col-span-2 w-[65%] mx-auto'>
                <button
                  type='submit'
                  className={isSubmitting ? 'addProduct-invalid-form-btn' : 'addProduct-form-btn'}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'بررسی اطلاعات...' : 'افزودن'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Bottom Row & Products Section */}
      <div className='p-admin__box mt-20'>
        <h1 className='p-admin__box-title'>لیست کـالا‌ها</h1>
        <table className='w-full text-sm lg:text-base'>
          <thead className='bg-custom-navy/15'>
            <tr>
              <th className='hidden xs:table-cell'>شناسه</th>
              <th className='hidden xl:table-cell'>لینک</th>
              <th>عنوان</th>
              <th className='hidden md:table-cell'>مبلغ</th>
              <th className='hidden custom-sc:table-cell'>موجودی</th>
              <th className='table-cell md:hidden'>مشاهده</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>

          <tbody>
            {
              allProducts.map((product, index) => (
                <tr key={index}>
                  <td className='hidden xs:table-cell'>{index + 1}</td>
                  <td className='hidden xs:table-cell'>{product.name}</td>
                  <td className='hidden xl:table-cell'>{product.link}</td>
                  <td className='hidden md:table-cell'>{product.price.toLocaleString()}</td>
                  <td className='hidden custom-sc:table-cell'>{product.count}</td>
                  <td className='table-cell md:hidden'><MdOutlineVisibility onClick={() => showProductInfos()} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                  <td>
                    <button className='px-1 custom-sc:px-3 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-custom-navy/90 rounded-md'>ویرایش</button>
                  </td>
                  <td>
                    <button className='px-1 custom-sc:px-3.5 py-1.5 text-xs custom-sc:text-sm tracking-tighter text-white bg-red-600 rounded-md' onClick={() => removeProduct(product)}>حذف</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}
