import React from 'react'

const SubHeading: React.FC = () => {
    return (
        <div className="flex justify-between flex-row md:w-2/5">
            <div  className='flex flex-col'>
                <span className='text-xs'>PLAYERS:</span>
                <span className='text-xl'>60/64</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs'>
                    PING:
                </span>
                <span className='text-xl'>
                    104 ms
                </span>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs'>
                    TICKRATE:
                </span>
                <span className='text-xl'>
                    60 Hz
                </span>
            </div>

        </div>
    )
}

export default SubHeading