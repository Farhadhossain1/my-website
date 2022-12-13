import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();
    const {projectName, image,projectDetails,technology,tools,Features} = project;
    return (
      
<div>
      <h1 className='text-5xl font-bold text-center'>{projectName}</h1>
      <h3 className='text-2xl font-semibold text-center'>{projectDetails}</h3>
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
    <div>
    <h1 className='text-center text-3xl font-bold mt-12'>Technology </h1>
    <div className='text-center mt-12'>
      <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{technology[0]}</button>
    <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{technology[1]}</button>
    <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{technology[2]}</button>
    <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{technology[3]}</button>
    <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{technology[4]}</button>
    </div>
  </div>
  <div>
    <h1 className='text-center text-3xl font-bold mt-12'>Tools </h1>
    <div className='text-center mt-12'>
      <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{tools[0]}</button>
    <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{tools[1]}</button>
    <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{tools[2]}</button>
    <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{tools[3]}</button>
    <button className='mx-4 bg-gray-800 py-2 px-6 font-semibold border-red-900 border-2 rounded-lg'>{tools[4]}</button>
    </div>
  </div>

  <div>
    <h1 className=' text-3xl font-bold text-center mt-16'>Features</h1>
    <div className='mt-12 w-[1000px] mx-auto'>
    <li className='text-xl font-mono'>{Features[0]}</li>
    <li className='text-xl font-mono'>{Features[1]}</li>
    <li className='text-xl font-mono'>{Features[2]}</li>
    <li className='text-xl font-mono'>{Features[3]}</li>
    <li className='text-xl font-mono'>{Features[4]}</li>
    <li className='text-xl font-mono'>{Features[5]}</li>
    <li className='text-xl font-mono'>{Features[6]}</li>
    <li className='text-xl font-mono'>{Features[7]}</li>
    </div>

  </div>

</div>



    );
};

export default ProjectDetails;