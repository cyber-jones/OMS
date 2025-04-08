import React from 'react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

const Auth = () => {
  return (
    <section className='w-full h-screen grid grid-cols-2 grid-rows-1'>
        <div className='w-full h-screen'>
            <img className='object-cover h-screen w-full' src='/images/image-2.jpg' alt='image' />
        </div>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col w-[60%] min-h-6/12  gap-14 '>
                <div className='flex text-center bg-gray-200 rounded-3xl text-md cursor-pointer'>
                    <div className='bg-black text-white w-[50%] rounded-3xl py-1'>Login</div>
                    <div className='w-[50%] py-1'>SignUp</div>
                </div>
                {/* <Login /> */}
                <Signup />
            </div>
        </div>
    </section>
  )
}

export default Auth