import { Rating } from '@smastrom/react-rating';
import Swal from 'sweetalert2';

import '@smastrom/react-rating/style.css';
import 'sweetalert2/src/sweetalert2.scss';

import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductForm = () => {
  const [rating, setRating] = useState(0);
  const brandList = useLoaderData();
  console.log(brandList);
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value.toLowerCase();
    const itemImage = form.itemImage.value;
    const brandName = form.brandName.value.toLowerCase();
    const itemCatagory = form.itemCatagory.value.toLowerCase();
    const itemPrice = form.itemPrice.value;
    const discription = form.discription.value;
    if (!itemName) {
      Swal.fire('Please Enter Item Name!');
    } else if (!itemImage) {
      Swal.fire('Please Enter Item Image URL!');
    } else if (brandName === 'select one') {
      Swal.fire('Please Select One Brand Name!');
    } else if (!itemCatagory) {
      Swal.fire('Please Enter Item Catagory!');
    } else if (!itemPrice || itemPrice === 0) {
      Swal.fire('Please Enter Product Price!');
    } else if (!discription) {
      Swal.fire('Please Give Product Discription!');
    } else if (rating === 0) {
      Swal.fire('Please Give Rating!');
    } else {
      const product = {
        itemName,
        itemImage,
        brandName,
        itemCatagory,
        itemPrice,
        discription,
        rating,
      };
      fetch(
        'https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/products',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        }
      )
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
            form.reset();
            setRating(0);
          }
        });
    }
  };
  return (
    <div className='w-full sm:w-4/5 lg:w-2/3 shadow-2xl mx-auto p-8 my-16 bg-gray-300 text-black'>
      <form onSubmit={handleFormData} className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Item Name</label>
          <input
            type='text'
            name='itemName'
            id='itemName'
            placeholder='Please Enter Item Name'
            className='focus:outline-none p-2 bg-white'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='itemImage'>Item Image URL</label>
          <input
            type='text'
            name='itemImage'
            id='itemImage'
            placeholder='Please Enter Image URL'
            className='focus:outline-none p-2 bg-white'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='brandName'>Select Brand</label>
          <select
            name='brandName'
            id='brandName'
            className='focus:outline-none p-2 capitalize bg-white'
          >
            <option defaultValue='na'>Select One</option>

            {brandList.map((brand) => (
              <option key={brand._id} defaultValue={brand.brandName}>
                {brand.brandName}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='itemType'>Item Catagory</label>
          <input
            type='text'
            name='itemCatagory'
            id='itemCatagory'
            placeholder='Please Enter Item Name'
            className='focus:outline-none p-2 bg-white'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='itemPrice'>Price (Must be an Number)</label>
          <div className='relative overflow-hidden'>
            <span className='absolute top-2/4 -translate-y-2/4 left-0 w-10 bg-orange-500 h-full grid place-content-center font-bold text-white'>
              $
            </span>
            <input
              type='text'
              name='itemPrice'
              id='itemPrice'
              placeholder='1000'
              className='focus:outline-none w-full p-2 ml-10 bg-white'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='discription'>Description</label>
          <textarea
            name='discription'
            id='discription'
            cols='30'
            rows='8'
            className='focus:outline-none p-2 resize-none bg-white'
          ></textarea>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Rating</label>
          <Rating
            style={{ maxWidth: 150 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <div>
          <button className='btn btn-info text-white bg-orange-500 border-orange-500 hover:bg-orange-500 hover:border-orange-500 rounded-none'>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
