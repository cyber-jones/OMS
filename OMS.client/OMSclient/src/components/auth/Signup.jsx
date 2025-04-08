import React, { useState } from 'react'
import Input from '../Input'

const Signup = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.id]: e.target.value 
        });
    }

console.log(formData);
  return (
    <div className='flex flex-col justify-center items-center w-full gap-3'>
        {/* <p className='text-2xl font-bold '>SignUp Here!</p> */}
        <div className='flex gap-2'>
            <Input type={"email"} name={"Email"} handleChange={handleChange} />
            <Input type={"password"} name={"Password"} handleChange={handleChange} />
        </div>
        <div className='flex gap-2'>
            <Input type={"email"} name={"Email"} handleChange={handleChange} />
            <Input type={"password"} name={"Password"} handleChange={handleChange} />
        </div>
        <div className='flex gap-2'>
            <Input type={"email"} name={"Email"} handleChange={handleChange} />
            <Input type={"password"} name={"Password"} handleChange={handleChange} />
        </div>
        <div className='flex gap-2'>
            <Input type={"email"} name={"Email"} handleChange={handleChange} />
            <Input type={"password"} name={"Password"} handleChange={handleChange} />
        </div>
        <div className='flex gap-2'>
            <Input type={"email"} name={"Email"} handleChange={handleChange} />
            <Input type={"password"} name={"Password"} handleChange={handleChange} />
        </div>
        <div className='flex gap-2'>
            <Input type={"email"} name={"Email"} handleChange={handleChange} />
            <Input type={"password"} name={"Password"} handleChange={handleChange} />
        </div>
        <div className='flex gap-2'>
            <Input type={"email"} name={"Email"} handleChange={handleChange} />
            <Input type={"password"} name={"Password"} handleChange={handleChange} />
        </div>
        <button className='w-[80%] py-4 bg-yellow-900 hover:bg-yellow-950 rounded-3xl mt-7 text-sm text-white transition-all ease-in duration-500 cursor-pointer'>Submit</button>
    </div>
  )
}

export default Signup