const Map = () => {
  return (
    <div className='pt-10 bg-white overflow-hidden'>
      <h2
        className='text-4xl md:text-6xl text-center font-bold mb-10'
        data-aos='flip-left'
      >
        Our Location
      </h2>
      <div>
        <iframe
          className='w-full'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3454803839168!2d90.36326507420898!3d23.806310886629763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d7668f38db%3A0x6cb6824a39fe443f!2sMirpur%20Stadium!5e0!3m2!1sen!2sbd!4v1696784323512!5m2!1sen!2sbd'
          width='600'
          height='450'
          style={{ border: '0' }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
