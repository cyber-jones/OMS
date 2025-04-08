import React from 'react'
import Header from './header'
import SideBar from './SideBar'


const DashBoardComponents = ({ children }) => {
  return (
    <div className='bg-white w-full h-screen font-mono'>
      <Header />
      <div className='flex h-11/12 w-full'>
        <SideBar />
        <div className='w-[90%] flex justify-center items-center'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashBoardComponents