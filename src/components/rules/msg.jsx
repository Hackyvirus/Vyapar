import React from 'react'

const Msg = (props) => {
        return (
                <div className='ml-10 h-16 flex flex-col justify-between '>
                        <h2 className='font-[300] text-3xl text-[#CCCCCC]'>{props.para1}</h2>
                        <h2 className='font-[300] text-[#D552FF]'>{props.para2}</h2>
                </div>
        )
}

export default Msg
