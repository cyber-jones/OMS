import React, { useState } from 'react'
import Input from '../Input'

const Login = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.id]: e.target.value 
        });
    }

    

  return (
    <div className='flex flex-col justify-center items-center w-full gap-4'>
        <p className='text-2xl font-bold my-4'>Login Here!</p>
        <Input type={"email"} name={"Email"} label={"Email"} handleChange={handleChange} width='w-full'/>
        <Input type={"password"} name={"Password"} label={"password"} handleChange={handleChange} width='w-full'/>
        <button className='w-[80%] py-4 bg-green-900 hover:bg-green-950 rounded-3xl mt-7 text-lg text-white transition-all ease-in duration-500 cursor-pointer'>Login</button>
        <p className='text-red-600 cursor-pointer hover:text-red-800 transition-all ease-in duration-500'>Forgot password?</p>
    </div>
  )
}

export default Login