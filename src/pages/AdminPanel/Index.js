import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/AdminPanel/SideBar/SideBar'
import TopBar from '../../components/AdminPanel/TopBar/TopBar'

export default function Index() {
  return (
    <div className='flex'>
      <SideBar />
      <div className='w-10/12'>
        <TopBar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
