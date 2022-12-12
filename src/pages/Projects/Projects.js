import React, { useEffect, useState } from 'react';
import Project from '../Project.js/Project';

const Projects = () => {

const [projects, setProjects] = useState([]);

useEffect( ()=>{
    fetch("projectsCarts.json")
    .then(res => res.json())
    .then(data => setProjects(data))
},[])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto'>
            {
                projects.map(project => <Project
                key={project.id}
                project={project}
                ></Project>)
            }
        </div>
    );
};

export default Projects;