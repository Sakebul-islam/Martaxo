import { Link } from 'react-router-dom';
import bannerBg from '../../assets/images/banner.jpg';
import titanium from '../../assets/images/titanium.jpg';

function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${bannerBg})` }}
      className='h-screen bg-black bg-no-repeat relative lg:bg-[400px_250px] bg-[1%]'
    >
      <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center pb-80'>
        <span className='text-orange-500 text-sm'>New</span>
        <h3 className='text-xl font-bold text-gray-300 mb-2'>iPhone 15Pro</h3>
        <figure className='mb-4'>
          <img src={titanium} alt='iPhone 15Pro' />
        </figure>
        <Link
          to='/apple'
          className='btn btn-info !h-auto min-h-0 !w-auto !px-5 !py-2 !leading-normal !rounded-full font-bold text-white'
        >
          Buy
        </Link>
      </div>
    </div>
  );
}

export default Banner;
