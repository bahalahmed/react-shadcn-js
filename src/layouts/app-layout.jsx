import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const AppLayout = () => {
  return (
<div>
        <main className='min-h-screen container'>
            <Header/>
      <Outlet/>
        </main>
        <div className="w-full p-10 text-center bg-gray-800">
  Made with ❤️ by Bahal
</div>
    
</div>
    

  )
}

export default AppLayout