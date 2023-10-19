import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AddBrand from '../components/AddBrand/AddBrand';
import AddProduct from '../Pages/AddProduct/AddProduct';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/brands'),
      },
      {
        path: '/addbrands',
        element: <AddBrand />,
      },
      {
        path: '/addproduct',
        element: <AddProduct />,
        loader: () => fetch('http://localhost:5000/brands'),
      },
    ],
  },
]);

export default routes;
