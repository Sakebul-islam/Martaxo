import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

import logo from '../../assets/images/logo.png';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
  return (
    <div className='bg-gray-200 dark:bg-gray-950 shadow  lg:sticky top-0 z-50'>
      <div className='container mx-auto flex flex-col xl:flex-row justify-between items-center py-5 gap-6'>
        <figure className='max-w-[200px]'>
          <Link
            to='/'
            title='MARTAXO'
            draggable='false'
            className='flex gap-1 justify-start items-center text-xl font-bold text-black dark:text-white drop-shadow-[0px_0px_1px_rgba(255,255,255,9)]'
          >
            <img src={logo} alt='MARTAXO' draggable='false' />
            <h2>MARTAXO</h2>
          </Link>
        </figure>
        <div className='gap-3 sm:gap-5 flex flex-col lg:flex-row justify-between items-center'>
          <ul className='flex flex-wrap sm:flex-nowrap justify-center md:justify-end gap-2 sm:gap-4 uppercase font-semibold'>
            <li className=''>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `
                  px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white
                  ${isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/addbrands'
                className={({ isActive }) =>
                  `
                  px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white
                  ${isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''}`
                }
              >
                Add Brand
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/addproduct'
                className={({ isActive }) =>
                  `
                  px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white
                  ${isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''}`
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/cart'
                className={({ isActive }) =>
                  `
                  px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white
                  ${isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''}`
                }
              >
                My Cart
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `
                  px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white
                  ${isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/profile'
                className={({ isActive }) =>
                  `
                  px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white
                  ${isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''}`
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
                <button className='px-2 py-1 sm:px-4 sm:py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-lg'>
                  Login
                </button>
              </Link>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
