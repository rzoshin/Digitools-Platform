import userImg from '../../assets/user.png'
import packageImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'

const Started = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7.5'>
            <div className='p-6 flex items-center justify-center bg-base-100 w-95 h-95 rounded-2xl'><div className='flex flex-col gap-4 items-center'><img src={userImg}   width='60px' height='60px'></img><h3 className='font-bold text-2xl text-[#101727]'>Create Account</h3><p  className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p></div></div>
            <div className='p-6 flex items-center justify-center bg-base-100 w-95 h-95 rounded-2xl'><div className='flex flex-col gap-4 items-center'><img src={packageImg}width='60px' height='60px'></img><h3 className='font-bold text-2xl text-[#101727]'>Choose Products</h3><p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p></div></div>
            <div className='p-6 flex items-center justify-center bg-base-100 w-95 h-95 rounded-2xl'><div className='flex flex-col gap-4 items-center'><img src={rocketImg} width='60px' height='60px'></img><h3 className='font-bold text-2xl text-[#101727]'>Start Creating</h3><p  className='text-[#627382]'>Download and start using your premium tools immediately.</p></div></div>
        </div>
    );
};

export default Started;