import { Bell, Menu, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center w-full mb-7'>
      {/* LEFT SIDE */}
      <div className='flex justify-between items-center'>
        <button className='bg-gray-100 hover:bg-blue-100 rounded-full py-3 px-3'>
          <Menu size={20}/>
        </button>
        <div className='relative'>
          <input type="text" placeholder='Start type to search for goods & products' className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500' />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Bell className="text-gray-500" size={20}/>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex justify-between items-center gap-4'>
        <div className='hidden md:flex justify-center items-center'>
          <div className='mx-3'>
            <button>
              <Sun className='text-gray-500 cursor-pointer' size={24} />
            </button>
          </div>
          <div className='relative'>
            <Bell className='text-gray-500 cursor-pointer' size={24} />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center'>3</span>
          </div>
          <hr className='w-0 h-7 border border-solid border-l mx-3 border-gray-300'/>
          <div className='flex justify-center items-center gap-3'>
            <div className='w-9 h-9'>image</div>
            <span className='font-semibold'>hntim</span>
          </div>
        </div>

        <Link href={'/setting'}>
          <Settings className='text-gray-500' size={24} />
        </Link>
      </div>
    </header>
  )
}

export default Navbar
