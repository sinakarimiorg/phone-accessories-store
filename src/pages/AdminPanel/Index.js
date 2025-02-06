import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/AdminPanel/SideBar/SideBar'
import TopBar from '../../components/AdminPanel/TopBar/TopBar'

export default function Index() {
  return (
    <>
    <div className='hidden md:flex'>
      <SideBar />
      <div className='w-9/12 xl:w-10/12 overflow-hidden'>
        <TopBar />
        <div className='p-5 xl:p-12'>
          <Outlet />
        </div>
      </div>
    </div>
    <div className='block md:hidden'>
      <div className='w-full'>
        <TopBar />
        <div className='p-12'>
          <Outlet />
        </div>
      </div>
    </div>
    </>
  )
}
