import React from 'react';

const advancedSettings = [
    { label: 'Minimap', value: 'On' },
    { label: 'Only Squad Leader Spawn', value: 'Off' },
    { label: 'Vehicles', value: 'On' },
    { label: 'Team Balance', value: 'On' },
    { label: 'Minimap Spotting', value: 'On' },
    { label: 'HUD', value: 'On' },
    { label: '3P Vehicle Cam', value: 'On' },
    { label: 'Regenerative Health', value: 'Off' },
    { label: 'Kill Cam', value: 'On' },
    { label: 'Friendly Fire', value: 'Off' },
    { label: '3D Spotting', value: 'On' },
    { label: 'Enemy Name Tags', value: 'On' },
];

const Advanced: React.FC = () => {
    return (
        <div className="md:w-1/3 md:ml-5 w-full mb-6">
            <h3 className=" text-sm">Advanced</h3>
            <div className="p-2 text-sm">
                {advancedSettings.map((setting, index) => (
                    <React.Fragment key={index}>
                        <div className="flex py-1 hover:bg-white hover:text-black flex-row justify-between px-3">
                            <span>{setting.label.toUpperCase()}</span>
                            <span>{setting.value.toUpperCase()}</span>
                        </div>
                        <hr className="opacity-30" />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Advanced;
