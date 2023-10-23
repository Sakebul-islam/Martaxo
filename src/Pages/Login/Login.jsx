import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BiHide, BiShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../providers/AuthProvider';

import LoginWith from '../../components/LoginWith/LoginWith';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError('');
    setSuccess('');
    signIn(email, password)
      .then(() => {
        setSuccess('Successfully Login');
        e.target.reset();
        navigate(location?.state ? location.state : '/');
        toast.success('Successfully Login', {
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
        toast.error(error.message, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  return (
    <div className='container mx-auto'>
      <form
        className='text-center w-11/12 md:w-1/2 mx-auto my-6 bg-gray-200 dark:bg-slate-300 text-black p-6'
        onSubmit={handleLogin}
      >
        <legend className='text-2xl font-bold'>Signin Form</legend>

        <div className='flex flex-col text-left my-4'>
          <label htmlFor='email'>Enter Email</label>
          <input
            className='outline-none p-2'
            type='email'
            name='email'
            id='email'
            placeholder='Please Enter Your Email'
            required
          />
        </div>
        <div className='flex flex-col text-left my-4'>
          <label htmlFor='password'>Enter Password</label>
          <div className='w-full relative'>
            <input
              className='outline-none p-2 w-full'
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              placeholder='Please Enter Your Passwoard'
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-2/4  -translate-y-1/2 right-2 inline-block cursor-pointer p-2'
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
        </div>
        <div className='mb-3 text-left'></div>
        <div className='mb-6'>
          <button className='bg-orange-600 text-white px-4 py-2 text-lg font-semibold hover:px-5 duration-300 hover:bg-orange-500'>
            Sign In
          </button>
        </div>
        <div>
          Create a new account&nbsp;
          <Link to='/register' className='text-blue-600 font-semibold'>
            Sign Up
          </Link>
        </div>
        <div className='divider after:bg-black before:bg-black'>OR</div>
        <LoginWith />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
