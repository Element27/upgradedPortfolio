import React from 'react'

// #4C4EAC
// #484AA3

function PortfolioComponent({ imgSrc, portfolioLink, portfolioDesc, portfolioHeading }) {
  return (
    <div>
      <div className=' bg-gradient-to-b from-[#5a5cac] to-[#484aa3]  h-fit lg:h-[60vh] flex flex-col md:flex-row p-4 md:p-8 lg:p-10'>
        <img
          className='w-full md:w-[50%] lg:w-[40%] mr-5 mb-3'
          src={imgSrc} alt="" />
        <div >
          <h3 className='text-xl md:text-3xl font-bold mb-3 md:mb-2'>{portfolioHeading}</h3>
          <p className='text-xs md:text-sm font-semibold mb-3'>{portfolioDesc}</p>
          <a href='link'>{portfolioLink}</a>
        </div>
      </div>

      {/*  */}
      {/* <div className='bg-gradient-to-bl from-[#5a5cac] to-[#484aa3] h-fit lg:h-[60vh] flex flex-col md:flex-row p-4 md:p-8 lg:p-10'>
        <img
          className='w-full md:w-[50%] lg:w-[40%] mr-5 mb-3'
          src={screenShot} alt="" />
        <div >
          <h3 className='text-xl md:text-3xl font-bold mb-3 md:mb-2'>Header</h3>
          <p className='text-xs md:text-sm font-semibold mb-3'>This is going to be a short description of the project being featured.</p>
          <a href='link'>Click here</a>
        </div>
      </div> */}

    </div>
  )
}

export default PortfolioComponent