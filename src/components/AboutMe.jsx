import React from 'react'

function AboutMe() {
  return (
    <div
      className='bg-[#b74e91] w-full p-10 lg:p-12 h-[85vh] flex justify-center items-center'
      id='AboutMe'
    >
      <div className=' w-full md:w-[80%]'>
        <h2
          className='text-xl md:text-3xl lg:4xl font-bold mb-4 text-[#f0dbe9]'
        >Who I Am</h2>
        <p className='text-xs md:text-sm lg:text-base font-semibold pb-5 text-[#e2b8d3]'>I am Akinbo Olamilekan Daniel, a Frontend Developer skilled with frontend tools such as React JS, Tailwind CSS, JavaScript, HTML and CSS with the end goal of being a full stack programmer/developer and a Web 3 Specialist.</p>

        <button className='w-full sm:w-fit  h-10 px-8 rounded-md border-solid border-white border-2'>Resume</button>

      </div>
    </div>
  )
}

export default AboutMe