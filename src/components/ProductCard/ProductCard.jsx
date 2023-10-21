import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const {
    _id,
    brandName,
    discription,
    itemCatagory,
    itemImage,
    itemName,
    itemPrice,
    rating,
  } = product;

  return (
    <div className='p-4 bg-neutral-200 w-screen sm:w-auto'>
      <figure className='bg-white'>
        <img src={itemImage} alt={itemName} title={itemName} />
      </figure>
      <div className='py-4 space-y-1'>
        <h3 className='text-xl font-bold capitalize truncate' title={itemName}>
          {itemName}
        </h3>
        <div className='text-lg capitalize'>
          <span className='font-bold'>Brand : </span>
          <span>{brandName}</span>
        </div>
        <div className='text-lg capitalize'>
          <span className='font-bold'>Item Type : </span>
          <span>{itemCatagory}</span>
        </div>
        <div className='flex gap-3 justify-start items-center'>
          <span className='font-bold'>Item Rating : </span>
          <div>
            {<Rating style={{ maxWidth: 100 }} value={rating} readOnly />}
          </div>
        </div>
        <div className=''>
          <span className='font-bold'>Price : </span>
          <span>${itemPrice}</span>
        </div>
        <div className='divider'></div>
        <div className='flex justify-between items-center'>
          <button className='btn rounded-none bg-orange-500 hover:bg-green-500 text-white font-bold'>
            Details
          </button>
          <Link
            to={`/brand/${brandName}/${_id}`}
            className='btn rounded-none bg-orange-500 hover:bg-green-500 text-white font-bold'
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
