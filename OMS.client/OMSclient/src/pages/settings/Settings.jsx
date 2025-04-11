import React from 'react'
import Card from '../../components/settings/Card'
import { Link } from 'react-router-dom'
import { oms_url } from '../../utils/SD'

const Settings = () => {
  return (
    <div className="w-[95%] h-11/12 flex justify-center items-center">
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 font-sans overflow-y-scroll place-content-start place-items-center gap-8'>
            <Card text={"New Doctor"} icon={"person-plus"} path={oms_url.registerDoctor} color={"pink"}/>
            <Card text={"New Staff"} icon={"person-plus-fill"} path={""} color={"purple"}/>
            <Card text={"New Drug"} icon={"bandaid-fill"} path={""} color={"blue"}/>
            <Card text={"New Specialty"} icon={"person-video3"} path={""} color={"green"}/>
            <Card text={"Doctor List"} icon={"person-lines-fill"} path={oms_url.doctorList} color={"orange"}/>
            <Card text={"Staff List"} icon={"person-lines-fill"} path={""} color={"yellow"}/>
            <Link className={`w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-red-400 h-[100px] rounded-lg flex justify-center items-center gap-7`}>
                <i class={`bi bi-${"people-fill"} text-4xl text-red-400`}></i>
                <p className='text-md'>Patient List</p>
            </Link>
        </div>
    </div>
  )
}

export default Settings