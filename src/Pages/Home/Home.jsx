import { useLoaderData } from 'react-router-dom';
import Map from '../../components/Map/Map';
import BrandSection from '../../components/BrandSection/BrandSection';

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <>
      <BrandSection brands={brands}/>
      <Map />
    </>
  );
};

export default Home;
