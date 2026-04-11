import { FiShoppingCart } from 'react-icons/fi';
import cartImg from '../../assets/products/shopping-cart.png'
import CartCard from './CartCard';

const Cart = ({cartData, setCartData, onCheckOut, selectedIds, setSelectedIds,}) => {

    const handleCartData = () => {
        setCartData([]);
    }
    return (
        <div className='flex flex-col gap-6 p-10 border border-[#F2F2F2] rounded-2xl'>
            <h4 className='font-bold text-2xl'>Your Cart</h4>
            <div className='space-y-4'>
            {
                cartData.length === 0 ? <div className='text-[#627382] text-center p-20 flex flex-col items-center justify-center gap-4'><div><FiShoppingCart className='w-20 h-20 opacity-40'/></div><div>Your cart is empty</div></div> :
                cartData.map(cart => {
                    return <CartCard cart={cart} cartData={cartData} setCartData={setCartData} selectedIds={selectedIds} setSelectedIds={setSelectedIds}/>
                })
            }
            </div>
            <div className='flex justify-between'>
                <span>Total</span>
                <span>$ {
                    cartData.reduce((total, item) => total + item.price, 0)
                }               
                </span>
            </div>
            <button onClick={onCheckOut} className='btn block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-[100px]'>Proceed To Checkout</button>
        </div>
    );
};

export default Cart;