import React from 'react'

export default function Users() {
  return (
    <div>
        <h1 className='p-admin__title'>لیست کـاربران</h1>
      <div className='p-admin__box py-7'>
        <table className='w-full'>
          <thead className='bg-custom-navy/15'>
            <tr>
              <th>شناسه</th>
              <th>نام و نام‌خانوادگی</th>
              <th>نام کاربری</th>
              <th>شماره</th>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>تغییر سطح</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>سینا کریمی</td>
              <td>sinakarimiorg</td>
              <td>09144896417</td>
              <td>karimisinaofficial@gmail.com</td>
              <td>مدیر</td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-green-700 rounded-md'>تغییر به کاربر عادی</button>
              </td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-red-500 rounded-md'>حذف</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-700 rounded-md'>بن</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>سینا کریمی</td>
              <td>sinakarimiorg</td>
              <td>09144896417</td>
              <td>karimisinaofficial@gmail.com</td>
              <td></td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>تغییر به مدیر</button>
              </td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-red-500 rounded-md'>حذف</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-700 rounded-md'>بن</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>سینا کریمی</td>
              <td>sinakarimiorg</td>
              <td>09144896417</td>
              <td>karimisinaofficial@gmail.com</td>
              <td></td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>تغییر به مدیر</button>
              </td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-red-500 rounded-md'>حذف</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-700 rounded-md'>بن</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>سینا کریمی</td>
              <td>sinakarimiorg</td>
              <td>09144896417</td>
              <td>karimisinaofficial@gmail.com</td>
              <td></td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>تغییر به مدیر</button>
              </td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-red-500 rounded-md'>حذف</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-700 rounded-md'>بن</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>سینا کریمی</td>
              <td>sinakarimiorg</td>
              <td>09144896417</td>
              <td>karimisinaofficial@gmail.com</td>
              <td></td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>تغییر به مدیر</button>
              </td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-red-500 rounded-md'>حذف</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-700 rounded-md'>بن</button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>سینا کریمی</td>
              <td>sinakarimiorg</td>
              <td>09144896417</td>
              <td>karimisinaofficial@gmail.com</td>
              <td></td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>تغییر به مدیر</button>
              </td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-red-500 rounded-md'>حذف</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-700 rounded-md'>بن</button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>سینا کریمی</td>
              <td>sinakarimiorg</td>
              <td>09144896417</td>
              <td>karimisinaofficial@gmail.com</td>
              <td></td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-custom-navy/90 rounded-md'>تغییر به مدیر</button>
              </td>
              <td>
                <button className='px-3 py-1.5 text-sm text-white bg-red-500 rounded-md'>حذف</button>
              </td>
              <td>
                <button className='px-3.5 py-1.5 text-sm text-white bg-red-700 rounded-md'>بن</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
