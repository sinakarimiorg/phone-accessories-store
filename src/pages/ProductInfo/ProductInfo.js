import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './ProductInfo.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

export default function ProductInfo() {
  return (
    <div>
      <Header />
      <BreadCrumb
        links={[
          { id: 1, title: 'فروشگاه موبولـند', to: '' },
          { id: 2, title: 'همه محصولات', to: '/all-products' },
          { id: 3, title: 'هدفون کربی', to: '/product-info' },
        ]} />

        {/* Contents For Desctop Size */}
        <div></div>

        {/* Contents For Mobile Size */}
        <div></div>
      <Footer />
    </div>
  )
}
