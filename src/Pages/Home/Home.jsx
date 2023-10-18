import { useLoaderData } from 'react-router-dom';
import Map from '../../components/Map/Map';
import BrandSection from '../../components/BrandSection/BrandSection';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <>
      <Banner />
      <BrandSection brands={brands} />
      <Map />
    </>
  );
};

export default Home;
