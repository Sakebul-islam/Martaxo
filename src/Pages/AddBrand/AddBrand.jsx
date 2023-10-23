import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const AddBrand = () => {
  const handleBrand = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandName.value.toLowerCase();
    const brandImage = form.brandImage.value;
    const brandSlider1 = form.brandSlider1.value;
    const brandSlider2 = form.brandSlider2.value;
    const brandSlider3 = form.brandSlider3.value;
    const sliderImage = { 0: brandSlider1, 1: brandSlider2, 2: brandSlider3 };
    const brand = { brandName, brandImage, sliderImage };
    console.log(brandSlider1, brandSlider2, brandSlider3);
    fetch('https://martaxo-server.vercel.app/brands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(brand),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire('Good job!', 'Brand Successfully Added', 'success');
          form.reset();
        }
      });
  };
  return (
    <>
      <div className='hero bg-white dark:bg-base-300 py-12'>
        <div className='hero-content flex-col w-full px-2 py-0'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold mb-5 text-black dark:text-white'>
              Add Brand
            </h1>
          </div>
          <div className='card flex-shrink-0 w-full md:w-2/3 bg-base-100 rounded-none shadow-lg'>
            <form className='card-body p-4 sm:p-8' onSubmit={handleBrand}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Brand Name</span>
                </label>
                <input
                  type='text'
                  name='brandName'
                  placeholder='Enter Brand Name'
                  className='input input-bordered rounded-sm !bg-white'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Brand Logo</span>
                </label>
                <input
                  type='text'
                  name='brandImage'
                  placeholder='Enter Brand Logo URL'
                  className='input input-bordered rounded-sm !bg-white'
                  required
                />
              </div>
              <div className='form-control gap-2'>
                <label className='label'>
                  <span className='label-text'>Brand Slider Images</span>
                </label>
                <input
                  type='text'
                  name='brandSlider1'
                  placeholder='Enter Brand Slider Image URL - 1'
                  className='input input-bordered rounded-sm !bg-white'
                  required
                />
                <input
                  type='text'
                  name='brandSlider2'
                  placeholder='Enter Brand Slider Image URL - 2'
                  className='input input-bordered rounded-sm !bg-white'
                  required
                />
                <input
                  type='text'
                  name='brandSlider3'
                  placeholder='Enter Brand Slider Image URL - 3'
                  className='input input-bordered rounded-sm !bg-white'
                  required
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn bg-orange-500 hover:bg-green-500 text-white rounded-none'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrand;
