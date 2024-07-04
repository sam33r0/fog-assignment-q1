import React, { useState } from 'react';

const RightNavBar: React.FC = () => {
    const [darkInvi, setDarkInvi] = useState<boolean>(false);
    return (
        <div className='right-nav group hidden lg:block bg-black/75 opacity-50 transform transition-all duration-300 ease-in-out hover:w-60 hover:opacity-100 h-screen absolute pt-4 pl-1 z-40 w-16 right-0'>
            <hr className='h-1 group-hover:block hidden' />

            <div className='flex flex-row gap-2 '>
                <img
                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
                    loading="lazy"
                    alt=""
                    className="invite__squad-icon"
                /><div className="hidden text-xs group-hover:block">SQUAD</div>
            </div>
            <div className='hover:bg-white mb-2 hover:text-black group-hover:flex flex-row  items-center gap-2' onMouseEnter={() => setDarkInvi(true)} onMouseLeave={() => setDarkInvi(false)}>
                {darkInvi ? <img
                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg"
                    loading="lazy"
                    alt=""
                    className="invite__join-icon invite__join-icon--black"
                /> : <img
                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg"
                    loading="lazy"
                    alt=""
                    className="invite__join-icon invite__join-icon--default"
                />
                }
                <span className=" hidden text-xs group-hover:block">Squad Join</span>
            </div>

            <hr className='h-1 group-hover:block hidden' />
            <div className='flex flex-row gap-2 '>
                <img
                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
                    loading="lazy"
                    alt=""
                    className="invite__online-icon"
                />

                <div className="hidden text-xs group-hover:block">ONLINE</div>
            </div>
            <div className='hover:bg-white mb-2 hover:text-black flex flex-row  items-center gap-2'>
                <img
                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
                    loading="lazy"
                    alt=""
                    className="invite__friend-picture"
                />
                <div className=' border-green-600 w-0 absolute left-1 h-[50px]' style={{ border: "solid 2px #16a34a" }}>
                </div>
                <div className=" hidden text-xs group-hover:flex flex-col">
                    <span className='font-bold'>Mary Jane</span>
                    <span className='font-thin'>online</span>
                </div>
            </div>
            <hr className='h-1 group-hover:block hidden' />
            <div className='flex flex-row gap-2 '>
                <img
                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
                    loading="lazy"
                    alt=""
                    className="invite__offline-icon"
                />

                <div className="hidden text-xs group-hover:block">OFFLINE</div>
            </div>
            <div className='hover:bg-white mb-2 hover:text-black flex flex-row  items-center gap-2'>
                <img
                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"
                    loading="lazy"
                    alt=""
                    className="invite__friend-picture"
                />
                <div className=' border-gray-600 w-0 absolute left-1 h-[50px]' style={{ border: "solid 2px #4b5563" }}>
                </div>
                <div className=" hidden text-xs group-hover:flex flex-col">
                    <span className='font-bold'>420</span>
                    <span className='font-thin'>offline</span>
                </div>
            </div>
        </div>
    );
};

export default RightNavBar;
