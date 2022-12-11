import React from 'react';
import farhad from '../../../../assets/farhad.jpg';
import './MyInfo.css';

const MyInfo = () => {
    return (
        <div>
          <div className="card lg:card-side shadow-xl grid grid-cols-1 lg:grid-cols-2 mt-12">
        <div className='carousel-img'><figure>
          <img
         data-aos="flip-left"
         data-aos-easing="ease-in-cubic"
         data-aos-duration="2000" 
     className='h-[550px] w-96 image'  src={farhad} alt="Album"/></figure></div>
        <div className="card-body">
          <h2 className="card-title text-5xl font-semibold font-serif">Know Who I'M</h2>
          <p className='text-xl font-mono mt-4'>Hey! I'm Farhad Hossain and I love to explore myself. I explore lots of fields. At some moments, 
           my interest grows in the development sector.  <br /> Last year I hold this  sector and try  to explore the fields.I am a Front-End Developer <br />  based in Bangladesh and I have been building noteworthy  Web Developer and websites <br /> for months, which comply with the latest developer trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and idea faster.</p>
        
        </div>
      </div>
      

        </div>
    );
};

export default MyInfo;