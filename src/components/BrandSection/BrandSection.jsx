import BrandCard from '../BrandCard/BrandCard';

BrandCard;

const BrandSection = ({ brands }) => {
  return (
    <div className='bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white'>
      <div className='container mx-auto py-14 px-2'>
        <div>
          <div className='max-w-2xl mx-auto mb-8'>
            <h2 className='text-center text-3xl sm:text-4xl md:text-6xl font-bold mb-6'>
              Our Trusted Brands
            </h2>
            <p className='text-center'>
              Discover a curated selection of top-notch brands such as Sony, HP,
              Google, Apple, and Intel, alongside Samsung. These industry
              leaders are known for their quality, innovation, and reliability,
              ensuring you access the best products and technology in one place.
            </p>
          </div>
          <div className='grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 h-full mt-6'>
            {brands.map((brand) => (
              <BrandCard key={brand._id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
