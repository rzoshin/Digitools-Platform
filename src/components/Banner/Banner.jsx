import bannerImg from '../../assets/banner.png'
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='flex gap-15 py-15 items-center container mx-auto'>
            <div className='flex flex-col gap-4'>
                <div className='badge'>New:AI-Powered Tools Available</div>
                <h1 className='font-extrabold text-7xl text-[#101727]/90'>Supercharge Your Digital Workflow</h1>
                <p className='text-lg text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.
                </p>
                <div className='flex mt-8 gap-4'>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-4 px-3 text-white'>Explore Products</button>
                    <button className='btn btn-outline flex items-center gap-1 border border-['> <IoPlayOutline />Watch Demo</button>
                </div>        
            </div>
            <div>   
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;