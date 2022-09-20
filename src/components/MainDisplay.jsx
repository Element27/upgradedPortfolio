import React from 'react'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import HeroSection from './HeroSection'
import Portfolio from './Portfolio'

function MainDisplay() {

  // bg-[#5e42a6]
  return (
    <div className='w-full lg:flex-1 bg-lines'>
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  )
}

export default MainDisplay