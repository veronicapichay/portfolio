import React from 'react';
import CSharp from '../assets/csharp.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Java from '../assets/java-logo-1.png';
import Postgre from '../assets/postgreLogo.png';

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#bcbfc2] hover:scale-110 duration-500'>
                  <img className= ' w-20 mx-auto' src={Java} alt="HTML icon"  />
                  <p className='my-4'>Java</p>
              </div>
              <div className='shadow-md shadow-[#e8d4d3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
              <div className='shadow-md shadow-[#bcbfc2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSharp} alt="HTML icon" />
                  <p className='my-4'>C#</p>
              </div>
              <div className='shadow-md shadow-[#e8d4d3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
              <div className='shadow-md shadow-[#bcbfc2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Postgre} alt="HTML icon" />
                  <p className='my-4'>PostgreSQL</p>
              </div>
                <div className='shadow-md shadow-[#e8d4d3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
