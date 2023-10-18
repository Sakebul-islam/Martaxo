import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const AddBrand = () => {
  const handleBrand = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandName.value;
    const brandImage = form.brandImage.value;
    const brand = { brandName, brandImage };

    fetch('http://localhost:5000/brands', {
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
    <div>
      <div className='hero min-h-screen bg-base-200 py-8 md:py-0'>
        <div className='hero-content flex-col w-full'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold mb-5'>Add Brand</h1>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handleBrand}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Brand Name</span>
                </label>
                <input
                  type='text'
                  name='brandName'
                  placeholder='Enter Brand Name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Brand Image</span>
                </label>
                <input
                  type='text'
                  name='brandImage'
                  placeholder='Enter Brand Image URL'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrand;
