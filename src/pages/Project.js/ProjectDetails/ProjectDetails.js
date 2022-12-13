import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();
    const {projectName, image} = project;
    return (
        <div>
            {/* <h2 className='text-3xl '>This is projects details !!</h2>
            <h1 className='text-4xl'>{projectName}</h1>
            <img src={image[0]} alt="" />
            <img src={image[1]} alt="" />
            <img src={image[2]} alt="" />
                <li>helo</li> */}


<div>
    <div>
        
    <div className="carousel lg:w-[900px] mx-auto mt-12 rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image[0]} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image[1]} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image[2]} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    </div>
</div>



        </div>
    );
};

export default ProjectDetails;