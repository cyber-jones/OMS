import React from 'react'
import { Link } from 'react-router-dom';
import { oms_url } from '../utils/SD';

const SideBar = ({ sideNav }) => {
    const nav_icons = "text-lg md:text-2xl hover:text-4xl transition-all ease-in";

  return (
    <div className={`${sideNav ? "md:w-[10%] flex flex-col h-full justify-around items-center bg-gray-100 text-[11px] w-[150px] transition-all duration-700" : "w-[0px] h- scale-x-0 h-11/12 flex flex-col justify-around items-center bg-gray-100 text-[11px] transition-all duration-700"}`}>
        <Link to={oms_url.dashBoard}>
            <div className='text-center w-full hover:cursor-pointer'>
                <i className={`bi bi-house-gear-fill ${nav_icons}`}></i>
                <div>Home</div>
            </div>
        </Link>
        <Link to={oms_url.consultation}>
            <div className='text-center w-full hover:cursor-pointer'>
                <i className={`bi bi-people-fill ${nav_icons}`}></i>
                <div>Consultation</div>
            </div>
        </Link>
        <div className='text-center w-full hover:cursor-pointer'>
        <i className={`bi bi-building-check ${nav_icons}`}></i>
            <div>Appointments</div>
        </div>
        <Link to={oms_url.specialty}>
            <div className='text-center w-full hover:cursor-pointer'>
                <i className={`bi bi-person-video3 ${nav_icons}`}></i>
                <div>Specialties</div>
            </div>
        </Link>
        <Link to={oms_url.drug}>
            <div className='text-center w-full hover:cursor-pointer'>
                <i className={`bi bi-bandaid-fill ${nav_icons}`}></i>
                <div>Drugs</div>
            </div>
        </Link>
        <Link to={oms_url.settings}>
            <div className='text-center w-full hover:cursor-pointer'>
                <i className={`bi bi-gear-wide-connected ${nav_icons}`}></i>
                <div>Settings</div>
            </div>
        </Link>
    </div>
  )
}

export default SideBar