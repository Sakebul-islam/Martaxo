/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { BiHide, BiShow } from 'react-icons/bi';
import { AuthContext } from '../../providers/AuthProvider';

import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import LoginWith from '../../components/LoginWith/LoginWith';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let photo = e.target.photo.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    setError('');
    setSuccess('');
    if (!/[A-Z]/.test(password)) {
      toast.error(`don't have a capital letter`, {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    } else if (!/[#?!@$%^&*]/.test(password)) {
      toast.error(`don't have a special character`, {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    } else if (password.length < 6) {
      toast.error(`is less than 6 characters`, {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success('User Create Successfully', {
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
        setSuccess('Successfully Submitted');
        console.log(location?.state);
        e.target.reset();
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'bottom-right',
          autoClose: 1000,
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
        className='text-center w-11/12 md:w-1/2 mx-auto my-6 bg-slate-300 p-6'
        onSubmit={handleRegister}
      >
        <legend className='text-2xl font-bold'>Resistration Form</legend>
        <div className='flex flex-col text-left my-4'>
          <label htmlFor='name'>Enter Your Name</label>
          <input
            className='outline-none p-2'
            type='text'
            name='name'
            id='name'
            placeholder='Enter Your Name'
            required
          />
        </div>
        <div className='flex flex-col text-left my-4'>
          <label htmlFor='name'>Profile Picture</label>
          <input
            className='outline-none p-2'
            type='text'
            name='photo'
            id='photo'
            placeholder='Enter Profile Picture URL'
            required
          />
        </div>
        <div className='flex flex-col text-left my-4'>
          <label htmlFor='email'>Enter Email</label>
          <input
            className='outline-none p-2'
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email'
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
              placeholder='Enter Your Password'
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
        <div className='mb-6'>
          <button className='bg-orange-600 text-white px-4 py-2 text-lg font-semibold hover:px-5 duration-300 hover:bg-orange-500'>
            Sign Up
          </button>
        </div>

        <div>
          Create a new account&nbsp;
          <Link to='/login' className='text-blue-600 font-semibold'>
            Sign In
          </Link>
        </div>
        <div className='divider'>OR</div>
        <LoginWith />
      </form>
    </div>
  );
};

export default Register;
