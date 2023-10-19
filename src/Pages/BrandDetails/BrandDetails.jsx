import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';

const BrandDetails = () => {
  const [brand, setBrand] = useState({});
  const { brandpath } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/brands/${brandpath}`)
      .then((res) => res.json())
      .then((data) => setBrand(data))
      .catch((error) => console.error('Error fetching brand data: ', error));
  }, [brandpath]);

  return <div>{brand._id ? <Slider brand={brand} /> : ''}</div>;
};

export default BrandDetails;
