import React from 'react'
// import IconComponent from './IconComponent'

// Icon imports
import { FaGithubAlt, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

function Icons() {
  return (
    <div className='flex flex-wrap w-fit mx-auto mb-5'>

      <div className='p-4 rounded-md'><FaGithubAlt size={25} className=" m-4 md:m-8 hover:text-[#b74e91] text-[#e2b8d3]" /></div>
      <div className='p-4 rounded-md'><FaLinkedinIn size={25} className=" m-4 md:m-8 hover:text-[#b74e91] text-[#e2b8d3]"
        href='google.com' /></div>
      <div className='p-4 rounded-md'><FaTwitter size={25} className=" m-4 md:m-8 hover:text-[#b74e91] text-[#e2b8d3]" /></div>
      <div className='p-4 rounded-md'><FaEnvelope size={25} className=" m-4 md:m-8 hover:text-[#b74e91] text-[#e2b8d3]" /></div>

    </div>
  )
}

export default Icons