import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e8d4d3]'>


 {/* Container */}
 <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
 <p className='font-bold text-pink-500'>Hi, my name is</p>
 <h1 className='text-5xl sm:text-7xl font-bold text-[#243b83] py-2 max-w-[600px]'>
 Veronica Pichay
 </h1>
 <h2 className='text-4xl sm:text-7xl font-bold text-[#92a2d3]'>
   I'm a Software Engineer.
 </h2>
 <p className='text-[#30343d] py-4 max-w-[600px]'>
   I’m a full-stack developer specializing in building (and occasionally
   designing) exceptional digital experiences. Currently, I’m focused on
   building responsive full-stack web applications.
 </p>
 <div>
   <button className='text-black group border-4 border-pink-600 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
     View Projects
     <span className='group-hover:rotate-90 duration-500'>
       <HiArrowNarrowRight className='ml-3 ' />
     </span>
   </button>
 </div>
</div>
</div>
);
};

export default Home;