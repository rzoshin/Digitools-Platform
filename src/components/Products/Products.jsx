import { use } from 'react';
import ProductCard from './ProductCard';

const Premium = ({productsPromise}) => {
    const productsData = use(productsPromise);

    return (
        <div className="mt-30 max-w-[80%] mx-auto">
            <div className='flex flex-col text-center gap-4'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div className='flex items-center justify-center'>
                    <div className='rounded-[100px] p-1 border border-[#F6F6F6] w-fit flex'>
                        <button className='rounded-full py-3.5 px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>Products</button>
                        <button className='rounded-full py-3.5 px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>Cart</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10'> 
            {
                productsData.map(product => {
                    return <ProductCard key={product.id} product={product}/>

                })
            }
            </div>
        </div>
    );
};

export default Premium;