import React from 'react'
import WorkItem from './WorkItem';

const data = [
    {
        year: 2002,
        title:'ContentCreator',
        duration: '3 Years',
        details:
        'Lorem ipsum dolor sit amet, consectetur adip',
    },
    {
        year: 2003,
        title:'ContentCrea',
        duration: '3 Years',
        details:
        'Lorem ipsum dolor sit amet, consecte adip',
    },
    {
        year: 2004,
        title:'ContentCreat',
        duration: '3 Years',
        details:
        'Lorem ipsum dolor sit amet, consectetu adip',
    },
    {
        year: 2005,
        title:'ContentCreato',
        duration: '3 Years',
        details:
        'Lorem ipsum dolor sit amet, consectet adip',
    },
];

export const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, i)=>{
                <WorkItem 
                    key={i} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                />
            })}
        </div>
    )
}
export default Work;
