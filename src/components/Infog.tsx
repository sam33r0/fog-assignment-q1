import React from 'react';
import SubHeading from './Headers/SubHeading';
import Settings from './Settings';
import Advanced from './Advanced';
import Rules from './Rules';
import MapRotation from './MapRotation';

const Infog: React.FC = () => {
  return (
    <div className="z-20 w-full ">
      <SubHeading />
      <div className='flex flex-col mt-5 md:flex-row md:justify-between'>
        <Settings />
        <Advanced />
        <Rules />
      </div>
      <MapRotation/>
    </div>
  );
}

export default Infog;
