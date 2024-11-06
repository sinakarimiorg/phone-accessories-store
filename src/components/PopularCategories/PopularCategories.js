import React from 'react'

import './PopularCategories.css'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function PopularCategories() {
    return (
        <div className=''>
            <div className='container'>
                <SectionHeader title={'دسته بندی های محبوب'} desc={'بهترین ها را از ما بخواهید'} btnTitle={'مشاهده همه'} />
                <div className='w-full h-[175px] flex-center m-auto gap-12'>
                    <div className='w-16 h-16 rounded-full bg-orange-400'></div>
                    <div className='w-16 h-16 rounded-full bg-purple-custom'></div>
                    <div className='w-16 h-16 rounded-full bg-green-600'></div>
                    <div className='w-16 h-16 rounded-full bg-red-600'></div>
                </div>
            </div>
        </div>
    )
}
