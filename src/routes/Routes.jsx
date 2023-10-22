import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AddBrand from '../Pages/AddBrand/AddBrand';
import AddProduct from '../Pages/AddProduct/AddProduct';
import BrandDetails from '../Pages/BrandDetails/BrandDetails';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';
import Contact from '../Pages/Contact/Contact';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
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
      {
        path: '/brand/:brandpath',
        element: <BrandDetails />,
        loader: () => fetch('http://localhost:5000/brands'),
      },
      {
        path: '/brand/:brandname/:id',
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
