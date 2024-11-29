import React from 'react'
import Header from '../../components/Header/Header'
import Landing from '../../components/Landing/Landing'
import PopularCategories from '../../components/PopularCategories/PopularCategories'
import AmazingOffers from '../../components/AmazingOffers/AmazingOffers'
import CategoriesByPhone from '../../components/CategoriesByPhone/CategoriesByPhone'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import ServicesSection from '../../components/ServicesSection/ServicesSection'

import './Index.css'
import PopularProducts from '../../components/PopularProducts/PopularProducts'

export default function Index() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Landing />
      <PopularCategories />
      <AmazingOffers />
      <CategoriesByPhone/>
      <LatestProducts/>
      <ServicesSection/>
      <PopularProducts/>
      <ServicesSection/>
    </div>
  )
}
