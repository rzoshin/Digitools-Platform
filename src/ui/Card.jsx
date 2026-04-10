import React from 'react';
import Cart from '../components/Cart/Cart';
import ProductCard from '../components/Products/ProductCard';
import Products from '../components/Products/Products';
import Stats from '../components/Stats/Stats';

const Card = ({productsData, cartData, setCartData, isCartOpen}) => {
    return (
        <div>
            {
            isCartOpen ?
            <div className='mt-10'>
            {
                <Cart cartData={cartData} setCartData={setCartData}/>
            }
            </div>
            :
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10'>
                {
                    productsData.map(product => {
                        return <ProductCard product={product} cartData={cartData} setCartData={setCartData}/>
                })
                }
            </div>
            }
        </div>
    );
};

export default Card;