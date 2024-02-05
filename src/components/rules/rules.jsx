import React from 'react'
import Rule from './rule'
import bitcoin from '../../img/bitcoin.png'
import house from '../../img/house.png'
import dices from '../../img/dices.png'


const Rules = () => {
        return (
                <div className='mt-12 w-[70vw] m-auto  '>
                        <Rule icon={bitcoin} para1="All players start with 30 Bitcoins" para2="Once you own a property, other players will pay rent when they
land on it." />
                        <Rule icon={house} para1="On your turn, roll the dice to move forward" para2="Got doubles? You’ll have another turn!" />
                        <Rule icon={dices} para1="Purchase valuable properties and grow your
financial empire" para2="Once you own a property, other players will pay rent when they
land on it."/>
                </div>
        )
}

export default Rules
