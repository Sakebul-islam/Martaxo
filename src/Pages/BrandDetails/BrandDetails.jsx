import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import ProductCard from '../../components/ProductCard/ProductCard';

const BrandDetails = () => {
  const [brand, setBrand] = useState({});
  const [products, setProducts] = useState([]);
  const { brandpath } = useParams();
  const [sliderLoading, setSliderLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/brands/${brandpath}`)
      .then((res) => res.json())
      .then((data) => {
        setBrand(data);
        setSliderLoading(false);
      })
      .catch((error) => console.error('Error fetching brand data: ', error));
  }, [brandpath]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/brand/${brandpath}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProductsLoading(false);
      })
      .catch((error) => console.error('Error fetching brand data: ', error));
  }, [brandpath]);
  return (
    <div className='bg-white dark:bg-gray-900 text-black '>
      {sliderLoading ? (
        <div className='h-[50vh] grid place-content-center'>
          <span className='loading loading-bars loading-lg'></span>
        </div>
      ) : (
        <Slider brand={brand} />
      )}
      <div className='py-8 container mx-auto'>
        {productsLoading ? (
          <div className='h-[50vh] grid place-content-center'>
            <span className='loading loading-ring loading-lg'></span>
          </div>
        ) : products.length > 0 ? (
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className='h-[50vh] flex justify-center items-center font-bold text-5xl'>
          ❗ No tada Found ❗
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
