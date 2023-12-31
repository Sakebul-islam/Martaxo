import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div className='font-redHed text-base bg-white dark:bg-black'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
