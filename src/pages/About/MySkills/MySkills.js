import React from 'react';
import bootstrap from '../../../assets/bootstrap.png';
import css from '../../../assets/css.png';
import daisyUI from '../../../assets/daisyUI.png';
import html from '../../../assets/html.png';
import js from '../../../assets/js.png';
import nodejs from '../../../assets/nodejs.png';
import react from '../../../assets/react.png';

import MySkill from '../MySkill/MySkill';


const MySkills = () => {
     const skills = [
        {
            id: 1,
            icon: html,
            name: 'Html'
        },
        {
            id: 2,
            icon: css,
            name: 'CSS'
        },
        {
            id: 3,
            icon: js,
            name: 'JavaScript'
        },
        {
            id: 4,
            icon: react,
            name: 'React'
        },
        {
            id: 5,
            icon: bootstrap,
            name: 'Bootstrap'
        },
        {
            id: 6,
            icon: nodejs,
            name: 'NodeJs'
        },
        {
            id: 7,
            icon: daisyUI,
            name: 'DaisyUI'
        },
     ]

    return (
       <div>
        <h1 className='text-center text-5xl font-semibold mt-10'>Skill List</h1>
         <div className=' grid lg:grid-cols-4 grid-cols-1'>
            {
                skills.map(skill => <MySkill
                    key={skill.id}
                    skill={skill} 
                ></MySkill>)
            }
        </div>
       </div>
    );
};

export default MySkills;
