import React from 'react'
import '../components/Style/card.css';

export const ProjectItem = ({img, title, url, stack}) => {
    return (
        <div className='card relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            <img src={img} alt={title} className='rounded-xl group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute to-[50%] traslate-x-[-50%] traslate-y-[-50%]' >
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
                <a href='/'>
                    <a href={url}><p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p></a>
                </a>
                
            </div>
        </div>
    )
}
export default ProjectItem;
