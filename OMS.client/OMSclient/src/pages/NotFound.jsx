import { Link } from 'react-router-dom'
import { oms_url } from '../utils/SD'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <img src="/images/404.webp" alt="404 image" />
      <Link to={oms_url.dashBoard} className='px-5 py-2 border bg-purple-700 text-white hover:bg-purple-900 text-md cursor-pointer transition-colors duration-500 ease-in rounded-lg'>Dashboard</Link>
    </div>
  )
}

export default NotFound