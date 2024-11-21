import React from 'react'
import Header from '../../components/Header/Header'
import Landing from '../../components/Landing/Landing'
import PopularCategories from '../../components/PopularCategories/PopularCategories'
import AmazingOffers from '../../components/AmazingOffers/AmazingOffers'

import './Index.css'

export default function Index() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Landing />
        <PopularCategories />
        <AmazingOffers/>

    </div>
  )
}
