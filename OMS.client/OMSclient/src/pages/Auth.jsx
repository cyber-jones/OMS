import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

const Auth = () => {
    const [islogin, setIsLogin] = useState(true);


    const loginId = document.getElementById("login");
    const signupId = document.getElementById("signup");
    console.log(loginId)
    
    loginId.addEventListener("click", () => {
        signupId.classList.remove("bg-black text-white");
        setIsLogin(true);
    });
    signupId.addEventListener("click", () => {
        loginId.classList.remove("bg-black text-white");
        this.classList.add("bg-black text-white");
        setIsLogin(false);
    });

  return (
    <section className='w-full h-screen grid grid-cols-2 grid-rows-1'>
        <div className='w-full h-screen'>
            <img className='object-cover h-screen w-full' src='/images/image-2.jpg' alt='image' />
        </div>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col w-[60%] min-h-6/12  gap-4 '>
                <div className='flex text-center bg-gray-200 rounded-3xl text-md cursor-pointer transition-all duration-1000'>
                    <div id="login" className='bg-black text-white w-[50%] rounded-3xl py-1 transition-all duration-1000'>Login</div>
                    <div id='signup' className='w-[50%] py-1'>SignUp</div>
                </div>
                { islogin ? <Login /> : <Signup />}
            </div>
        </div>
    </section>
  )
}

export default Auth