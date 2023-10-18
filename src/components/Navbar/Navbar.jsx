import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className='bg-gray-200 shadow shadow-gray-300 lg:sticky top-0 z-50'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center py-5 gap-6'>
        <figure className='max-w-[200px]'>
          <Link to='/' title='MsSocial' draggable='false'>
            <img src={logo} alt='MsSocial' draggable='false' />
          </Link>
        </figure>
        <div className='gap-3 sm:gap-5 flex flex-col md:flex-row justify-between items-center'>
          <ul className='flex flex-wrap sm:flex-nowrap justify-center md:justify-end gap-2 sm:gap-4 uppercase font-semibold'>
            <li className=''>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-orange-600 text-white' : ''
                  } px-3 py-2 sm:px-4 sm:py-3 inline-block`
                }
              >
                Home
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/addproduct'
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-orange-600 text-white' : ''
                  } px-3 py-2 sm:px-4 sm:py-3 inline-block`
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/cart'
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-orange-600 text-white' : ''
                  } px-3 py-2 sm:px-4 sm:py-3 inline-block`
                }
              >
                My Cart
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-orange-600 text-white' : ''
                  } px-3 py-2 sm:px-4 sm:py-3 inline-block`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/profile'
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-orange-600 text-white' : ''
                  } px-3 py-2 sm:px-4 sm:py-3 inline-block`
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <div className='flex flex-row justify-between items-center gap-2'>
            <ul className='profile flex flex-row justify-between items-center gap-2'>
              <li className=''>
                <CgProfile className='text-2xl sm:text-4xl' />
              </li>
              <li className=''></li>
            </ul>
            <div>
              <Link to='/login'>
                <button className='px-2 py-1 sm:px-4 sm:py-2 bg-black text-white font-bold text-lg'>
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
