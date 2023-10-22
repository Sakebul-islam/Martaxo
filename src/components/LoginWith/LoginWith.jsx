import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';

const LoginWith = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  let location = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('object');
    signInWithGoogle()
      .then((result) => {
        navigate(navigate(location?.state ? location.state : '/'));
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
    <div className='flex gap-4 justify-center items-center'>
      <FcGoogle className='text-3xl cursor-pointer' onClick={handleLogin} />
    </div>
  );
};

export default LoginWith;
