import React, { useState } from 'react'
import Header from './header'
import SideBar from './SideBar'


const DashBoardComponents = ({ children }) => {
  const [sideNav, setSideNav] = useState(true);
  return (
    <div className='bg-white w-full h-screen font-mono'>
      <Header sideNav={sideNav} setSideNav={setSideNav}/>
      <div className='flex h-11/12 w-full'>
        <SideBar sideNav={sideNav}/>
        <div className={`md:w-[90%] w-full h-full flex justify-center items-center`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashBoardComponents