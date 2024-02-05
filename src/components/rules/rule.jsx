import React from 'react'
import Msg from './msg'




const Rule = (props) => {
        return (

                <div className='flex flex-row justify-start items-center my-14'>
                        <img className='w-[10rem]' src={props.icon} alt="Bitcoin" />
                        <Msg para1={props.para1} para2={props.para2}/>
                </div>
        )
}

export default Rule
