import React from 'react'
import LeftSide from './components/GameBoard/LeftSide/LeftSide'
import MainBoard from './components/GameBoard/MainBoard/MainBoard'
import RightSide from './components/GameBoard/RightSide/RightSIde'




const GameBoard = () => {
        return (
                <div className='w-full h-[100vh] bg-[#18061D] flex flex-row justify-between items-center '>
                        <LeftSide />
                        <MainBoard />
                        <RightSide />
                </div>
        )
}

export default GameBoard
