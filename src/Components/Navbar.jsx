import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = ({DarkTheme,setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
        <div className="flex justify-between items-center space-x-5 w-screen">
           <Link to='/'>
               <p className="text-2xl bg-blue-300 font-bold text-black py-1 px-2 rounded dark:bg-blue-500 dark:text-white">
                   Google
               </p>
           </Link>
           <button type="button" onClick={()=>setDarkTheme(!DarkTheme)} className="text-xl dark:bg-neutral-700 bg-white border rounded-full px-2 py-1 dark:border-black">
              {DarkTheme ? 'Light 💡' : 'Dark 🌕'}
           </button>
        </div>
        <Search/>
    </div>
  )
}

export default Navbar