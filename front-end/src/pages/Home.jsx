import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className= 'w-20 ml-13' src="https://www.pngfind.com/pngs/b/54-545787_uber-logo-png.png" alt="Uber Logo" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
            <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
    </div>
  )
} 

export default Home
