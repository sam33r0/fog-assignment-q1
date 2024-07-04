import React from 'react';

const settings = [
    { label: 'Region', value: 'Europe - DE' },
    { label: 'PunkBuster', value: 'On' },
    { label: 'FairFight', value: 'On' },
    { label: 'Password', value: 'Off' },
    { label: 'Preset', value: 'Normal' },
];

const Settings: React.FC = () => {
    return (
        <div className="mb-6 md:w-1/3 w-full">
            <h3 className=" text-sm">Settings</h3>
            <div className="p-2 text-sm ">
                {settings.map((setting, index) => (
                    <React.Fragment key={index}>
                        <div className="flex py-1 flex-row justify-between hover:bg-white hover:text-black px-3">
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

export default Settings;
