import React from 'react'
import Chart from '../../../components/AdminPanel/Chart/Chart';
import { IoArrowUp } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";
import { xAxisData } from '../../../Datas';
import { MdOutlineVisibility } from "react-icons/md";

import './Index.css'

export default function Index() {
  return (
      <div>
        <div className='mb-8'>
          <span className='pl-1 font-DanaMedium text-zinc-500'>خوش آمدید،</span>
          <span className='font font-DanaDemiBold text-lg'>سینا کریمی</span>
        </div>
        {/* Top Row & Information Boxes */}
        <div className='flex gap-10'>
          {/* Info Box */}
          <div className='flex-1 p-admin__box'>
            <h1 className='font-DanaMedium text-2xl'>درآمد:</h1>
            <div className='flex items-center justify-end gap-8'>
              <span className='font-DanaDemiBold text-2xl'>36,000,000</span>
              <div className='flex items-center gap-1.5 py-4'>
                <span>3.2 -</span>
                <span><IoArrowDown className='w-5 h-5 text-red-500' /></span>
              </div>
            </div>
            <p className='text-sm text-zinc-500'>نسبت به ماه گذشته</p>
          </div>
          {/* Info Box */}
          <div className='flex-1 p-admin__box'>
            <h1 className='font-DanaMedium text-2xl'>فروش:</h1>
            <div className='flex items-center justify-end gap-8'>
              <span className='font-DanaDemiBold text-2xl'>138,000,000</span>
              <div className='flex items-center gap-1.5 py-4'>
                <span>2.2 -</span>
                <span><IoArrowDown className='w-5 h-5 text-red-500' /></span>
              </div>
            </div>
            <p className='text-sm text-zinc-500'>نسبت به ماه گذشته</p>
          </div>
          {/* Info Box */}
          <div className='flex-1 p-admin__box'>
            <h1 className='font-DanaMedium text-2xl'>هزینه:</h1>
            <div className='flex items-center justify-end gap-8'>
              <span className='font-DanaDemiBold text-2xl'>101,000,000</span>
              <div className='flex items-center gap-1.5 py-4'>
                <span>5.1 +</span>
                <span><IoArrowUp className='w-5 h-5 text-green-500' /></span>
              </div>
            </div>
            <p className='text-sm text-zinc-500'>نسبت به ماه گذشته</p>
          </div>

        </div>

        {/* Middle Row */}
        <div className='my-10 p-5 bg-white rounded-md shadow-lg'>
          <h1 className='box-title'>نمودار فروش ماه</h1>
          <Chart grid data={xAxisData} dataKey="Sale" />
        </div>

        {/* Bottom Row */}
        <div className='flex gap-10'>
          {/* Right Col & New Users */}
          <div className='w-5/12 p-admin__box'>
            <h1 className='box-title'>کـاربران جدید</h1>
            <table className='w-full'>
              <thead className='bg-custom-navy/15'>
                <tr>
                  <th>شناسه</th>
                  <th>نام و نام خانوادگی</th>
                  <th>نام کاربری</th>
                  <th>مشاهده</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>سینا کریمی</td>
                  <td>sinakarimiorg</td>
                  <td><MdOutlineVisibility className='mx-auto w-5 h-5 cursor-pointer' /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>علی رضائی</td>
                  <td>al2345</td>
                  <td><MdOutlineVisibility className='mx-auto w-5 h-5 cursor-pointer' /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>حسین علیزاده</td>
                  <td>hossein99</td>
                  <td><MdOutlineVisibility className='mx-auto w-5 h-5 cursor-pointer' /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>موسی نوائی</td>
                  <td>musanavaei</td>
                  <td><MdOutlineVisibility className='mx-auto w-5 h-5 cursor-pointer' /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>سما زینالی</td>
                  <td>samazey790</td>
                  <td><MdOutlineVisibility className='mx-auto w-5 h-5 cursor-pointer' /></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Left Col & New Transactions */}
          <div className='w-7/12 p-admin__box'>
            <h1 className='box-title'>تـراکـنشات اخیـر</h1>
            <table className='w-full'>
              <thead className='bg-custom-navy/15'>
                <tr>
                  <th>مشتری</th>
                  <th>تاریخ</th>
                  <th>مقصد</th>
                  <th>مقدار</th>
                  <th>وضعیت</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>sina4122</td>
                  <td>06 تیر</td>
                  <td>شیراز</td>
                  <td>4,234,000</td>
                  <td>
                    <span className='status-positive'>تایید شده</span>
                  </td>
                </tr>
                <tr>
                  <td>salar98</td>
                  <td>23 آذر</td>
                  <td>تبریز</td>
                  <td>12,564,000</td>
                  <td>
                    <span className='status-positive'>تایید شده</span>
                  </td>
                </tr>
                <tr>
                  <td>navid092</td>
                  <td>12 تیر</td>
                  <td>تهران</td>
                  <td>4,234,000</td>
                  <td>
                    <span className='status-negative'>تایید نشده</span>
                  </td>
                </tr>
                <tr>
                  <td>omid123</td>
                  <td>02 اردیبهشت</td>
                  <td>کرمان</td>
                  <td>1,890,000</td>
                  <td>
                    <span className='status-positive'>تایید شده</span>
                  </td>
                </tr>
                <tr>
                  <td>mina653</td>
                  <td>06 مرداد</td>
                  <td>مشهد</td>
                  <td>149,000</td>
                  <td>
                    <span className='status-negative'>تایید نشده</span>
                  </td>
                </tr>
                <tr>
                  <td>mina653</td>
                  <td>19 مرداد</td>
                  <td>مشهد</td>
                  <td>149,000</td>
                  <td>
                    <span className='status-negative'>تایید نشده</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
