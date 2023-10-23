import { useLoaderData } from 'react-router-dom';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const productDetails = useLoaderData();
  const {
    itemName,
    itemPrice,
    itemImage,
    itemCatagory,
    discription,
    brandName,
    rating,
  } = productDetails;

  const cart = {
    itemName,
    itemPrice,
    itemImage,
    itemCatagory,
    quantity: 1,
    userEmail: user.email,
  };

  const handleAddItem = () => {
    fetch('https://martaxo-server.vercel.app/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Product Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(cart);
  };
  return (
    <div className='py-10 px-2'>
      <div className='container mx-auto flex gap-6 flex-col md:flex-row'>
        <figure className='rounded-3xl h-auto md:flex-1'>
          <img src={itemImage} className='w-full' />
        </figure>
        <div className='py-6 bg-white text-black dark:bg-black dark:text-white  md:flex-1'>
          <div className='text-3xl font-bold capitalize'>
            <h2>{itemName}</h2>
          </div>
          <div className='divider'></div>
          <div className='text-lg capitalize mb-8'>
            <div className='flex flex-col lg:flex-row w-full gap-4'>
              <div className='flex flex-row justify-start p-4 items-center flex-grow bg-neutral-100 text-black place-items-center'>
                <span className='font-bold inline-block'>
                  Brand Name :&nbsp;
                </span>
                <span className='font-bold inline-block'>{brandName}</span>
              </div>
              <div className='flex flex-row justify-start p-4 items-center flex-grow bg-neutral-100 text-black place-items-center'>
                <span className='font-bold inline-block'>
                  Product Type :&nbsp;
                </span>
                <span className='font-bold inline-block'>{itemCatagory}</span>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span className='bg-neutral-300 px-1 rounded-sm font-bold text-black'>
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
            <button
              onClick={handleAddItem}
              className='btn bg-orange-500 hover:bg-green-500 text-md font-bold text-white'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
