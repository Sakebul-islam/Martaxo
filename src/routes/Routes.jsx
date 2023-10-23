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
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Profile from '../Pages/Profile/Profile';

import PrivateRoute from '../routes/PrivateRoute';
import Cart from '../Pages/Cart/Cart';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () =>
          fetch(
            'https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/brands'
          ),
      },
      {
        path: '/addbrands',
        element: (
          <PrivateRoute>
            <AddBrand />
          </PrivateRoute>
        ),
      },
      {
        path: '/addproduct',
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            'https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/brands'
          ),
      },
      {
        path: '/brand/:brandpath',
        element: <BrandDetails />,
        loader: () =>
          fetch(
            'https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/brands'
          ),
      },
      {
        path: '/brand/:brandname/:id',
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/products/${params.id}`
          ),
      },
      {
        path: '/product/:id',
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://martaxo-server-n92vbspsb-sakebul-islam.vercel.app/products/${params.id}`
          ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
