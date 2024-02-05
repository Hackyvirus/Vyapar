import React from 'react'
import Chating from '../LeftSide/Chating'
import Middle from '../LeftSide/Middle'
import Trade from './Trade'



const RightSide = () => {
        return (
                <div className='w-[305px] h-full bg-[#18061D] flex flex-col justify-evenly items-center'>
                        <Middle />
                        <Trade />
                        <Chating heading="Properties" />
                </div>
        )
}

export default RightSide
