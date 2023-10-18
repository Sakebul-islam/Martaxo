import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AddBrand from '../components/AddBrand';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/addbrands',
        element: <AddBrand />,
      },
    ],
  },
]);

export default routes;
