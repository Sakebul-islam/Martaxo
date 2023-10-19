import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  return (
    <Link
      to={brand.brandName}
      className='relative h-full place-content-center rounded-md inline-block'
    >
      <figure className='bg-gray-100 flex justify-center items-center p-2 rounded-md'>
        <img
          src={brand.brandImage}
          alt={brand.brandName}
          title={brand.brandName}
          className='w-full'
        />
      </figure>
      <div
        className='flex justify-center items-end absolute top-0 left-0 w-full h-full'
        title={brand.brandName}
      >
        <span className='w-full h-auto text-center py-4 text-white font-semibold capitalize text-xl relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-30 after:bg-black z-10 after:-z-10 after:rounded-b-md'>
          {brand.brandName}
        </span>
      </div>
    </Link>
  );
};

export default BrandCard;
