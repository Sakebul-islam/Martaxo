import about_us from '../../assets/images/About_us3.svg';

const About = () => {
  return (
    <div className='py-12 bg-white'>
      <div className='container mx-auto overflow-hidden'>
        <h2
          className='text-4xl md:text-6xl text-center font-bold mb-10'
          data-aos='flip-left'
        >
          About Us
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-1'>
          <figure className='sm:order-1 max-h-none' data-aos='zoom-in'>
            <img src={about_us} alt='' className='h-full' />
          </figure>
          <div className='text-left order-1 sm:order-2'>
            <h3 className='text-3xl py-3 font-bold'>Welcome to Martaxo</h3>
            <p className='mb-2 font-medium text-sm'>
              At Martaxo, we are passionate about bringing the latest
              technological advancements and cutting-edge electronics to your
              fingertips. As a dedicated team of tech enthusiasts, we are
              committed to providing a seamless online platform that showcases
              the most sought-after products from industry giants such as Apple,
              Samsung, Sony, Google, Intel, and more. Our mission is to simplify
              your technology shopping experience by offering a comprehensive
              range of gadgets, devices, and accessories that cater to your
              every need. With a focus on innovation and customer satisfaction,
              we aim to redefine the way you engage with technology, making it
              accessible and exciting for everyone.
            </p>
            <ol className='list-decimal pl-6 text-sm font-semibold'>
              <h3 className='font-bold text-lg -ml-6'>Our Goals</h3>
              <li>Introduce cutting-edge innovation to simplify daily life.</li>
              <li>Offer a diverse range of tech products for every need.</li>
              <li>
                Foster a seamless and user-friendly online shopping experience.
              </li>
              <li>
                Provide comprehensive tech solutions for businesses and
                individuals.
              </li>
              <li>
                Establish a reputation as a reliable source for the latest
                industry updates and trends.
              </li>
              <li>
                Strive to become a one-stop destination for all
                technology-related needs and inquiries.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
