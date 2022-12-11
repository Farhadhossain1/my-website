import React from 'react';
import computer from '../../assets/computer.png';
import home from '../../assets/home.png';
import travail from '../../assets/traval.png';
import Project from '../Project.js/Project';

const Projects = () => {
    const projects = [
        {
            id: 1,
            projectName: 'AllForm',
            description: 'Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage',
            image: home

        },
        {
            id: 1,
            projectName: 'Travol',
            description: 'Website for Tourist Guide. I am trying also include,service website including adding or removing services. (Authorization, Authentication).Form to leave reviews for the clients to show on the detail to pages. If a customer wants to buy package then he can buy it. ',
            image: travail

        },
        {
            id: 1,
            projectName: 'Hex Clan',
            description: 'Website for computer education. I am trying also include,service website including adding or removing services. (Authorization, Authentication).Form to leave reviews for the clients to show on the detail pages. If a customer wants to buy package then he can buy it.And view more courses',
            image: computer

        }
    ]
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