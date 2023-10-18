import BrandCard from '../BrandCard/BrandCard';

BrandCard;

const BrandSection = ({ brands }) => {
  return (
    <div className='container mx-auto py-6 px-2'>
      <div>
        <h2 className='text-center text-4xl md:text-6xl font-bold mb-10'>
          Brands Section
        </h2>
        <div className='grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 h-full mt-6'>
          {brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
