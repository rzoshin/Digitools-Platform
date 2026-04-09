import React from 'react';

const CompanyLinks = () => {
    return (
        <div>
            <ul className="space-y-4 text-white">
                <li className="text-xl"><a href="#">Company</a></li>
                <li className="opacity-80"><a href="#">About</a></li>
                <li className="opacity-80"><a href="#">Pricing</a></li>
                <li className="opacity-80"><a href="#">Templates</a></li>
                <li className="opacity-80"><a href="#">Integrations</a></li>
            </ul>
        </div>
    );
};

export default CompanyLinks;