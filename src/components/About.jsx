import React from 'react';
import Photo from '../assets/photo.png';

const About = () => {
  return (
<div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
<div className='flex flex-col justify-center items-center w-full h-full'>
  <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    <div className='sm:text-right pb-8 pl-4'>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
        About
      </p>
    </div>
    <div></div>
    </div>
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 '>
      <div className='max-w-[1000px] w-full grid '>
      <img src={Photo} alt='About Me' style={{ height: '800px', width: '1000px'  }}  />
      </div>
      <div>
        <p className=' flex flex-col justify-center items-center w-full h-full '>I am passionate about building excellent software that improves
        the lives of those around me. I specialize in creating software
        for clients ranging from individuals and small-businesses all the
        way to large enterprise corporations. What would you do if you had
        a software expert available at your fingertips?</p>  
      </div>
    </div>
</div>
</div>
);
};
export default About;

