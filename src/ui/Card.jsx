import { useContext } from 'react';
import Cart from '../components/Cart/Cart';
import ProductCard from '../components/Products/ProductCard';
import { dataContext } from '../context/DataProvider';

const Card = () => {
    const requiredData = useContext(dataContext);
    const { isCartOpen, productsData } = requiredData;
    return (
        <div>
            <div className={`mt-10 ${isCartOpen ? 'block' : 'hidden'}`}>
            {
                <Cart/>
            }
            </div>
            <div className={`${isCartOpen ? 'hidden' : 'block'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10`}>
                {
                    productsData.map(product => {
                        return <ProductCard product={product}/>
                    })
                }
            </div>
        </div>
    );
};

export default Card;