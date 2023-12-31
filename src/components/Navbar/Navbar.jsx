import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

import logo from '../../assets/images/logo.png';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext, useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [presentUser, setPresentUser] = useState({
    profilePicture: '',
    name: '',
  });

  const fetchData = async () => {
    setPresentUser({
      profilePicture: user?.photoURL,
      name: user?.displayName,
      email: user?.email,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 20);
  }, [loading]);

  const handleSignout = () => {
    logOut()
      .then(() => {
        toast.error('Successfully Logout', {
          position: 'bottom-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='bg-gray-200 dark:bg-gray-950 shadow  lg:sticky top-0 z-50'>
      <div className='container mx-auto flex flex-col xl:flex-row justify-between items-center xl:px-1 py-5 gap-6'>
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
                  `capitalize px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white whitespace-nowrap ${
                    isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/addbrands'
                className={({ isActive }) =>
                  `capitalize px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white whitespace-nowrap
                  ${
                    isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''
                  }`
                }
              >
                Add Brand
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/addproduct'
                className={({ isActive }) =>
                  `capitalize px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white whitespace-nowrap
                  ${
                    isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''
                  }`
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/cart'
                className={({ isActive }) =>
                  `capitalize px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white whitespace-nowrap
                  ${
                    isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''
                  }`
                }
              >
                My Cart
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `capitalize px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white whitespace-nowrap
                  ${
                    isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/profile'
                className={({ isActive }) =>
                  `capitalize px-3 py-2 sm:px-4 sm:py-3 inline-block text-black dark:text-white whitespace-nowrap
                  ${
                    isActive ? 'bg-orange-600 !text-white dark:!text-black' : ''
                  }`
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <div className='flex flex-row justify-between items-center gap-3'>
            <ul className='profile flex flex-row justify-between items-center gap-2'>
              <li className=''>
                {presentUser.profilePicture ? (
                  <img
                    src={presentUser.profilePicture}
                    alt={presentUser.name}
                    title={presentUser.name}
                    className='w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer'
                  />
                ) : (
                  <CgProfile className='text-2xl sm:text-4xl' />
                )}
              </li>
              <li
                className='text-black dark:text-white truncate'
                title={presentUser?.name}
              >
                <p>{presentUser?.name ? presentUser?.name : 'User Name'}</p>
              </li>
            </ul>
            <div>
              {user ? (
                <Link to='/login'>
                  <button
                    className='px-2 py-1 sm:px-4 sm:py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-lg whitespace-nowrap'
                    onClick={handleSignout}
                  >
                    Sign Out
                  </button>
                </Link>
              ) : (
                <Link to='/login'>
                  <button className='px-2 py-1 sm:px-4 sm:py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-lg whitespace-nowrap'>
                    Login
                  </button>
                </Link>
              )}
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
