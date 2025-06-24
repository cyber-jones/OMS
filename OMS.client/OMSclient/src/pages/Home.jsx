/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import assets from "../assets/asset";
import { motion } from "framer-motion";
import { oms_url } from "../utils/SD";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-black h-screen">
        <img
          src="/images/image-2.jpg"
          alt="home"
          className="object-cover absolute w-full h-full opacity-20"
        />
        <div className="w-full h-screen flex justify-center items-center flex-col z-10">
          {/* <img src={assets.img1} alt="home" className="w-1/2 "/> */}
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[70px] text-green-900 font-mono"
          >
            Health<span className="text-white">Tech</span>
          </motion.h1>
          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-white to-red-900 text-lg font-thin"
          >
            We Pirotize Your Health
          </motion.p>
        </div>
      </div>
      <div className="w-full">
        <div className="float-right mx-2">
          <button
            onClick={() => navigate(oms_url.auth)}
            className="px-6 py-2 text-2xl text-white bg-purple-900 mt-4 hover:bg-purple-950 cursor-pointer"
          >
            Sign in
          </button>
        </div>
        <h2 className="mx-7 my-5 text-3xl font-serif">
          <i>Health Reals</i>
        </h2>
      </div>
      <div className="w-full h-auto font-semibold flex flex-col justify-start items-center px-7 gap-2 py-6">
        {assets.reels.map((reel, index) => (
          <div
            key={index}
            className="w-[95%] min-h-[500px] lg:w-[500px] lg:h-[200px] border shadow-2xl rounded-lg flex justify-around items-center flex-col px-3 lg:mr-7"
          >
            <p className="font-bold">{reel.title}</p>
            <img src={reel.img} alt={reel.title} />
            <p>{reel.subTitle}</p>
            <p>{reel.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
