import React from 'react'
import Upper from './Upper'
import Chating from './Chating'
import Middle from './Middle'





const LeftSide = () => {
        return (
                <div className='w-[305px] h-full bg-[#18061D] flex flex-col justify-start items-center'>
                        <Upper />
                        <Middle />
                        <Chating heading="Chating" />
                </div>
        )
}

export default LeftSide
