import React from 'react'

const HomeContent = () => {
  return (
    <div className='w-[90%] flex justify-center items-center'>
        <div className='w-[95%] h-11/12'>
            <div className='w-full flex justify-around items-center h-6/12'>
                <div className='w-[60%] h-11/12 shadow-xl bg-gray-200 rounded-xl'></div>
                <div className='w-[30%] h-11/12 shadow-xl bg-gray-200 rounded-xl'></div>
            </div>
            <div className='w-full flex justify-around items-center h-6/12'>
                <div className='w-[30%] h-11/12 shadow-xl bg-gray-200 rounded-xl'></div>
                <div className='w-[60%] h-11/12 shadow-xl bg-gray-200 rounded-xl'></div>
            </div>
        </div>
    </div>
  )
}

export default HomeContent