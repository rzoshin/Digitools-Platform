import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    return (
        <div id="pricing" className='max-w-[80%] mx-auto mb-30'>
            <h1 className='text-5xl font-extrabold text-[#101727] text-center mb-4'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382] text-center mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7.5'>
            {
                pricingData.map(pricing => {
                    return <PricingCard key={pricing.id} pricing={pricing} />
                })

            }
            </div>
        </div>
    );
};

export default Pricing;