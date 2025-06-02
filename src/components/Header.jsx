import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex flex-row justify-between bg-slate-900 text-white h-[60px]'>
        <div className='flex flex-row items-center ml-6'>
            <span className='text-2xl font-bold'>WatchList</span>
        </div>
        <div className='flex flex-row justify-between items-center w-[250px] mr-15 font-medium'>
            <Link to="/">WatchList</Link>
            <Link to="/watched">Watched</Link>
            <Link to="/add">Add</Link>
        </div>
    </div>
  )
}

export default Header
