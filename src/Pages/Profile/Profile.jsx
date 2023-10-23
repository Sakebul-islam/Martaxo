import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className='py-10 px-1'>
      <div className='container mx-auto'>
        <div className='flex gap-4 flex-col justify-center items-center'>
          <figure className='w-full sm:w-[400px] h-[400px] flex justify-center bg-[#9c8b8b11]'>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className='rounded-md w-full'
            />
          </figure>
          <div className='bg-orange-300 w-full sm:w-[400px] text-center p-5 rounded-md'>
            <h3 className='text-4xl font-bold relative after:absolute after:w-20 sm:after:w-28 after:h-[2px] after:bg-neutral-600 after:top-2/4 after:-left-20 sm:after:-left-28 before:absolute before:w-20 sm:before:w-28 before:h-[2px] before:bg-neutral-600 before:top-2/4 before:-right-20 sm:before:-right-28 inline-block text-black'>
              User Info
            </h3>
            <ul className='text-left text-black'>
              <li>
                <span className='font-bold'>Name : </span>
                <span>{user?.displayName}</span>
              </li>
              <li>
                <span className='font-bold'>Email : </span>
                <span>{user?.email}</span>
              </li>
              <li>
                <span className='font-bold'>Account Creation Time : </span>
                <span>{user?.metadata?.creationTime}</span>
              </li>
              <li>
                <span className='font-bold'>last SignIn Time : </span>
                <span>{user?.metadata?.lastSignInTime}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
