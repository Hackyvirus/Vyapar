import React from 'react'
import Navbar from './components/navbar/navbar'; import Hero from './components/hero/hero';
import Rulescontainer from './components/rules/Rulescontainer';
import Ring from '../src/img/rings(1).png'

const LandingPage = () => {
        return (
                <div className=' bg-[#0F0F0F] '>
                        <img className='z-10 animate-spin opacity-80 absolute right-[30%] -top-[50%] w-[120%] ' src={Ring} alt="ring" />
                        <Navbar />
                        <Hero />
                        <Rulescontainer />
                        <h1 className='text-orange-500 '>I am sushant</h1>
                </div>
        )
}

export default LandingPage
