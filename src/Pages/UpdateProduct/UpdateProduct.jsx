import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
  const productInfo = useLoaderData();
  const {
    _id,
    itemName,
    itemImage,
    brandName,
    itemCatagory,
    itemPrice,
    discription,
    rating,
  } = productInfo;

  const [ratings, setRatings] = useState(rating);
  const [brands, setBrands] = useState([]);
  const [loadBrand, setLoadBrand] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState(brandName);

  useEffect(() => {
    fetch('https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/brands')
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoadBrand(false);
      })
      .catch((error) => console.error('Error fetching brand data: ', error));
  }, []);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedItemName = form.itemName.value.toLowerCase();
    const updatedItemImage = form.itemImage.value;
    const updatedBrandName = form.brandName.value.toLowerCase();
    const updatedItemCatagory = form.itemCatagory.value.toLowerCase();
    const updatedItemPrice = form.itemPrice.value;
    const updatedDiscription = form.discription.value;
    if (
      !updatedItemName ||
      !updatedItemImage ||
      !updatedBrandName ||
      !updatedItemCatagory ||
      !updatedItemPrice ||
      !updatedDiscription
    ) {
      Swal.fire('Please fill all fields!');
    } else {
      const updateProduct = {
        itemName: updatedItemName,
        itemImage: updatedItemImage,
        brandName: updatedBrandName,
        itemCatagory: updatedItemCatagory,
        itemPrice: updatedItemPrice,
        discription: updatedDiscription,
        rating: ratings,
      };
      fetch(
        `https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/products/${_id}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateProduct),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              position: 'center-center',
              icon: 'success',
              title: 'Product Updated Successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            productInfo.itemName = updatedItemName;
            productInfo.itemImage = updatedItemImage;
            productInfo.brandName = updatedBrandName;
            productInfo.itemCatagory = updatedItemCatagory;
            productInfo.itemPrice = updatedItemPrice;
            productInfo.discription = updatedDiscription;
          }
        })
        .catch((error) => {
          console.error('Error updating product: ', error);
        });
    }
  };

  return (
    <div className='container mx-auto px-2'>
      <div className='w-full sm:w-4/5 lg:w-2/3 shadow-2xl p-8 my-16 bg-gray-300 text-black mx-auto'>
        <form onSubmit={handleFormData} className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='itemName'>Item Name</label>
            <input
              type='text'
              name='itemName'
              id='itemName'
              defaultValue={itemName}
              placeholder='Please Enter Item Name'
              className='focus:outline-none p-2 capitalize bg-white'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='itemImage'>Item Image URL</label>
            <input
              type='text'
              name='itemImage'
              id='itemImage'
              defaultValue={itemImage}
              placeholder='Please Enter Image URL'
              className='focus:outline-none p-2 bg-white'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='brandName'>Select Brand</label>
            <select
              name='brandName'
              id='brandName'
              value={selectedBrand}
              onChange={handleBrandChange}
              className='focus:outline-none p-2 capitalize bg-white'
            >
              <option>Select One</option>
              {!loadBrand &&
                brands.map((brand) => (
                  <option key={brand._id}>{brand.brandName}</option>
                ))}
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='itemCatagory'>Item Catagory</label>
            <input
              type='text'
              name='itemCatagory'
              id='itemCatagory'
              step='any'
              defaultValue={itemCatagory}
              placeholder='Please Enter Item Category'
              className='focus:outline-none p-2 bg-white'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='itemPrice'>Price (Must be a Number)</label>
            <div className='relative overflow-hidden'>
              <span className='absolute top-2/4 -translate-y-2/4 left-0 w-10 bg-orange-500 h-full grid place-content-center font-bold text-white'>
                $
              </span>
              <input
                type='text'
                name='itemPrice'
                id='itemPrice'
                defaultValue={itemPrice}
                placeholder='1000'
                className='focus:outline-none w-full p-2 ml-10 bg-white'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='discription'>Discription</label>
            <textarea
              name='discription'
              id='discription'
              defaultValue={discription}
              cols='30'
              rows='8'
              className='focus:outline-none p-2 resize-none bg-white'
            ></textarea>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='rating'>Rating</label>
            <Rating
              style={{ maxWidth: 150 }}
              value={ratings}
              onChange={setRatings}
            />
          </div>
          <div>
            <button
              type='submit'
              className='btn btn-info text-white bg-orange-500 border-orange-500 hover:bg-orange-500 hover:border-orange-500 rounded-none'
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
