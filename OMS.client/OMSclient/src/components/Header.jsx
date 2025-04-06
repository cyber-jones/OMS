import React from 'react'

const Header = () => {
  return (
    <header className='static w-full h-1/12 bg-gray-100 flex justify-between items-center'>
        <div className='w-[10%] px-2 flex gap-6 justify-start sm:justify-center items-center'>
            <i class="bi bi-list text-xl border-3 rounded-md px-2 cursor-pointer sm:hidden block"></i>
            <p className='font-bold text-3xl'>OMS</p>
        </div>
        <div className='flex-1'>
            <input className='px-8 py-3 focus:outline-0 ml-3 w-[300px] text-sm' type='text' placeholder='Search Patient' /> 
        </div>
        <div className='w-26'>
            <button className='button text-sm'>Login</button>
        </div>
    </header>
  )
}

export default Header