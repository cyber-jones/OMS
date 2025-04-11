import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ text, color, icon, path }) => {
  return (
    <Link to={path} className={`w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-${color}-400 h-[100px] rounded-lg flex justify-center items-center gap-7`}>
        <i class={`bi bi-${icon} text-4xl text-${color}-400`}></i>
        <p className='text-md'>{text}</p>
    </Link>
  )
}

export default Card