import { use, useState } from 'react';
import Card from '../../ui/Card';
import ProductCard from './ProductCard';
import { toast } from 'react-toastify';

const Products = ({productsPromise}) => {
    const productsData = use(productsPromise);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);

    const handleCartOpen = () => {
        setIsCartOpen(true);
    }
    const handleCartClose = () => {
        setIsCartOpen(false);
        productsData.map(product => {
            <ProductCard product={product} />
        })
    }
    const handleCheckOut = () => {
        setCartData([]);
        setSelectedIds([]);
        toast.success('Checkout successful!');
    };
    return (
        <div className="mt-30 max-w-[80%] mx-auto">
            <div className='flex flex-col text-center gap-4'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div className='flex items-center justify-center'>
                    <div className='rounded-[100px] p-1 border border-[#F6F6F6] w-fit flex'>
                        <button onClick={() => handleCartClose()} className={`rounded-full py-3.5 px-6 ${isCartOpen ? 'bg-white text-black' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} font-bold`}>Products</button>
                        <button onClick={() => handleCartOpen()} className={`rounded-full py-3.5 px-6 ${isCartOpen ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white text-black'} font-bold`}>Cart</button>
                    </div>
                </div>
            </div>
            <Card productsData={productsData} cartData={cartData} setCartData={setCartData} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} selectedIds={selectedIds} setSelectedIds={setSelectedIds} onCheckOut={handleCheckOut}/>
        </div>
    );
};

export default Products;