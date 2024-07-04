import React from 'react';

const maps = [
    { name: 'dawnbreaker', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png' },
    { name: 'propaganda', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { name: 'operation locker', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png' },
    { name: 'lancang dam', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png' },
    { name: 'siege of shanghai', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png' },
    { name: 'golmud railway', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png' },
    { name: 'dawnbreaker', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png' },
    { name: 'propaganda', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { name: 'operation locker', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png' },
    { name: 'lancang dam', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png' },
    { name: 'siege of shanghai', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png' },
    { name: 'golmud railway', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png' },
    { name: 'dawnbreaker', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png' },
    { name: 'propaganda', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { name: 'operation locker', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png' },
    { name: 'lancang dam', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png' },
    { name: 'siege of shanghai', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png' },
    { name: 'golmud railway', image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png' },
];

const MapRotation: React.FC = () => {
    return (
        <div className="server__next-w pb-6">
            <div className="server__next-h mb-4">MAP ROTATION</div>
            <div className="server__maps-w grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {maps.map((map, index) => (
                    <div key={index} className="group server__map flex flex-col hover:bg-white hover:text-black text-white bg-gray-800 text-xs bg-opacity-50 relative transition duration-300">
                        <div className="server__map-image-w flex-grow relative overflow-hidden">
                            <div className="server__map-image-overlay absolute"></div>
                            <img
                                src={map.image}
                                loading="eager"
                                alt={map.name}
                                className="server__map-image transform transition duration-200 ease-in-out group-hover:-translate-y-2"
                            />
                        </div>
                        <div className='h-8 transform transition duration-200 ease-in-out group-hover:-translate-y-2 flex flex-col justify-center items-center'>
                            <div className="server__map-mode">conquest large</div>
                            <div className="server__map-mapn">{map.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MapRotation;
