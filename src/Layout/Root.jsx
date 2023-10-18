import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';


const Root = () => {
  return (
    <div className='font-dosis text-base'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
