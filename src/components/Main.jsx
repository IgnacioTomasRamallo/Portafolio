import React from 'react'
import imagenFondo from '../assets/img/dell.jpg'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaLinkedinIn,FaInstagram} from 'react-icons/fa';

export const Main = () => {
    const redes = ['https://twitter.com/colo_ramallo', 'https://www.facebook.com/tomas.ramallo.79', 'https://www.instagram.com/colo_ramallo/' , 'https://www.linkedin.com/in/ignacio-ramallo/']
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' 
            src={imagenFondo} 
            alt='/'
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>

                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center' >

                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-100'>I'm Ignacio Ramallo</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-100'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer', //types 'One
                                2000, //waits 1s
                                'Coder', //Deletes 'One' and types 'Two
                                2000, // Waits 2s
                                'Tech Enthusiast',
                                2000,
                                
                            ]}
                            wrapper='div'
                            cursor={true}
                            repeat={Infinity}
                            style={{fontSize: '1em', paddingLeft: '5px' }}
                        />

                    </h2>
                    <div className='flex justify-between pr-6 max-w-[200px] w-full m-[50px]'>
                        <a href={redes[0]}>
                            <FaTwitter className='cursor-pointer' size={20} />
                        </a>
                        <a href={redes[1]}>
                            <FaFacebookF className='cursor-pointer' size={20} />
                        </a>
                        <a href={redes[2]}>
                            <FaInstagram className='cursor-pointer' size={20} />
                        </a>
                        <a href={redes[3]}>
                            <FaLinkedinIn className='cursor-pointer' size={20} />
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}
