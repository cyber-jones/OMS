import React, { useRef, useState } from "react";
import Login from "../components/authenticate/Login";
import Signup from "../components/authenticate/Signup";

const Auth = () => {
  const [islogin, setIsLogin] = useState(true);
  const loginRef = useRef(null);
  const signupnRef = useRef(null);

  const handleLoginRef = () => {
    loginRef.current.className =
      "bg-black text-white w-[50%] rounded-3xl py-1 transition-all duration-700 ease-in-out";
    signupnRef.current.className =
      "w-[50%] rounded-3xl py-1 transition-all duration-700 ease-in-out";
    setIsLogin(true);
  };
  const handleSignupRef = () => {
    signupnRef.current.className =
      "bg-black text-white w-[50%] rounded-3xl py-1 transition-all duration-700 ease-in-out";
    loginRef.current.className =
      "w-[50%] rounded-3xl py-1 transition-all duration-700 ease-in-out";
    setIsLogin(false);
  };

  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-1">
      <div className="hidden md:block w-full h-screen">
        <img
          className="object-cover h-screen w-full"
          src="/images/image-2.jpg"
          alt="image"
        />
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col w-[90%] md:w-[60%] h-full gap-4 justify-center">
          <div className="flex text-center bg-gray-200 rounded-3xl text-md cursor-pointer transition-all duration-1000">
            <div
              id="login"
              onClick={handleLoginRef}
              ref={loginRef}
              className="bg-black text-white w-[50%] rounded-3xl py-1 transition-all duration-1000 ease-in-out"
            >
              Login
            </div>
            <div
              id="signup"
              onClick={handleSignupRef}
              ref={signupnRef}
              className="w-[50%] py-1"
            >
              SignUp
            </div>
          </div>
          {islogin ? <Login /> : <Signup />}
        </div>
      </div>
    </section>
  );
};

export default Auth;
