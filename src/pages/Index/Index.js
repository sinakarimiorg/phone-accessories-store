import React from 'react'
import Header from '../../components/Header/Header'
import Landing from '../../components/Landing/Landing'

import './Index.css'

export default function Index() {
  return (
    <div className='bg-gradient-to-r from-gray-100 to-slate-200 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900'>
      <Header/>
      <Landing />
      <div className='w-[80%] h-[175px] flex-center m-auto gap-12'>
        <div className='w-16 h-16 rounded-full bg-orange-400'></div>
        <div className='w-16 h-16 rounded-full bg-purple-custom'></div>
        <div className='w-16 h-16 rounded-full bg-green-600'></div>
        <div className='w-16 h-16 rounded-full bg-red-600'></div>
      </div>
      <div className='w-[80%] h-[175px] flex-center m-auto gap-12'>
        <div className='w-16 h-16 rounded-full bg-orange-400'></div>
        <div className='w-16 h-16 rounded-full bg-purple-custom'></div>
        <div className='w-16 h-16 rounded-full bg-green-600'></div>
        <div className='w-16 h-16 rounded-full bg-red-600'></div>
      </div>
      <div className='w-[80%] h-[175px] flex-center m-auto gap-12'>
        <div className='w-16 h-16 rounded-full bg-orange-400'></div>
        <div className='w-16 h-16 rounded-full bg-purple-custom'></div>
        <div className='w-16 h-16 rounded-full bg-green-600'></div>
        <div className='w-16 h-16 rounded-full bg-red-600'></div>
      </div>
      <div className='w-[80%] h-[175px] flex-center m-auto gap-12'>
        <div className='w-16 h-16 rounded-full bg-orange-400'></div>
        <div className='w-16 h-16 rounded-full bg-purple-custom'></div>
        <div className='w-16 h-16 rounded-full bg-green-600'></div>
        <div className='w-16 h-16 rounded-full bg-red-600'></div>
      </div>
    </div>
  )
}
