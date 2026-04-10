import firstImg from '../../assets/products/writing_tool.png'
import secondImg from '../../assets/products/design-tool.png'
import thirdImg from '../../assets/products/Camera.png'
import fourthImg from '../../assets/products/operation.png'
import fifthImg from '../../assets/products/portfolio.png'
import sixthImg from '../../assets/products/social-media.png'

import img from '../../assets/products/shopping-cart.png'
const CartCard = ({cart}) => {
    console.log(cart)
    return (
        <div className='flex justify-between items-center bg-[#F9FAFC] p-5 rounded-2xl'>
            <div className='flex gap-4'>
                <div className='bg-base-100 w-15 h-15 rounded-full flex items-center justify-center'>
                    <img src={`${cart.id == 1 ? firstImg : cart.id == 2 ? secondImg : cart.id == 3 ? thirdImg : cart.id == 4 ? fourthImg : cart.id == 5 ? fifthImg : cart.id == 6 ? sixthImg : cart.icon}`} width='32px' height='32px'></img>
                </div>
                
                <div>
                    <div className='font-semibold text-xl'>{cart.name}</div>
                    <span>${cart.price}</span>
                </div>
            </div>
            <div className='text-red-500'>
                Remove
            </div>
            
        </div>
    );
};

export default CartCard;