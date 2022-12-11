import React from 'react';
import facebook from '../../../assets/facebook.png';
import github from '../../../assets/github.png';
import linkedin from '../../../assets/linkdin.png';


const FindInformation = () => {
return (
<div data-aos="fade-up"
     data-aos-duration="3000" className=''>
    <h1 className='text-center font-serif text-4xl font-bold mt-12'>FIND ME ON</h1>
    <h4 className='text-xl text-center mt-4'>Feel free to connect with me</h4>
 <div className='text-center'>
<button><a href="https://github.com/Farhadhossain1" target="!blank"><img className='w-16 p-3'  src={github} alt="" /></a></button>
<button><a href="https://www.facebook.com/bornohin.kobi.5/" target= "!blank"><img  className='w-16 p-3'   src={facebook} alt="" /></a></button>
<button><a href="https://www.linkedin.com/in/farhad-hossain-907b41250/"  target= "!blank"><img  className='w-16 p-3'  src={linkedin} alt="" /></a></button>
</div>
</div>
    );
};

export default FindInformation;