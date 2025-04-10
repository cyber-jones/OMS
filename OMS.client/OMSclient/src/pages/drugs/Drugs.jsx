import React from 'react'
import { Link } from 'react-router-dom';
// import useDrug from '../../hooks/useDrug'
// import { oms_url } from '../../utils/SD';

const Drugs = () => {
    // const { drugs, loading } = useDrug();

  return (
    <div className="w-[95%] h-11/12 flex justify-center items-center">
      {/* {!loading && drugs ? (
        <div className="w-full md:w-[70%] py-3 h-11/12 grid grid-cols-1 gap-4 bg-white place-content-start place-items-center scroll-smooth overflow-y-scroll">
          {drugs.map((drug, index) => (
            <Link
              to={`${oms_url.drug}/${drug?.Drug_Id}`}
              key={index}
              className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">{drug?.name}</div>
            </Link>
          ))}
        </div>
      ) : (
        <Circle />
      )} */}
      <div className="w-full md:w-[70%] py-3 h-11/12 grid grid-cols-1 gap-4 bg-white place-content-start place-items-center scroll-smooth overflow-y-scroll">
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Epiderm</div>
            </Link>
            <Link
                to=""
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">Paracitamol</div>
            </Link>
        </div>
    </div>
  );
}

export default Drugs