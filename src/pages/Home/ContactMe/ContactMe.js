import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

 const ContactMe = () => {

    const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_kpyuyak',
   'template_7wt973d',
    form.current, 'iI7JLOn9uilRQnTiV')
    .then((result) => {
        console.log(result.text);
        console.log("message send")
    }, (error) => {
        console.log(error.text);
    });
};

    return (
     <div>
        <h3 className='text-xl font-semibold text-center'>Get In Touch</h3>
        <h1 className='text-5xl font-bold font-serif text-center '>Contact Me</h1>
          <div className=' border-red-400 border-2 rounded-lg mx-auto lg:w-[750px] mt-16'>
        <div className='lg:w-[630px] h-[700px] mx-auto  '>
         <form className='' ref={form} onSubmit={sendEmail}>
      <label className='text-3xl font-semibold'>Name :</label>
      <input className='py-4  my-6 mt-4  w-full text-white  text-xl'  type="text" name="user_name" /> <br />
      <label className='text-3xl font-semibold'>Email :</label>
      <input className=' py-4 my-6 mt-4  w-full text-xl text-white' type="email" name="user_email" /><br />
      <label className='text-2xl font-semibold'>Message :</label>
      <textarea className=' py-16 mt-4  w-full text-xl text-white' name="message" /> <br />
      <input className='w-full bg-red-900 mt-10  hover:bg-red-500 text-white text-xl font-semibold py-4'  type="submit" value="Submit" />
    </form>
       </div>
       </div>
     </div>
    );
};

export default ContactMe;