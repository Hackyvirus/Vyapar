import React from 'react'
import tile1 from '../../../Tiles/tile1.jpg'

const tile = () => {
        return (

                <div class="bg-gradient-to-b from-[#060608]  via-[#272A33] via-72% to-[#242730] to-1% w-[73px] h-[130px] border-2 rounded-lg border-[#FFB700]">
                        
                        <p className='text-[14px] text-center bg-gradient-to-b from-[#FDDC30] from-100% to-[#FF91E8]  to-0% text-transperent bg-clip-text py-1 font-[400] leading-[10px]'>City Name</p>
                        <img className='bg-cover rounded-md bg-center h-[107px] w-[73px]' src={tile1} alt="Tile" />
                        </div>
        )
}

export default tile
