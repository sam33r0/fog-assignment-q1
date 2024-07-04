import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
const Header: React.FC = () => {
    return (
        <div className='ml-16 p-6 mb-9 absolute z-10 '>
            <div className='flex flex-row'>
                <span className='cursor-pointer'>
                    <IoIosArrowBack />
                </span>
                <div className='text-xs ml-3'>
                    MILTIPLAYER &nbsp;/&nbsp; SERVER BROWSER &nbsp;/&nbsp;</div>
            </div>
            <span className='text-2xl'>SERVER INFO</span>
        </div>
    )
}

export default Header