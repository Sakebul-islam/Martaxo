import { useLoaderData } from 'react-router-dom';
import Zoom from 'react-img-zoom-gdn';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ProductDetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
  const {
    itemName,
    itemPrice,
    itemImage,
    itemCatagory,
    discription,
    brandName,
    rating,
  } = productDetails;
  return (
    <div className='py-10'>
      <div className='container mx-auto grid gap-6 grid-cols-2'>
        <figure className='rounded-3xl'>
          <Zoom
            img={itemImage}
            zoomScale={2}
            height={600}
            transitionTime={0.5}
          />
          ;
        </figure>
        <div className='py-6'>
          <div className='text-3xl font-bold capitalize'>
            <h2>{itemName}</h2>
          </div>
          <div className='divider'></div>
          <div className='text-lg capitalize mb-8'>
            <div className='flex w-full'>
              <div className='flex flex-row justify-start p-4 items-center flex-grow bg-neutral-200  place-items-center'>
                <span className='font-bold inline-block'>
                  Brand Name :&nbsp;
                </span>
                <span className='font-bold inline-block'>{brandName}</span>
              </div>
              <div className='divider divider-horizontal'></div>
              <div className='flex flex-row justify-start p-4 items-center flex-grow bg-neutral-200  place-items-center'>
                <span className='font-bold inline-block'>
                  Product Type :&nbsp;
                </span>
                <span className='font-bold inline-block'>{itemCatagory}</span>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span className='bg-neutral-300 px-1 rounded-sm font-bold'>
              {rating}
            </span>
          </div>
          <div className='divider'></div>
          <div>
            <h2 className='mb-2 text-lg font-bold'>Discription : </h2>
            <p>{discription}</p>
          </div>
          <div className='divider'></div>
          <div className='flex gap-10 justify-start items-center'>
            <h2 className='text-2xl font-bold'> &#36;&nbsp;{itemPrice}</h2>
            <button className='btn bg-orange-500 hover:bg-green-500 text-md font-bold text-white'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
