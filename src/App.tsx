import React from 'react';
import ServerInfo from './components/ServerInfo';
import Infog from './components/Infog';
import './App.css';
import Header from './components/Headers/Header';
import LeftNavBar from './components/NavBars/LeftNavBar';
import RightNavBar from './components/NavBars/RightNavBar';

const App: React.FC = () => {
  return (
    <div className="relative font-orbitron flex h-screen w-screen max-w-screen bg-cover bg-center text-white " style={{ backgroundImage: `url('./background-img.jpg')` }}>
      <div className="absolute bg-gray-800 bg-opacity-75  inset-0 backdrop-blur-md"></div>
      <LeftNavBar/>
      <Header />
      <div className=" p-6 relative max-w-screen-lg mt-20 z-10 w-full flex flex-col flex-grow overflow-y-auto">
        <ServerInfo />
        <div className="flex justify-between mt-2 space-x-4 flex-grow min-h-0">
          <div className="flex-grow flex w-full flex-col min-h-0 ">
            <Infog />
          </div>
        </div>
      </div>
      <RightNavBar/>
    </div>
  );
}

export default App;
