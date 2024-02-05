import React from 'react'
import LeftHero from './left-hero'
import RightHero from './right-hero'


const Hero = () => {
  return (
    <div className=' mt-10 mb-[8rem] w-[90vw] h-[80%] m-auto flex flex-row justify-center'>
      <LeftHero />
      <RightHero />
    </div>
  )
}

export default Hero
