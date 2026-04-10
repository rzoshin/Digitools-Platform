import React from 'react';
import Cart from '../components/Cart/Cart';
import ProductCard from '../components/Products/ProductCard';
import Products from '../components/Products/Products';
import Stats from '../components/Stats/Stats';

const Card = ({productsData, cartData, setCartData, isCartOpen, selectedIds, setSelectedIds, onCheckOut}) => {
    return (
        <div>
            <div className={`mt-10 ${isCartOpen ? 'block' : 'hidden'}`}>
            {
                <Cart cartData={cartData} setCartData={setCartData} onCheckOut={onCheckOut}/>
            }
            </div>
            <div className={`${isCartOpen ? 'hidden' : 'block'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10`}>
                {
                    productsData.map(product => {
                        return <ProductCard product={product} cartData={cartData} setCartData={setCartData} selectedIds={selectedIds} setSelectedIds={setSelectedIds}/>
                    })
                }
            </div>
        </div>
    );
};

export default Card;