import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import image2 from '../../../assets/image2.JPG';

const Myself = () => {
    return (
        <div className="hero min-h-screen mt-[-80px]">
        <div className="hero-content flex-col lg:flex-row">
          <img data-aos="flip-left"
     data-aos-easing="ease-in-cubic"
     data-aos-duration="2000"
      src={image2} className=" shadow-2xl w-96 rounded-full"  alt=''/>
          <div className='ml-10'>
            <div>
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'rgb(195, 150, 52)',
          fontWeight: 700,
          fontSize: '3.5em',
        }}
        startDelay={500}
        cursorColor="#3F3D56"
        multiText={[
          'let me introduce myself to you !!',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
        </div>
            <p className="py-6 text-3xl font-bold">My passion is coding.</p>
            <p className='text-xl font-mono'>I am Quite an Expert in HTML, CSS, Javascript, React JS, Express JS, MongoDB, and Node Js.</p>
            <p className='text-xl font-mono'>I take the challenge of building new  Web <br /> Technologies and Products
Whenever possible, I also apply my passion for Penetration Testing....</p>
          </div>
        </div>
      </div>
    );
};

export default Myself;