import React from 'react';

const MySkill = ({skill}) => {

  
  
    return (
 
       <div data-aos="zoom-in-up">
        <div className=' border-red-400 m-12 border-2 rounded-lg'>
        <div className="card w-46   text-primary-content">
        <div className="card-body">
          <img src={skill.icon} alt="" />
          <p className='text-center text-2xl font-semibold'>{skill.name}</p>
        </div>
      </div>
       </div>
          
       </div>
         
    )
};

export default MySkill;