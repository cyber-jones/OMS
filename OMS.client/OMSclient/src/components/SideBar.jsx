import React from 'react'
import { Link } from 'react-router-dom';
import { oms_url } from '../utils/SD';

const SideBar = () => {
    const nav_icons = "text-2xl hover:text-4xl transition-all ease-in";

  return (
    <div className='w-[10%] flex flex-col justify-around items-center  bg-gray-100 text-[11px]'>
        <Link to={oms_url.home}>
            <div className='text-center w-full hover:cursor-pointer'>
                <i class={`bi bi-house-gear-fill ${nav_icons}`}></i>
                <div>Home</div>
            </div>
        </Link>
        <div className='text-center w-full hover:cursor-pointer'>
            <i class={`bi bi-people-fill ${nav_icons}`}></i>
            <div>Doctors</div>
        </div>
        <div className='text-center w-full hover:cursor-pointer'>
        <i class={`bi bi-building-check ${nav_icons}`}></i>
            <div>Appointments</div>
        </div>
        <Link to={oms_url.specialization}>
            <div className='text-center w-full hover:cursor-pointer'>
                <i class={`bi bi-person-video3 ${nav_icons}`}></i>
                <div>Specialization</div>
            </div>
        </Link>
        <div className='text-center w-full hover:cursor-pointer'>
            <i class={`bi bi-bandaid-fill ${nav_icons}`}></i>
            <div>Drugs</div>
        </div>
        <div className='text-center w-full hover:cursor-pointer'>
            <i class={`bi bi-gear-wide-connected ${nav_icons}`}></i>
            <div>Settings</div>
        </div>
    </div>
  )
}

export default SideBar