import React from 'react';
import USFlag from '../USFlag';


const ServerInfo: React.FC = () => {
  return (
    <div className="z-20 flex justify-start mt-6 p-4-lg">
      <div>
        <h1 className="text-xl font-bold">! RC3-BASEMAPS</h1>
        <div className="mt-2 flex flex-row gap-3 text-sm"><USFlag /> <span>CONQUEST LARGE </span> - <span>LANCANG DAM </span> - <span>CUSTOM</span> - <span>60 HZ</span></div>
        <p className="mt-1 text-xs max-w-4xl">Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: <span className='cursor-pointer hover:underline'>www.epg.gg</span> ! Discord <span className='cursor-pointer hover:underline'> https://discord.gg/3r5NK4d</span></p>
        <div className="mt-4 flex flex-row md:mt-6 space-x-1 md:space-x-2 text-xs">
          <button className="border-2  border-black/20 h-11 md:w-60 hover:bg-white hover:text-black px-2 md:px-4 ">JOIN</button>
          <button className="border-2 border-black/20 md:w-60 hover:bg-white hover:text-black px-2 md:px-4 h-11">SPECTATE</button>
          <button className="border-2 border-black/20 md:w-60 hover:bg-white hover:text-black px-2 md:px-4 h-11">JOIN AS COMMANDER</button>
          <button className="border-2 border-black/20 hover:bg-white hover:text-black px-2 md:px-4 h-11"><span className='text-base'>★</span> 13672</button>
        </div>
      </div>
    </div>
  );
}

export default ServerInfo;
