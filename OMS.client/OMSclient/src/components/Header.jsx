import React from 'react'
import useUser from '../hooks/useUser';




const Header = ({ sideNav, setSideNav}) => {
  const { loading, user } = useUser();


  return (
    <header className='static w-full h-1/12 bg-gray-100 flex justify-between items-center'>
        <div className='w-[10%] px-2 flex gap-6 justify-start sm:justify-center items-center'>
            <i className={`bi bi-list text-md rounded-md px-2 cursor-pointer sm:hidden block ${sideNav ? "border-3" : "" }`} onClick={() => setSideNav(prev => !prev)}></i>
            <p className='font-bold text-lg md:text-3xl'>OMS</p>
        </div>
        <div className='flex-1 hidden sm:block'>
            <input className='px-8 py-3 focus:outline-0 ml-3 w-[300px] text-sm' type='text' placeholder='Search Patient' /> 
        </div>
        <div className='min-w-[40%] md:min-w-[20%] h-full flex justify-center items-center gap-2'>
          <p className='text-[10px] md:text-[15px] font-light'>{ !loading && user !== null ? `${user?.first_Name} ${user?.last_Name}` : "Loading..." }</p>
          <div className='w-[17%] md:w-[12%] h-[40%] md:h-7/12 rounded-full bg-black'></div>
        </div>
    </header>
  )
}

export default Header