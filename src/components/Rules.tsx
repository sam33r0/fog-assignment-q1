import React from 'react';

const rules = [
  { label: 'Tickets', value: '400', col: true },
  { label: 'Vehicle Spawn Delay', value: '25', col: true },
  { label: 'Bullet Damage', value: '100' },
  { label: 'Kick After Team Kills', value: '5' },
  { label: 'Player Health', value: '100' },
  { label: 'Player Respawn Time', value: '100' },
  { label: 'Kick After Idle', value: '300' },
  { label: 'Ban After Kicks', value: '3' },
];

const Rules: React.FC = () => {
  return (
    <div className="md:w-1/3 md:ml-5 w-full mb-6">
      <h3 className=" text-sm">Rules</h3>
      <div className="p-2 text-sm">
        {rules.map((rule, index) => (
          <React.Fragment key={index}>
            <div className="flex py-1 hover:bg-white hover:text-black flex-row justify-between px-3">
              <span>{rule.label.toUpperCase()}</span>
              {rule.col? <span className='text-yellow-400'>{rule.value.toUpperCase()}</span>:<span>{rule.value.toUpperCase()}</span>}
              
            </div>
            <hr className="opacity-30" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Rules;
