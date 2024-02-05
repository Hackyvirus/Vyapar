import React from 'react'

const LeftHero = () => {
        return (
                <div className='w-[50%] flex flex-col justify-evenly items-start '>
                        <div className='h-[50%] flex flex-col justify-evenly rounded-sm border-sky-100'>
                                <h1 className='text-[5rem] text-[#fff]'>Sample Text</h1>
                                <p className='text-[#B0B0B0] w-[89%] text-[22px]'>Navigate cyberspace, upgrade tech cities, and
                                        dominate in this futuristic Monopoly adventure online.</p>
                        </div>
                        <button className='w-auto text-[#fff] text-3xl px-5 py-3 rounded-tl-[20px] border-2 border-[#A541E5]  rounded-br-[20px] bg-[#0A0A0A]  '>
                                Start Playing
                        </button>
                </div>
        )
}






export default LeftHero
