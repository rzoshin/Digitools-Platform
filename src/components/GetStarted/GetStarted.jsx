import React from 'react';
import Started from './Started';

const GetStarted = () => {
    return (
        <div id="started" className="my-30 py-30 bg-[#F9FAFC]">
            <div className='max-w-[80%] mx-auto text-center space-y-4'>
                <h1 className='text-[#101727] font-extrabold text-5xl'>Get Started in 3 Steps</h1>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                <Started />
            </div>
        </div>
    );
};

export default GetStarted;