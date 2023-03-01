import React from 'react';
import ProjectItem  from './ProjectItem';
import propertyImg from '../assets/img/GifExpertApp.png';
import propertyImg2 from '../assets/img/Portafolio.png'
import propertyImg3 from '../assets/img/ToDoList.png'
import propertyImg4 from '../assets/img/Clima.png'


export const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>As you can see in this section, I have few projects, I am someone new, starting in the IT world with a great desire to improve and advance...</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={propertyImg} title='Gif Expert App' url='https://gif-expert-app-ramallo.netlify.app/' stack='ReactJS, CSS'/>
                <ProjectItem img={propertyImg2} title='Portafolio app' url='' stack='React, Tailwind'/>
                <ProjectItem img={propertyImg3} title='ToDoList' url='https://to-do-liste-three.vercel.app/' stack='React, CSS'/>
                <ProjectItem img={propertyImg4} title='WheatherApp' url='https://weather-clim-app.vercel.app/' stack='React, CSS Module'/>
                
            </div>
        </div>
    )
}
export default Projects;
