import React from 'react'
import Header from '../../components/Header/Header'
import Landing from '../../components/Landing/Landing'

import './Index.css'
import PopularCategories from '../../components/PopularCategories/PopularCategories'

export default function Index() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Landing />
        <PopularCategories />
        <div className='w-full bg-black h-10'></div>

    </div>
  )
}
