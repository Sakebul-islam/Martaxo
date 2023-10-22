import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const handleFormData = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_wnxuzct',
        'template_s405cej',
        form.current,
        'V0I_xuKYrNVNhPqJ3'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Your message has been sent successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fillup form all data fild',
          });
        }
      );
  };
  return (
    <div className='bg-white text-black dark:bg-neutral-900 dark:text-white contact-page'>
      <div className='container mx-auto py-10 px-5 sm:px-1'>
        <form
          name='Contact_MsSocial'
          value='MsSocial'
          ref={form}
          onSubmit={handleFormData}
        >
          <h1 className='text-4xl font-bold text-center'>Contact Us</h1>
          <p className='text-xl text-center'>
            Please take a moment to get in touch, we will get back to you
            shortly.
          </p>

          <div className='column'>
            <label htmlFor='the-name'>Your Name</label>
            <input type='text' name='name' id='the-name' required />

            <label htmlFor='the-email'>Email Address</label>
            <input type='email' name='email' id='the-email' required />

            <label htmlFor='the-phone'>Phone Number</label>
            <input type='tel' name='phone' id='the-phone' required />

            <label htmlFor='the-reason'>How can we help you?</label>
            <select name='reason' id='the-reason' required>
              <option value=''>Choose one</option>
              <option value='web'>Login issue</option>
              <option value='video'>Product don&apos;t show</option>
              <option value='3d'>Product doesn&apos;t update</option>
            </select>
          </div>
          <div className='column'>
            <label htmlFor='the-message'>Message</label>
            <textarea name='message' id='the-message' required></textarea>
            <label>
              <input
                type='checkbox'
                name='newsletter'
                value='yes'
                required
                className='accent-slate-200 mr-3'
              />
              Join our mailing list?
            </label>
            <input
              type='submit'
              value='Send Message'
              className='p-3 cursor-pointer'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
