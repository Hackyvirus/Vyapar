import React from 'react'

const Navbar = () => {
  return (
    <div className='h-24 w-[90vw] pt-10 m-auto items-center text-[#fff] flex flex-row justify-between' >
      <h1 className='text-[65px] text-[#DF8FF0] leading-[120px] font-["Popins]' >Vyapar</h1>
      <div className='google-auth  cursor-pointer bg-[#A541E5] hover:bg-[#9747FF] px-3 py-1 rounded-lg'>
        Google Auth
      </div>
    </div>
  )
}








export default Navbar
