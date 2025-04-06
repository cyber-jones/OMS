import React from 'react'
import Header from '../components/header'
import SideBar from '../components/SideBar'
import HomeContent from '../components/HomeContent'

const Home = ({ children }) => {
  return (
    <div className='bg-white w-full h-screen font-mono'>
      <Header />
      <div className='flex h-11/12 w-full'>
        <SideBar />
        <>{children}</>
      </div>
    </div>
  )
}

export default Home