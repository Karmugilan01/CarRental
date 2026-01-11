import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/owner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className='flex'>
            <Sidebar /> 
            <Outlet />
        </div>
    </div>
  )
}

export default Layout