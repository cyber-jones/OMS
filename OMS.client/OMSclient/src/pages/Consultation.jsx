import React from 'react'
import useDoctor from '../hooks/useDoctor'
import Circle from '../components/loading/Circle';




const  Consultation = () => {
    const { doctors, loading } = useDoctor();

  return (
    <div className='w-10/12 h-11/12 flex shadow-2xl'>
        <div className='w-[25%] h-full bg-gray-200 overflow-y-scroll rounded-tl-2xl'>
            <p className='text-3xl font-extrabold ml-8 my-5'>Chats</p>
            {!loading && doctors ? 
                doctors.map((doctor, index) => (
                    <div key={index} className='font-sans w-full gap-6 h-22 flex justify-start items-center cursor-pointer hover:bg-gray-300 transition-all ease-out duration-500'>
                        <div className='w-10 h-10 rounded-full bg-stone-700 ml-8'></div>
                        <div className='text-sm'>
                            <strong>{doctor?.first_Name} {doctor?.last_Name}</strong>
                            <p>online</p>
                        </div>
                    </div>
                )) : <Circle />
            }
        </div>
        <div className='w-[75%] h-full bg-gray-200 rounded-br-2xl'></div>
    </div>

  )
}

export default Consultation