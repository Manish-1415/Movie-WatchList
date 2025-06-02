import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-slate-900 text-white h-[60px] px-4 sm:px-8'>
      <span className='text-2xl font-bold'>WatchList</span>
      <div className='flex flex-row gap-4 sm:gap-8 font-medium text-base'>
        <Link to="/" className="hover:text-yellow-300 transition">WatchList</Link>
        <Link to="/watched" className="hover:text-yellow-300 transition">Watched</Link>
        <Link to="/add" className="hover:text-yellow-300 transition">Add</Link>
      </div>
    </div>
  )
}

export default Header
