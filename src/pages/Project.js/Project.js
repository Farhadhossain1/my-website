import React from 'react';
import { FaGithub } from 'react-icons/fa';


const Project = ({project}) => {
    const {image, projectName, description} = project;
    return (
        <div data-aos="zoom-in-up"
        data-aos-duration="3000"
         className='border-red'>
          <div className="card w-96 h-[550px] my-12 bg-base-100 shadow-xl mx-auto border-red-400 border-2 rounded-lg">
        <figure><img className='w-44' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{projectName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className=" btn btn-primary bg-red-900 hover:bg-red-400 text-black font-bold"><FaGithub className='mr-2'></FaGithub> GitHub</button>
            {/* <button className="btn btn-primary bg-red-900 hover:bg-red-400 text-black font-bold"> <BsFillCaretRightSquareFill className='mr-2'></BsFillCaretRightSquareFill> demo</button> */}
          </div>
        </div>
      </div>
        </div>
    );
};

export default Project;