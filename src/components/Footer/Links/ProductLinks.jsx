import React from 'react';

const ProductLinks = () => {
    return (
        <div>
            <ul className="space-y-4 text-white">
                <li className="text-xl"><a href="#">Product</a></li>
                <li className="opacity-80"><a href="#">Features</a></li>
                <li className="opacity-80"><a href="#">Pricing</a></li>
                <li className="opacity-80"><a href="#">Templates</a></li>
                <li className="opacity-80"><a href="#">Integrations</a></li>
            </ul>
        </div>
    );
};

export default ProductLinks;