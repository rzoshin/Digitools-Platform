import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const SocialLinks = () => {
    return (
        <div>
            <h3 className='text-white mb-4'>Social Links</h3>
            <div className="flex gap-3">
                <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
                    <TbBrandInstagramFilled className='w-5 h-5'/>
                </div>
                <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
                    <FaFacebookSquare className='w-5 h-5'/>
                </div>
                <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
                   <FaXTwitter className='w-5 h-5'/> 
                </div>
                
            </div>
        </div>
    );
};

export default SocialLinks;