import React from 'react'

function SideBar() {
  return (
    <div className='w-full md:w-full lg:w-[25%] bg-[#5e42a6] h-8 md:h-10 lg:h-screen relative '>
      <div className='fixed top-0 left-0 w-full lg:w-[25%] bg-[#312450] h-10 md:h-12 lg:h-screen flex items-center justify-end lg:px-8'>
        <ul className='w-full flex flex-row justify-center lg:flex-col text-center lg:text-right '>
          <li className='text-sm lg:text-xl font-bold p-2 lg:py-3 cursor-pointer border-transparent border-b-2 border-solid hover:border-gray-300'>Welcome</li>
          <li className='text-sm lg:text-xl font-bold p-2 lg:py-3 cursor-pointer border-transparent border-b-2 border-solid hover:border-gray-300'>What I Do</li>
          <li className='text-sm lg:text-xl font-bold p-2 lg:py-3 cursor-pointer border-transparent border-b-2 border-solid hover:border-gray-300'>What I Have Done</li>
          <li className='text-sm lg:text-xl font-bold p-2 lg:py-3 cursor-pointer border-transparent border-b-2 border-solid hover:border-gray-300'>Wish To Connect</li>
        </ul>
      </div>

    </div>
  )
}

export default SideBar