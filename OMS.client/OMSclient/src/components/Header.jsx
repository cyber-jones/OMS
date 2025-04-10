import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { oms_url } from '../utils/SD';



const Header = ({ sideNav, setSideNav}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate(oms_url.auth);
  }


  return (
    <header className='static w-full h-1/12 bg-gray-100 flex justify-between items-center'>
        <div className='w-[10%] px-2 flex gap-6 justify-start sm:justify-center items-center'>
            <i className={`bi bi-list text-md rounded-md px-2 cursor-pointer sm:hidden block ${sideNav ? "border-3" : "" }`} onClick={() => setSideNav(prev => !prev)}></i>
            <p className='font-bold text-lg md:text-lg sm:text-3xl'>OMS</p>
        </div>
        <div className='flex-1 hidden sm:block'>
            <input className='px-8 py-3 focus:outline-0 ml-3 w-[300px] text-sm' type='text' placeholder='Search Patient' /> 
        </div>
        <div className='md:w-26 mr-2'>
            <button className='button text-[11px] ' onClick={handleLogout}>Logout</button>
        </div>
    </header>
  )
}

export default Header