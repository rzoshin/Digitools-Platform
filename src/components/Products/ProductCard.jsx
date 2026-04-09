import tickMark from '../../assets/products/check.png'
import firstImg from '../../assets/products/writing_tool.png'
import secondImg from '../../assets/products/design-tool.png'
import thirdImg from '../../assets/products/Camera.png'
import fourthImg from '../../assets/products/operation.png'
import fifthImg from '../../assets/products/portfolio.png'
import sixthImg from '../../assets/products/social-media.png'


const ProductCard = ({product}) => {
    return (
        <div className='flex flex-col relative p-6 gap-4 border border-[#F2F2F2] rounded-2xl'>
            <span className={`absolute top-2.5 right-2.5 badge badge-soft ${product.tagType === 'best-seller' ? 'badge-warning' : product.tagType === 'popular' ? 'badge-primary' : 'badge-success'}`}>{product.tag}</span>
            <img src={`${product.id == 1 ? firstImg : product.id == 2 ? secondImg : product.id == 3 ? thirdImg : product.id == 4 ? fourthImg : product.id == 5 ? fifthImg : product.id == 6 ? sixthImg : product.icon}`} width='32px' height='32px'></img>
            <h3 className="font-bold text-2xl text-[#101727]">{product.name}</h3>
            <p className='text-[#627382]'>{product.description}</p>
            <p><span className='font-bold text-2xl'>${product.price.toFixed(2)}</span>/{product.period}</p>
            <ul>
                {product.features.map(feature => <li key={feature} className='flex items-center gap-2'><img src={tickMark} width='20px' height='20px'></img>{feature}</li>)}
            </ul>
            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3.75 rounded-[100px] font-bold'>Buy Now</button>
        </div>
    );
};

// "id": 1,
// "name": "AI Writing Pro",
// "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
// "price": 29,
// "period": "monthly",
// "tag": "Best Seller",
// "tagType": "best-seller",
// "features": [
// "Unlimited AI generations",
// "50+ writing templates",
// "Grammar checker"
// ],
// "icon": "src/assets/products/writing_tool.png"

export default ProductCard;